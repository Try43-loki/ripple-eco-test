import QRCodeGenerator from "@/components/QRCodeGenerator";
import UpdateEventComponent from "@/components/UpdateEventComponent";
import React from "react";

function page() {
  return (
    <>
      <div>
        <UpdateEventComponent />
      </div>
      <div>
        <h1>QR Code for Event</h1>
        <QRCodeGenerator value="https://www.youtube.com/watch?v=4S2FA_yMqEI" />
      </div>
    </>
  );
}

export default page;
