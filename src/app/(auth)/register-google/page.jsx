import React from "react";
import AdditonalInfoComponent from "../_component/AdditionalInfoComponent";
import { auth } from "@/auth";
import { getUserProfileAction } from "@/action/user-action";

async function RegisterGooglePage() {
  const profile = await getUserProfileAction();

  return (
    <>
      <AdditonalInfoComponent operator={"google"} profile={profile} />
    </>
  );
}

export default RegisterGooglePage;
