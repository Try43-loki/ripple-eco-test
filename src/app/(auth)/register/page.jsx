"use client";
import React, { useState } from "react";

import RegisterCopmponent from "../_component/RegisterComponent";
import { OTPInputContext } from "input-otp";
import OTPVerifyComponent from "../_component/OTPVerifyComponent";
import SetPasswordComponent from "../_component/SetPasswordComponent";
import LoginSuccessComponent from "../_component/LoginSuccessComponent";

function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  return (
    <>
      {currentStep === 1 && <RegisterCopmponent onNext={nextStep} />}
      {currentStep === 2 && (
        <OTPVerifyComponent onNext={nextStep} onPrev={prevStep} />
      )}
      {currentStep === 3 && (
        <SetPasswordComponent onNext={nextStep} onPrev={prevStep} />
      )}
      {currentStep === 4 && (
        <LoginSuccessComponent onNext={nextStep} onPrev={prevStep} />
      )}
      {currentStep === 5 && <Step5 onPrev={prevStep} />}
    </>
  );
}

export default RegisterPage;
