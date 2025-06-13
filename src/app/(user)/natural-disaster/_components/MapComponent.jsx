"use client";
import React from "react";
import { FilterPanel } from "./FilterPanelNaturalDisaster";
import clsx from "clsx";
import dynamic from "next/dynamic";

const GoogleMap = dynamic(() => import("../_components/GoogleMap"), {
  ssr: false,
});

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

const MapComponent = ({ isDashboard }) => {
  return (
    <article
      className={clsx(" flex gap-8 text-white text-center lg:flex-col ", {
        "lg:px-[180px]": !isDashboard,
      })}
    >
      <div className="flex gap-3 items-center z-20 ">
        <FilterPanel />
      </div>
      <GoogleMap disasters={disastersWithCoords} />
    </article>
  );
};

export default MapComponent;
