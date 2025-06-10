"use client";

import React, { useState } from "react";
import ResetPasswordCopmponent from "../_component/ResetPasswordComponent";
import SetPasswordComponent from "../_component/SetPasswordComponent";
import LoginSuccessComponent from "../_component/LoginSuccessComponent";
import OTPVerifyComponent from "../_component/OTPVerifyComponent";

function ForgetPasswordPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handleOtpChangeParent = (value) => {
    setOtp(value);
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  return (
    <>
      {currentStep === 1 && (
        <ResetPasswordCopmponent
          onNext={nextStep}
          handleEmailChange={handleEmailChange}
        />
      )}
      {currentStep === 2 && (
        <OTPVerifyComponent
          onNext={nextStep}
          onPrev={prevStep}
          email={email}
          handleOtpChangeParent={handleOtpChangeParent}
        />
      )}
      {currentStep === 3 && (
        <SetPasswordComponent
          onNext={nextStep}
          onPrev={prevStep}
          email={email}
          otp={otp}
        />
      )}
      {currentStep === 4 && (
        <LoginSuccessComponent onNext={nextStep} onPrev={prevStep} />
      )}
    </>
  );
}

export default ForgetPasswordPage;
