"use client";

import { useEffect, useRef, useState } from "react";
import { Droplet, Flame, Waves, Wind } from "lucide-react";
import { renderToString } from "react-dom/server";

const highwayOnlyStyle = [
  { featureType: "road.arterial", stylers: [{ visibility: "off" }] },
  { featureType: "road.local", stylers: [{ visibility: "off" }] },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ visibility: "on" }, { color: "#7F8CAA" }],
  },
];

const getIconByType = (type) => {
  const base =
    "bg-white text-green  rounded-full w-[36px] h-[36px] flex items-center justify-center";
  switch (type) {
    case "Flood":
      return <Droplet className={base} />;
    case "Wildfires":
      return <Flame className={base} />;
    case "Earthquakes":
      return <Waves className={base} />;
    case "Typhoons":
      return <Wind className={base} />;
    default:
      return null;
  }
};

export default function GoogleMap({ disasters }) {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API;

    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      const location = { lat: 12.326733, lng: 104.904664 };

      const gmap = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 7,
        zoomControl: true,
        mapTypeId: "roadmap",
        mapId: "YOUR_MAP_ID_HERE",
        disableDefaultUI: true,
        draggable: true,
        scrollwheel: true,
        disableDoubleClickZoom: true,
        keyboardShortcuts: false,
        styles: highwayOnlyStyle,
      });

      // Display All Disaster Data
      disasters.forEach((disaster) => {
        const iconDiv = document.createElement("div");
        iconDiv.className = "bg-white rounded-full p-1 shadow";
        iconDiv.innerHTML = renderToString(getIconByType(disaster.type));

        const marker = new window.google.maps.marker.AdvancedMarkerElement({
          position: { lat: disaster.coords[0], lng: disaster.coords[1] },
          content: iconDiv,
          map: gmap,
        });

        // For Marker Pop Up
        marker.addListener("click", () => {
          if (infoWindow) infoWindow.close();
          const infowin = new window.google.maps.InfoWindow({
            content: `
  <div style="
    font-family: 'Segoe UI', sans-serif;
    font-size: 14px;
    color: #1f2937;
    max-width: 300px;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    background: white;
  ">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <strong style="font-size: 18px; font-weight: 600;">${disaster.type}</strong>
    </div>
    <div style="margin-bottom: 6px;"><strong>Description:</strong> ${disaster.description}</div>
    <div style="margin-bottom: 6px;"><strong>Location:</strong> ${disaster.location}</div>
    <div style="margin-bottom: 6px;"><strong>Date:</strong> ${disaster.date}</div>
    <div><strong>Severity:</strong> ${disaster.severity}</div>
  </div>
`,
          });
          infowin.open(gmap, marker);
          setInfoWindow(infowin);
        });
      });

      setMap(gmap);
    };

    // Configure
    if (!window.google?.maps) {
      if (!document.getElementById("google-maps-script")) {
        const script = document.createElement("script");
        script.id = "google-maps-script";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=marker`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        // If the script is still loading
        document
          .getElementById("google-maps-script")
          .addEventListener("load", initMap);
      }
    } else {
      initMap();
    }
  }, [disasters]);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "600px", borderRadius: "12px" }}
    />
  );
}
