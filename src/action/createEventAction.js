"use server";

import {
  createEventService,
  inviteFriendService,
  updateEventService,
} from "@/service/createEventService";
import {
  categories,
  contributeType,
  eventTypes,
  locations,
} from "@/utils/data";
import { format } from "date-fns";
import { revalidateTag } from "next/cache";

export const createEventAction = async (formData) => {
  // Format event data
  const event = {
    title: formData?.title,
    image: formData?.pictures?.map((pic) => pic?.imageUrl),
    maxSlot: Number(formData?.volunteer),
    startDate: format(formData?.startDate, "yyyy-MM-dd"),
    endDate: format(formData?.endDate, "yyyy-MM-dd"),
    contributeTypeId: contributeType.find(
      (type) => type.value === formData?.contributeType
    )?.id,
    provinceId: locations.find((loc) => loc.value === formData?.location)?.id,
    eventTypeId: eventTypes.find((type) => type.value === formData?.eventTypes)
      ?.id,
    categoryId: categories.find((type) => type.value === formData?.categories)
      ?.id,
    description: formData?.description,
    isProvideCertificate: formData?.certificate === "Yes" ? true : false,
  };

  // Format agenda requests
  function getDatesInRange(startDateStr, endDateStr) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const dates = [];
    while (startDate <= endDate) {
      dates.push(new Date(startDate)); // clone the date
      startDate.setDate(startDate.getDate() + 1);
    }
    return dates;
  }

  const startDate = event?.startDate;
  const endDate = event?.endDate;

  const dateRange = getDatesInRange(startDate, endDate);

  const agendaRequests = dateRange.map((dateObj, index) => {
    const formattedDate = dateObj.toISOString().split("T")[0]; // "YYYY-MM-DD"

    return {
      dayLabel: `Day ${index + 1}`,
      date: formattedDate,
      activitiesList:
        formData.agenda?.[index]?.activities?.map((activity) => ({
          time: activity.time,
          description: activity.task,
        })) || [],
    };
  });

  event.agendaRequests = agendaRequests;
  try {
    const res = await createEventService(event);
    if (res?.code == 201) {
      // revalidateTag
      return { success: true, data: res?.data };
    }
    return { success: false, error: "Failed to create event." };
  } catch (err) {
    console.error("createEventAction", err);
  }
};

export const updateEventAction = async (data, eventId) => {
  const formData = {
    title: data?.title,
    image: data?.images?.map((pic) => pic?.imageUrl),
    maxSlot: data?.volunteer,
    description: data?.description,
  };
  console.log("formData", formData); // tod
  try {
    const res = await updateEventService(formData, eventId);
    console.log("update ", res);
  } catch (err) {
    console.error("updateEventAction", err);
  }
};

export const inviteFriendAction = async (formData) => {
  try {
    const response = await inviteFriendService(formData);
    return { success: true, data: response };
  } catch (error) {
    console.error("inviteFriendAction error:", error);
    return { success: false, error: "Failed to send invite." };
  }
};
