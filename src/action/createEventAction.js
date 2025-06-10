"use server";

import {
  createEventService,
  inviteFriendService,
  updateEventService,
} from "@/service/createEventService";

export const createEventAction = async (formData) => {
  const eventData = {
    title: formData?.title,
    image: formData?.pictures?.map((pic) => pic?.imageUrl), // ✅ keep as array
    agendaRequests: [
      {
        dateTime: "2025-06-01 09:00",
        description: "Opening Ceremony",
      },
      {
        dateTime: "2025-06-01 10:00",
        description: "Keynote: The Future of AI",
      },
      {
        dateTime: "2025-06-02 14:00",
        description: "Workshop: Building with Web3",
      },
      {
        dateTime: "2025-06-03 16:00",
        description: "Closing Ceremony and Awards",
      },
    ],
    maxSlot: formData?.volunteer,
    startDate: "2025-06-07",
    endDate: "2025-06-07",
    contributeTypeId: 5,
    provinceId: "5bac5d0f55865e7073f0e99c",
    eventTypeId: 1,
    categoryId: 2,
    description:
      "Join industry leaders, innovators, and tech enthusiasts for a 3-day event exploring the future of technology, AI, Web3, and digital innovation.",
    isProvideCertificate: true,
  };

  try {
    const res = await createEventService(eventData);
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