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

export const getCurrentAirPollutionByDistrictId = async (districtId) => {
  try {
    const res = await fetch(`${baseUrl}/air-pollution/current/${districtId}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getForecastAirPollutionByDistrictId = async (districtId, type) => {
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
