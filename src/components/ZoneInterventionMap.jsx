import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Composant interne pour gérer le cadrage précis et le bouton "Recentrer"
function MapController({ circleRef }) {
    const map = useMap();
    
    const handleFitBounds = () => {
        if (circleRef.current) {
            const bounds = circleRef.current.getBounds();
            // Padding très faible ([5, 5]) pour que le cercle soit collé au plus près des bords
            map.fitBounds(bounds, { padding: [5, 5], animate: true });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleFitBounds();
        }, 100);

        return () => clearTimeout(timer);
    }, [map, circleRef]);

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
    const circleRef = useRef(null);
    const centerCoords = [49.1234, 0.8234]; // Vallailles / Eure
    const radiusMeters = 150000; // 150 km

    return (
        <div className="relative h-full w-full">
            <MapContainer
                center={centerCoords}
                zoom={7}
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
                        ref={circleRef}
                        center={centerCoords}
                        radius={radiusMeters}
                        pathOptions={{
                            color: '#3b82f6',
                            fillColor: '#3b82f6',
                            fillOpacity: 0.1,
                            dashArray: '6, 6'
                        }}
                    />
                )}

                <MapController circleRef={circleRef} />
            </MapContainer>
        </div>
    );
}