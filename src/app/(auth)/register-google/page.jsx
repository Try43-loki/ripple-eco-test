import React from "react";
import AdditonalInfoComponent from "../_component/AdditionalInfoComponent";
import { auth } from "@/auth";
import { getUserProfileAction } from "@/action/user-action";

async function RegisterGooglePage() {
  const session = await auth();
  const profile = await getUserProfileAction();

  return (
    <>
      <AdditonalInfoComponent
        operator={"google"}
        session={session}
        profile={profile}
      />
    </>
  );
}

export default RegisterGooglePage;
