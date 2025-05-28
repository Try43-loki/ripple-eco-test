import React from "react";
import { Button } from "./ui/button";

const StatusButtonComponent = ({
  text,
  bgColor = "bg-lighter-blue",
  textColor = "text-blue",
}) => {
  return (
    <Button
      className={`text-xs md:text-sm lg:text-base rounded-full px-4 h-6 md:h-7 lg:h-8 text-center ${bgColor} ${textColor}`}
    >
      {text || "Button"}
    </Button>
  );
};

export default StatusButtonComponent;
