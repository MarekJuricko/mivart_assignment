import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';

// Default position for the map (latitude and longitude).
const defaultPosition = [49.0009524, 21.2373488];

// Custom icon settings for the map marker.
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', 
  iconSize: [25, 41], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34],
});

// InteractiveMap component: Renders a map with a marker and popup.
export default function InteractiveMap() {
  // State to manage the map's center position
  const [position, setPosition] = useState(defaultPosition);

  return (
    <MapContainer center={position} zoom={25} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Levočská 6116/5, Prešov</Popup>
      </Marker>
    </MapContainer>
  );
}