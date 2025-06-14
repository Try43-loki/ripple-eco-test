import { addMonths, format } from "date-fns";
import { baseUrl } from "./constants";

export const getFilterDisaster = async (type, severity, startDate, endDate) => {
  const params = new URLSearchParams();
  const oneMonthLater = addMonths(new Date(), 1);
  const formattedDateEnd = format(oneMonthLater, "yyyy-MM-dd");
  const formattedDateStart = format(new Date(), "yyyy-MM-dd");

  if (type) params.append("disasterType", type);
  if (severity) params.append("severityType", severity);
  if (startDate) {
    params.append("startDate", startDate);
  } else {
    params.append("startDate", formattedDateStart);
  }
  if (endDate) {
    params.append("endDate", endDate);
  } else {
    params.append("endDate", formattedDateEnd);
  }
  const queryString = params.toString(); // this will be empty if no params
  const url = queryString ? `?${queryString}` : "";
  try {
    const res = await fetch(`${baseUrl}/natural-disaster${url}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getDirectionProvinceByLatLng = async (latLng) => {
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
