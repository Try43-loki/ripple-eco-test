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
