// components/toast/ToastContent.jsx
import React from "react";
import LoadingPlant from "./LoadingPlant";
import SuccessTree from "./SuccessTree";
import ErrorPlant from "./ErrorPlant";

export const LoadingToastContent = ({
  message = "Growing your connection...",
}) => {
  return (
    <div className="flex items-center gap-3 p-2">
      <div className="relative">
        <LoadingPlant />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-700">{message}</span>
        <span className="text-xs text-gray-500">Please wait...</span>
      </div>
    </div>
  );
};
