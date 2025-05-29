export const getAllDiscussionsService = async () => {
  const res = await fetch(
    "http://34.101.52.71:8888/api/v1/discussions/9ab820d5-eb16-455c-80c8-0bff999a2895"
  );
  const data = await res.json();
  return data;
};
