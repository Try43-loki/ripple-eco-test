import React from "react";
import AdditonalInfoComponent from "../_component/AdditionalInfoComponent";
import { auth } from "@/auth";

async function RegisterGooglePage() {
  const session = await auth();

  return (
    <>
      <AdditonalInfoComponent operator={"google"} session={session} />
    </>
  );
}

export default RegisterGooglePage;
