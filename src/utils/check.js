import { getUserProfileAction } from "@/action/user-action";
import { useRouter } from "next/router";

export const checkRole = async () => {
  const profile = await getUserProfileAction();
  const rounter = useRouter();
  if (profile?.data?.organizer) {
    rounter.push("/organizer/overview");
  } else {
    rounter.push("/home");
  }
};
