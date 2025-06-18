// components/toast/NatureToaster.jsx
"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

const NatureToaster = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        className: "nature-toast",
        style: {
          fontFamily: "system-ui, -apple-system, sans-serif",
        },
      }}
    />
  );
};

export default NatureToaster;
