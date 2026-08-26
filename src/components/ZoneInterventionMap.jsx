import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function ZoneInterventionMap() {
  const centerPosition = [49.122221, 0.622906]; 
  const outerRadiusMeters = 150000;

  // Calcule la boîte englobante pour afficher le grand rayon de 150 km en entier
  const outerBounds = L.latLng(centerPosition[0], centerPosition[1]).toBounds(outerRadiusMeters);

  return (
    <div className="space-y-4">
      {/* Carte */}
      <div className="h-72 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl z-0 relative">
        <MapContainer 
          bounds={outerBounds} 
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Cercle ROUGE : Urgences (30 km) */}
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

          {/* Cercle BLEU : Grands Projets (150 km) */}
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
        </MapContainer>
      </div>

      {/* Légende explicative sous la carte */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="flex items-center gap-2.5 bg-red-950/30 border border-red-900/40 p-2.5 rounded-xl">
          <span className="w-3.5 h-3.5 rounded-full bg-red-500 shrink-0 animate-pulse" />
          <span className="text-slate-300">
            <strong className="text-white block">Rayon Urgences (30 km)</strong>
            Dépannage & fuites 7j/7
          </span>
        </div>

        <div className="flex items-center gap-2.5 bg-blue-950/30 border border-blue-900/40 p-2.5 rounded-xl">
          <span className="w-3.5 h-3.5 rounded-full bg-blue-500 shrink-0" />
          <span className="text-slate-300">
            <strong className="text-white block">Rayon Projets (150 km)</strong>
            PAC, Salles de bain, VMC
          </span>
        </div>
      </div>
    </div>
  );
}