"use client";

import ReactDOMServer from "react-dom/server";
import { Droplet, Flame, Waves, Wind } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

// Fix leaflet's default marker icon path issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function createIconFromReactComponent(IconComponent, props = {}) {
  const svgString = ReactDOMServer.renderToStaticMarkup(
    <IconComponent {...props} />
  );
  const html = `
    <div style="
      background: white;
      border-radius: 50%;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 6px rgba(0,0,0,0.2);
    ">
      ${svgString}
    </div>
  `;

  return L.divIcon({
    html,
    iconSize: [42, 42],
    className: "",
    iconAnchor: [21, 42],
    popupAnchor: [0, -42],
  });
}

const disastersWithCoords = [
  {
    id: "1",
    type: "Earthquakes",
    description:
      "A moderate 5.2 magnitude earthquake shook the northern region...",
    location: "Preah Vihear, Cambodia",
    date: "March 12, 2025",
    coords: [13.9333, 104.9667],
  },
  {
    id: "2",
    type: "Flood",
    description:
      "Heavy rains caused flooding in low-lying areas of Phnom Penh...",
    location: "Phnom Penh, Cambodia",
    date: "April 8, 2025",
    coords: [11.562108, 104.888535],
  },
  // Add other disasters as needed...
];

function getIconByType(type, icons) {
  switch (type) {
    case "Earthquakes":
      return icons.waveIcon;
    case "Flood":
      return icons.dropletIcon;
    case "Typhoons":
      return icons.windIcon;
    case "Wildfires":
      return icons.fireIcon;
    default:
      return icons.waveIcon;
  }
}

export default function MapView() {
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    setIcons({
      waveIcon: createIconFromReactComponent(Waves, {
        color: "#22c55e",
        size: 26,
      }),
      dropletIcon: createIconFromReactComponent(Droplet, {
        color: "#22c55e",
        size: 26,
      }),
      windIcon: createIconFromReactComponent(Wind, {
        color: "#22c55e",
        size: 26,
      }),
      fireIcon: createIconFromReactComponent(Flame, {
        color: "#22c55e",
        size: 26,
      }),
    });
  }, []);

  if (!icons) return <div>Loading map...</div>;

  return (
    <MapContainer
      center={[13.596995, 104.902086]}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }}
      className="rounded-3xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {disastersWithCoords.map((disaster) => (
        <Marker
          key={disaster.id}
          position={disaster.coords}
          icon={getIconByType(disaster.type, icons)}
        >
          <Popup>
            <strong>{disaster.type}</strong>
            <br />
            {disaster.description}
            <br />
            <em>{disaster.location}</em>
            <br />
            <small>{disaster.date}</small>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
