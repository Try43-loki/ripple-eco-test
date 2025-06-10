"use client";
import React, { useState } from "react";

import RegisterCopmponent from "../_component/RegisterComponent";
import OTPVerifyComponent from "../_component/OTPVerifyComponent";
import SetPasswordComponent from "../_component/SetPasswordComponent";
import LoginSuccessComponent from "../_component/LoginSuccessComponent";
import AdditonalInfoComponent from "../_component/AdditionalInfoComponent";

function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  return (
    <>
      {currentStep === 1 && (
        <RegisterCopmponent
          handleEmailChange={handleEmailChange}
          onNext={nextStep}
        />
      )}
      {currentStep === 2 && (
        <OTPVerifyComponent onNext={nextStep} onPrev={prevStep} email={email} />
      )}
      {currentStep === 3 && (
        <SetPasswordComponent
          onNext={nextStep}
          onPrev={prevStep}
          email={email}
        />
      )}
      {currentStep === 4 && (
        <AdditonalInfoComponent
          onNext={nextStep}
          onPrev={prevStep}
          email={email}
        />
      )}
      {currentStep === 5 && <LoginSuccessComponent onPrev={prevStep} />}
    </>
  );
}

export default RegisterPage;
