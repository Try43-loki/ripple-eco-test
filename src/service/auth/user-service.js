import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";
export const getUserProfileService = async () => {
  const token = await getAuthToken();
  const res = await apiRequest(`/profile`, "GET", null, token);
  return res;
};

export const updateProfileService = async (formData, type) => {
  console.log("formData:", formData);
  console.log("type:", type);
  const token = await getAuthToken();
  const data = await apiRequest(
    `/profile/update/${type}`,
    "PUT",
    formData,
    token
  );
  console.log("update profile:", data);

  return data;
};
