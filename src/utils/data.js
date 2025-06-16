import {
  getAllContributeTypesService,
  getAllEventCategoriesService,
  getAllEventTypesService,
  getAllProvincesService,
} from "@/service/ecoEventService";
import { get } from "react-hook-form";
export const eventTypes = [];
export const categories = [];
export const certificates = [];
export const contributeType = [];
export const locations = [];
export const slots = [];
const province = await getAllProvincesService();
province?.data?.forEach((prov) => {
  locations.push({
    value: prov?.provinceName,
    id: prov?.provinceId,
  });
});

const categoriesData = await getAllEventCategoriesService();
categoriesData.data.forEach((prov) => {
  categories.push({
    value: prov?.categoryName,
    id: prov?.categoryId,
  });
});

const contributeData = await getAllContributeTypesService();
contributeData.data.forEach((prov) => {
  contributeType.push({
    value: prov?.contributeTypeName,
    id: prov?.contributeTypeId,
  });
});

const eventTypeData = await getAllEventTypesService();
eventTypeData.data.forEach((prov) => {
  eventTypes.push({
    value: prov?.eventType,
    id: prov?.eventTypeId,
  });
});

console.log("event type : ", eventTypes);

certificates.push(
  {
    value: "Yes",
    id: 1,
  },
  {
    value: "No",
    id: 2,
  }
);
export const contributeTypeRestrictions = [
  {
    contributeTypeId: 3,
    contributeTypeName: "donation",
    eventTypeId: 1,
  },
  {
    contributeTypeId: 2,
    contributeTypeName: "free",
    eventTypeId: 2,
  },
  {
    contributeTypeId: 1,
    contributeTypeName: "fee",
    eventTypeId: 2,
  },
  {
    contributeTypeId: 4,
    contributeTypeName: "volunteer",
    eventTypeId: 1,
  },
  {
    contributeTypeId: 5,
    contributeTypeName: "donation and volunteer",
    eventTypeId: 1,
  },
];
