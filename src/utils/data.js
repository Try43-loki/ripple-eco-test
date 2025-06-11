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
    label: prov?.provinceName,
    value: prov?.provinceId,
  });
});
function generateHexId(length = 24) {
  const chars = "abcdef0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
let i = 1;

const categoriesData = await getAllEventCategoriesService();
categoriesData.data.forEach((prov) => {
  categories.push({
    label: prov?.categoryName,
    value: generateHexId(),
  });
});

const contributeData = await getAllContributeTypesService();
contributeData.data.forEach((prov) => {
  contributeType.push({
    label: prov?.contributeTypeName,
    value: generateHexId(),
  });
});

const eventTypeData = await getAllEventTypesService();
eventTypeData.data.forEach((prov) => {
  eventTypes.push({
    label: prov?.eventType,
    value: prov?.eventTypeId,
  });
});

certificates.push(
  {
    label: "Yes",
    value: generateHexId(),
  },
  {
    label: "No",
    value: generateHexId(),
  }
);
