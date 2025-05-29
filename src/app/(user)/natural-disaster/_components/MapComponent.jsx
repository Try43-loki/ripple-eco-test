"use client";
import React from "react";
import {
  BtnSelectSeverity,
  BtnSelectType,
  DatePickerDemo,
} from "./SelectButtonComponent";
import dynamic from "next/dynamic";
import clsx from "clsx";

const MapView = dynamic(() => import("../_components/MapView"), {
  ssr: false, // Disable SSR for Leaflet (browser-only lib)
});

const MapComponent = ({ isDashboard }) => {
  return (
    <article
      className={clsx(" flex gap-8 text-white text-center lg:flex-col ", {
        "lg:px-[150px]": !isDashboard,
      })}
    >
      <div className="flex gap-3 items-center z-20 ">
        <span className="font-medium text-base text-dark-gray">Filter by:</span>
        <BtnSelectType />
        <BtnSelectSeverity />
        <DatePickerDemo order={1} />
        <DatePickerDemo />
      </div>
      <div className=" h-[500px] z-10 ">
        <MapView />
      </div>
    </article>
  );
};

export default MapComponent;
