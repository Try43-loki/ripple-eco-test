export const getAllDiscussionsService = async () => {
  try {
    const res = await fetch(
      "http://34.101.52.71:8881/api/v1/discussions/149152e2-8b86-440e-84fa-0e504adabc9b"
    );
    const data = await res.json();
    console.log(data);

    return data;
  } catch (e) {
    console.log(e);
  }
};
