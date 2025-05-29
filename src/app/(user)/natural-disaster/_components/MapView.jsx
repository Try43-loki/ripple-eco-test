"use client";

import ReactDOMServer from "react-dom/server";
import { Droplet, Flame, Waves, Wind } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

// Fix default icon issues with Next.js
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
    severity: "Medium",
    coords: [13.9333, 104.9667],
  },
  {
    id: "2",
    type: "Flood",
    description:
      "Heavy rains caused flooding in low-lying areas of Phnom Penh...",
    location: "Phnom Penh, Cambodia",
    date: "April 8, 2025",
    severity: "High",
    coords: [11.562108, 104.888535],
  },
  {
    id: "3",
    type: "Typhoons",
    description:
      "Strong typhoon winds caused damage along the coastal provinces...",
    location: "Kampot, Cambodia",
    date: "May 15, 2025",
    severity: "Medium",
    coords: [10.6125, 104.1819],
  },
  {
    id: "4",
    type: "Wildfires",
    description: "Forest fires spread rapidly in the Cardamom Mountains...",
    location: "Koh Kong, Cambodia",
    date: "February 20, 2025",
    severity: "High",
    coords: [11.615, 102.9821],
  },
  {
    id: "5",
    type: "Flood",
    description: "Flash floods affected rural villages near Tonle Sap lake...",
    location: "Siem Reap, Cambodia",
    date: "June 3, 2025",
    severity: "Low",
    coords: [13.3671, 103.8448],
  },
  {
    id: "6",
    type: "Earthquakes",
    description:
      "A minor tremor was recorded near the Cambodian-Laos border...",
    location: "Ratanakiri, Cambodia",
    date: "January 28, 2025",
    severity: "Low",
    coords: [13.83, 106.98],
  },
  {
    id: "7",
    type: "Typhoons",
    description:
      "Typhoon caused heavy rains and flooding along the Mekong River...",
    location: "Kampong Cham, Cambodia",
    date: "April 25, 2025",
    severity: "High",
    coords: [12.0, 105.5],
  },
  {
    id: "8",
    type: "Wildfires",
    description:
      "Dry season fires destroyed several hectares of protected forest...",
    location: "Mondulkiri, Cambodia",
    date: "March 9, 2025",
    severity: "Medium",
    coords: [12.5333, 107.0],
  },
  {
    id: "9",
    type: "Flood",
    description:
      "Seasonal floods displaced hundreds in the southern provinces...",
    location: "Takeo, Cambodia",
    date: "May 5, 2025",
    severity: "Medium",
    coords: [10.9833, 104.7833],
  },
  {
    id: "10",
    type: "Earthquakes",
    description:
      "Seismic activity detected near the Cardamom Mountains region...",
    location: "Pursat, Cambodia",
    date: "February 14, 2025",
    severity: "Low",
    coords: [12.55, 103.9],
  },
];

// Map type to icon key in icons state
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

  if (!icons) return null; // or a loading spinner

  return (
    <MapContainer
      center={[13.596995, 104.902086]}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }}
      className="rounded-3xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
