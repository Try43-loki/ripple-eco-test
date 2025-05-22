import React from "react";
import RegisterCopmponent from "../_component/RegisterComponent";
import OTPVerifyCopmponent from "../_component/OTPVerifyComponent";
import UserNavbarComponent from "@/components/NavbarComponent";

function RegisterPage() {
  return (
    <div className="bg-black">
      <OTPVerifyCopmponent />
    </div>
  );
}

export default RegisterPage;
