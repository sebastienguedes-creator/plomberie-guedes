import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Composant interne pour gérer le cadrage dynamique
function MapController({ largeCircleRef, smallCircleRef }) {
    const map = useMap();
    
    const handleFitBounds = () => {
        let bounds = null;
        
        // On demande au cercle LUI-MÊME ses dimensions réelles sur la carte
        if (largeCircleRef && largeCircleRef.current) {
            bounds = largeCircleRef.current.getBounds();
        } else if (smallCircleRef && smallCircleRef.current) {
            bounds = smallCircleRef.current.getBounds();
        }

        if (bounds) {
            map.invalidateSize();
            // Padding de 30px : laisse respirer le cercle juste ce qu'il faut sans le couper
            map.fitBounds(bounds, { padding: [30, 30], animate: true });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleFitBounds();
        }, 300);

        // Recadre proprement si l'utilisateur redimensionne la fenêtre
        window.addEventListener('resize', handleFitBounds);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleFitBounds);
        };
    }, [map, largeCircleRef, smallCircleRef]);

    return (
        <button
            type="button"
            onClick={handleFitBounds}
            className="absolute bottom-4 right-4 z-[400] bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white px-3.5 py-2 rounded-xl border border-slate-700 shadow-xl text-xs font-semibold flex items-center gap-2 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent"
            title="Recentrer sur la zone d'intervention"
        >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true"></span>
            Recentrer
        </button>
    );
}

export default function ZoneInterventionMap({ showEmergency = false, showProjects = true }) {
    const largeCircleRef = useRef(null);
    const smallCircleRef = useRef(null);
    const centerCoords = [49.1234, 0.8234]; // Valailles / Eure

    return (
        <div className="relative h-full w-full">
            {(showEmergency || showProjects) && (
                <div className="absolute top-4 right-4 z-[400] bg-slate-900/90 border border-slate-700 p-3 rounded-xl shadow-xl backdrop-blur-sm text-xs space-y-2 pointer-events-none">
                    {showEmergency && (
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-amber-500/30 border border-amber-500 shrink-0"></span>
                            <span className="text-slate-200 font-medium">Urgence (30 km)</span>
                        </div>
                    )}
                    {showProjects && (
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500 border-dashed shrink-0"></span>
                            <span className="text-slate-200 font-medium">Projets (150 km)</span>
                        </div>
                    )}
                </div>
            )}

            <MapContainer
                center={centerCoords}
                zoom={7}
                zoomSnap={0.1} /* ESSENTIEL : Permet à Leaflet d'utiliser des zooms à virgule */
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
                className="z-10 rounded-xl"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {showProjects && (
                    <Circle
                        ref={largeCircleRef}
                        center={centerCoords}
                        radius={150000}
                        pathOptions={{
                            color: '#3b82f6',
                            fillColor: '#3b82f6',
                            fillOpacity: 0.1,
                            dashArray: '6, 6'
                        }}
                    />
                )}

                {showEmergency && (
                    <Circle
                        ref={smallCircleRef}
                        center={centerCoords}
                        radius={30000}
                        pathOptions={{
                            color: '#f59e0b',
                            fillColor: '#f59e0b',
                            fillOpacity: 0.15,
                            weight: 2
                        }}
                    />
                )}

                <MapController 
                    largeCircleRef={showProjects ? largeCircleRef : null} 
                    smallCircleRef={showEmergency ? smallCircleRef : null} 
                />
            </MapContainer>
        </div>
    );
}