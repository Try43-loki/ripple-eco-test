"use client";
import React from "react";
import { FilterPanel } from "./FilterPanelNaturalDisaster";
import clsx from "clsx";
import dynamic from "next/dynamic";

const GoogleMap = dynamic(() => import("../_components/GoogleMap"), {
  ssr: false,
});

const MapComponent = ({ isDashboard, naturalData }) => {
  return (
    <article
      className={clsx(" flex gap-8 text-white text-center lg:flex-col ", {
        "lg:px-[180px]": !isDashboard,
      })}
    >
      <div className="flex gap-3 items-center z-20 ">
        <FilterPanel />
      </div>
      <GoogleMap disasters={naturalData} />
    </article>
  );
};

export default MapComponent;
