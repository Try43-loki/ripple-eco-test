const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;
export const getAllDiscussionsService = async () => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/discussions/149152e2-8b86-440e-84fa-0e504adabc9b`
    );
    const data = await res.json();
    console.log("data", data);

    return data;
  } catch (e) {
    console.log(e);
  }
};
