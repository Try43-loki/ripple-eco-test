const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;
export const getAllDistricts = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/provinces/districts`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
