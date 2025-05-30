import CreateDiscussionComponent from "@/components/CreateDiscussionComponent";
import { UpdateEventComponent } from "@/components/UpdateEventComponent";
import React from "react";
import ListVolunteerComponent from "../organizer/overview/_component/ListVolunteerComponent";
import { ListComponent } from "../organizer/eco-event/_component/ListComponent";
import { Card } from "@/components/ui/card";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import { events } from "@/service/mockData";
import RateComponent from "@/components/RateComponent";

function page() {
  const data = events;

  return (
    <div>
      <RateComponent />
    </div>
  );
}

export default page;
