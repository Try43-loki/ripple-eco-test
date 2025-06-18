"use client";
import { cancelEventByEventIdAction } from "@/action/createEventAction";
import { OctagonX } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

function CancelEventComponent({ eventId }) {
  const handleCancelEvent = async () => {
    const isCancel = await cancelEventByEventIdAction(eventId);
  };

  return (
    <Button
      onClick={handleCancelEvent}
      className="shadow-none  hover:bg-white border w-full bg-white text-strong-gray font-light cursor-pointer border-light-gray hover:border-red-400  hover:text-red  transition-all ease-in-out duration-100"
    >
      <OctagonX size={20} />
      Cancel Event
    </Button>
  );
}

export default CancelEventComponent;
