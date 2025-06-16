"use client";

import { useEffect, useRef, useState } from "react";
import { Droplet, Flame, Waves, Wind } from "lucide-react";
import { renderToString } from "react-dom/server";
import ReactDOMServer from "react-dom/server";
import clsx from "clsx";
import { cleanAddress, getProvinceFromComponents } from "@/utils/format";

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
    case "FL":
      return <Droplet className={base} />;
    case "WF":
      return <Flame className={base} />;
    case "EQ":
      return <Waves className={base} />;
    case "TC":
      return <Wind className={base} />;
    default:
      return null;
  }
};

const getFullNameDisaster = (type) => {
  switch (type) {
    case "FL":
      return "Floods";
    case "WF":
      return "Wildfires";
    case "EQ":
      return "Earthquakes";
    case "TC":
      return "Typhoons";
    default:
      return null;
  }
};

const InfoWindowContent = ({ disaster }) => (
  <div className="font-sans text-sm text-dark-gray max-w-[350px] p-4 rounded-xl shadow-lg bg-white">
    <div className="flex justify-between items-center mb-2">
      <strong className="text-lg font-semibold text-green ">
        {getFullNameDisaster(disaster?.eventType)}
      </strong>
    </div>
    <div className="mb-1.5 text-start">
      <strong className="font-semibold">Description:</strong>{" "}
      {disaster?.description}
    </div>
    <div className="mb-1.5 text-start">
      <strong className="font-semibold">Location:</strong> {disaster?.location}
    </div>
    <div className="flex self-start w-full">
      <strong className="font-semibold pr-0.5">Severity:</strong>
      <p
        className={clsx(
          "px-2 rounded-lg text-white text-sm",
          { "bg-green": disaster?.alertLevel === "Green" },
          { "bg-orange": disaster?.alertLevel === "Yellow" },
          { "bg-red": disaster?.alertLevel === "Red" }
        )}
      >
        {" "}
        {disaster?.alertLevel}
      </p>
    </div>
  </div>
);

export default function GoogleMap({ disasters }) {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

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

      let infoWindow = new google.maps.InfoWindow();

      // Display All Disaster Data
      disasters.forEach((disaster) => {
        const iconDiv = document.createElement("div");
        iconDiv.className = "bg-white rounded-full p-1 shadow";
        iconDiv.innerHTML = renderToString(getIconByType(disaster.eventType));

        const marker = new window.google.maps.marker.AdvancedMarkerElement({
          position: {
            lat: disaster.geometry.latitude,
            lng: disaster.geometry.longitude,
          },
          content: iconDiv,
          map: gmap,
        });

        // ⬇️ Perform reverse geocoding to get readable location
        const geocoder = new window.google.maps.Geocoder();
        const latlng = {
          lat: disaster.geometry.latitude,
          lng: disaster.geometry.longitude,
        };

        geocoder.geocode({ location: latlng }, (results, status) => {
          let province = "Unknown Province";

          if (status === "OK" && results[0]) {
            province = getProvinceFromComponents(results[0].address_components);
          }

          // Inject address into the disaster object
          const enrichedDisaster = { ...disaster, location: province };

          // ⬇️ Now render InfoWindow content with address
          const htmlString = ReactDOMServer.renderToString(
            <InfoWindowContent disaster={enrichedDisaster} />
          );

          marker.addListener("click", () => {
            infoWindow.setContent(htmlString);
            infoWindow.open(gmap, marker);
          });
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
