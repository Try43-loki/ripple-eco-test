"use client";
import React, { useState } from "react";
import LoginComponent from "../_component/LoginComponent";
import SetPasswordComponent from "../_component/SetPasswordComponent";
import AdditonalInfoComponent from "../_component/AdditionalInfoComponent";
import LoginSuccessComponent from "../_component/LoginSuccessComponent";

function LoginPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  return (
    <>
      {currentStep === 1 && <LoginComponent onNext={nextStep} />}
      {currentStep === 2 && (
        <SetPasswordComponent onNext={nextStep} onPrev={prevStep} />
      )}
      {currentStep === 3 && (
        <AdditonalInfoComponent onNext={nextStep} onPrev={prevStep} />
      )}
      {currentStep === 4 && (
        <LoginSuccessComponent onNext={nextStep} onPrev={prevStep} />
      )}
      {currentStep === 5 && <Step5 onPrev={prevStep} />}
    </>
  );
}

export default LoginPage;
