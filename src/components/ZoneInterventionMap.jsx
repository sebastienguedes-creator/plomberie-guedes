import { useState, useEffect, useRef, lazy, Suspense } from 'react';

// Code Splitting : On importe la carte dynamiquement
const LeafletMapContent = lazy(() => import('./LeafletMapContent'));

export default function ZoneInterventionMap({ 
  showEmergency = true, 
  showProjects = true 
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Stoppe l'observation une fois la carte chargée
        }
      },
      {
        // rootMargin '200px' : La carte se télécharge 200px AVANT de devenir visible à l'écran. 
        // L'utilisateur ne sentira aucun délai.
        rootMargin: '200px',
        threshold: 0
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div className="space-y-4" ref={containerRef}>
      {/* 
        Le conteneur garde les dimensions exactes d'origine (h-72 w-full)[cite: 7].
        C'est vital pour éviter un CLS (Cumulative Layout Shift) pendant le chargement différé.
      */}
      <div className="h-72 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl z-0 relative bg-slate-900">
        {isIntersecting ? (
          <Suspense fallback={
            <div className="h-full w-full flex flex-col items-center justify-center text-slate-400 text-sm">
              <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
              Chargement de la carte...
            </div>
          }>
            <LeafletMapContent 
              showEmergency={showEmergency} 
              showProjects={showProjects} 
            />
          </Suspense>
        ) : (
           /* Emplacement préservé tant que la carte n'est pas encore approchée */
          <div className="h-full w-full bg-slate-900" />
        )}
      </div>

      {/* Légende dynamique 100% sans régression[cite: 7] */}
      <div className={`grid grid-cols-1 ${showEmergency && showProjects ? 'sm:grid-cols-2' : 'grid-cols-1'} gap-3 text-xs`}>
        {showEmergency && (
          <div className="flex items-center gap-2.5 bg-red-950/30 border border-red-900/40 p-2.5 rounded-xl">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500 shrink-0 animate-pulse" />
            <span className="text-slate-300">
              <strong className="text-white block">Rayon Urgences (30 km)</strong>
              Dépannage & fuites 7j/7
            </span>
          </div>
        )}

        {showProjects && (
          <div className="flex items-center gap-2.5 bg-blue-950/30 border border-blue-900/40 p-2.5 rounded-xl">
            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 shrink-0" />
            <span className="text-slate-300">
              <strong className="text-white block">Rayon Projets (150 km)</strong>
              PAC, Salles de bain, VMC
            </span>
          </div>
        )}
      </div>
    </div>
  );
}