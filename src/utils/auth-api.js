import { auth } from "../auth";

export async function getAuthToken() {
  const session = await auth();
  return session?.customToken;
}
// export const getAuthTokenGoogle = async () => {
//   const session = await auth();
//   return session?.customToken;
// };
