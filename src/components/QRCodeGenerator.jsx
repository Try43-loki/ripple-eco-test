"use client";
import { DollarSign } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const QRCodeGenerator = ({ value }) => {
  return (
    <div className="relative inline-block">
      <QRCodeSVG value={value} size={250} />
    </div>
  );
};

export default QRCodeGenerator;
