const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getAllEcoEventService = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/event/all`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getEcoEventByIdService = async (ecoeventId) => {
  try {
    const res = await fetch(`${API_BASE_URL}/event/${ecoeventId}`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
