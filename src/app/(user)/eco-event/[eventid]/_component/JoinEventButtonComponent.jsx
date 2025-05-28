import { Button } from "@/components/ui/button";
import React from "react";

const JoinEventButtonComponent = ({ text }) => {
  return (
    <Button className="bg-green w-full text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-4 md:py-6.5">
      {text || "Button"}
    </Button>
  );
};

export default JoinEventButtonComponent;
