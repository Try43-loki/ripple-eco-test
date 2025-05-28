"use client";
import React, { useState } from "react";
import LoginComponent from "../_component/LoginComponent";

function LoginPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <LoginComponent setCount={setCount} />
    </>
  );
}

export default LoginPage;
