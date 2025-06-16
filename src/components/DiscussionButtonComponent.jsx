"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const DiscussionButtonComponent = ({ text }) => {
  return (
    <Button className="bg-green cursor-pointer text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-4 md:py-6 lg:py-6 text-white hover:bg-green">
      {text || "Button"}
    </Button>
  );
};

export default DiscussionButtonComponent;
