import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";
export const getUserProfileService = async () => {
  const token = await getAuthToken();
<<<<<<< HEAD
  const res = await apiRequest(`/profile`, "GET", null, token);
=======
  const customToken = await getAuthTokenGoogle();
  const res = await apiRequest(`/profile`, "GET", null, token || customToken);
>>>>>>> 254086dcb968384a62f37363b1ce9f48a4c1a009
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
