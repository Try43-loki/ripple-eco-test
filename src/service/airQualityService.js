import { baseUrl } from "./constants";

export const getAllDistricts = async () => {
  try {
    const res = await fetch(`${baseUrl}/provinces/districts`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCurrentAirPollutionByDistrictId = async (districtId, type) => {
  try {
    const res = await fetch(
      `${baseUrl}/air-pollution/forecast/${districtId}?type=${type}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
