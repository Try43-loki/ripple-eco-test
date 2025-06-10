import { auth } from "../auth";

export async function getAuthToken() {
  const session = await auth();
  return session?.data?.token;
}
// export const getAuthTokenGoogle = async () => {
//   const session = await auth();
//   return session?.customToken;
// };
