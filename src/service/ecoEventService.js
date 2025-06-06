import { baseUrl } from "./constants";

export const getAllEcoEventService = async () => {
  try {
    const res = await fetch(`${baseUrl}/event/all`);
    const data = await res.json();
    // console.log("Event : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getEcoEventByIdService = async (eventid) => {
  try {
    const res = await fetch(`${baseUrl}/event/${eventid}`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllProvincesService = async () => {
  try {
    // const res = await fetch(`${baseUrl}/provinces/all`);
    const res = await fetch(`${baseUrl}/provinces/all`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllEventTypesService = async () => {
  try {
    const res = await fetch(`${baseUrl}/event-types/all`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllEventCategoriesService = async () => {
  try {
    const res = await fetch(`${baseUrl}/event-categories/all`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllContributeTypesService = async () => {
  try {
    const res = await fetch(`${baseUrl}/contribute-types/all`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getEcoEventByTitleService = async (title) => {
  try {
    const res = await fetch(`${baseUrl}/event/search?title=${title}`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchFilteredEventsService = async ({
  contributeTypeId,
  provinceId,
  eventTypeId,
  categoryId,
  slotStatus,
  startDate,
  endDate,
}) => {
  try {
    const res = await fetch(
      `${baseUrl}/event/filter?contributeTypeId=${contributeTypeId}&provinceId=${provinceId}&eventTypeId=${eventTypeId}&categoryId=${categoryId}&slotStatus=${slotStatus}&startDate=${startDate}&endDate=${endDate}`
    );
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
