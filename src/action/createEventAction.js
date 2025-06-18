"use server";

import {
  createEventService,
  inviteFriendService,
  updateEventService,
} from "@/service/createEventService";
import {
  cancelEventByEventIdService,
  rateFeedbackService,
} from "@/service/ecoEventService";
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
    revalidateTag("getOwnEvent");
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

export const rateFeedbackAction = async (rateData, eventId) => {
  const formData = {
    feedback: rateData?.feedback,
    image: rateData?.file,
    ratingPointRequestList: [
      {
        questionId: 1,
        ratingPoint: rateData?.rating1,
      },
      {
        questionId: 2,
        ratingPoint: rateData?.rating2,
      },
      {
        questionId: 3,
        ratingPoint: rateData?.rating3,
      },
      {
        questionId: 4,
        ratingPoint: rateData?.rating4,
      },
      {
        questionId: 5,
        ratingPoint: rateData?.rating5,
      },
    ],
  };
  try {
    const data = await rateFeedbackService(formData, eventId);

    if (data?.code == 201) {
      return { success: true, message: "Feedback submitted successfully." };
    }
    return { success: false, message: "Failed to submit feedback." };
  } catch (e) {
    console.log("errors", e);
  }
};

export const cancelEventByEventIdAction = async (eventId) => {
  try {
    const data = await cancelEventByEventIdService(eventId);
    revalidateTag("getOwnEvent");
  } catch (e) {
    console.log("error", e);
  }
};
