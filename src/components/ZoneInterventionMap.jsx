import { MapContainer, TileLayer, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { LocateFixed } from 'lucide-react';

// Sous-composant pour gérer le bouton de recentrage avec l'instance de la carte
function ResetViewButton({ bounds }) {
  const map = useMap();

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        map.fitBounds(bounds);
      }}
      className="absolute top-3 right-3 z-[1000] bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md text-xs font-semibold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
      title="Recentrer sur la zone d'intervention"
    >
      <LocateFixed className="w-4 h-4 text-blue-400" />
      <span>Recentrer</span>
    </button>
  );
}

export default function ZoneInterventionMap({ 
  showEmergency = true, 
  showProjects = true 
}) {
  const centerPosition = [49.122221, 0.622906]; 
  
  // Ajuste dynamiquement le rayon de la vue (bounds) selon les cercles affichés[cite: 6]
  const radiusMeters = (showEmergency && !showProjects) ? 30000 : 150000;
  const mapBounds = L.latLng(centerPosition[0], centerPosition[1]).toBounds(radiusMeters);

  return (
    <div className="space-y-4">
      {/* Carte */}
      <div className="h-72 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl z-0 relative">
        <MapContainer 
          bounds={mapBounds} 
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Bouton de recentrage flottant intégré dans la carte */}
          <ResetViewButton bounds={mapBounds} />

          {/* Cercle ROUGE : Urgences (30 km)[cite: 6] */}
          {showEmergency && (
            <Circle
              center={centerPosition}
              radius={30000}
              pathOptions={{
                color: '#ef4444',
                fillColor: '#ef4444',
                fillOpacity: 0.25,
                weight: 2,
              }}
            />
          )}

          {/* Cercle BLEU : Grands Projets (150 km)[cite: 6] */}
          {showProjects && (
            <Circle
              center={centerPosition}
              radius={150000}
              pathOptions={{
                color: '#3b82f6',
                fillColor: '#3b82f6',
                fillOpacity: 0.08,
                weight: 1.5,
                dashArray: '6, 6',
              }}
            />
          )}
        </MapContainer>
      </div>

      {/* Légende dynamique (s'adapte aux cercles affichés)[cite: 6] */}
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