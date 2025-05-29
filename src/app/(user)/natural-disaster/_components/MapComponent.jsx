"use client";
import React from "react";
import {
  BtnSelectSeverity,
  BtnSelectType,
  DatePickerDemo,
} from "./SelectButtonComponent";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("../_components/MapView"), {
  ssr: false, // Disable SSR for Leaflet (browser-only lib)
});

const MapComponent = () => {
  return (
    <article className="px-6 lg:px-[150px] flex gap-8 text-white text-center lg:flex-col">
      <div className="flex gap-3 items-center z ">
        <span className="font-medium text-base text-dark-gray">Filter by:</span>
        <BtnSelectType />
        <BtnSelectSeverity />
        <DatePickerDemo />
        <DatePickerDemo />
      </div>
      <div className=" h-[500px] w-full -z-1">
        <MapView />
      </div>
    </article>
  );
};

export default MapComponent;
