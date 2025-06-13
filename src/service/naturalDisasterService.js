import { baseUrl } from "./constants";

export const getFilterDisaster = async (type, severity, startDate, endDate) => {
  const params = new URLSearchParams();

  if (type) params.append("disasterType", type);
  if (severity) params.append("severityType", severity);
  if (startDate) params.append("startDate", startDate);
  if (endDate) params.append("endDate", endDate);

  const queryString = params.toString(); // this will be empty if no params
  const url = queryString ? `?${queryString}` : "";

  console.log(url);
  try {
    const res = await fetch(`${baseUrl}/natural-disaster${url}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
