"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// Fix default icon issues with Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function MapView() {
  useEffect(() => {
    // Fix for server/client mismatch if needed
  }, []);

  return (
    <MapContainer
      center={[13.596995, 104.902086]}
      zoom={7}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
      className="rounded-3xl "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>A pretty marker popup.</Popup>
      </Marker> */}
    </MapContainer>
  );
}
