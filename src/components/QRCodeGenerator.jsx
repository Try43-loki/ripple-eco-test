"use client";
import { DollarSign } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const QRCodeGenerator = ({ value }) => {
  return (
    <div className="relative inline-block">
      <QRCodeSVG value={value} size={250} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <DollarSign className="w-10 h-10 text-black bg-white rounded-full p-1" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
