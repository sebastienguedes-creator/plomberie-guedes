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

export default function LeafletMapContent({ showEmergency, showProjects }) {
  const centerPosition = [49.122221, 0.622906]; 
  
  // Ajuste dynamiquement le rayon de la vue (bounds) selon les cercles affichés[cite: 7]
  const radiusMeters = (showEmergency && !showProjects) ? 30000 : 150000;
  const mapBounds = L.latLng(centerPosition[0], centerPosition[1]).toBounds(radiusMeters);

  return (
    <MapContainer 
      bounds={mapBounds} 
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ResetViewButton bounds={mapBounds} />

      {/* Cercle ROUGE : Urgences (30 km)[cite: 7] */}
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

      {/* Cercle BLEU : Grands Projets (150 km)[cite: 7] */}
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
  );
}