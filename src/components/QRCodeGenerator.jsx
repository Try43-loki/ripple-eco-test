"use client";
import { QRCodeSVG } from "qrcode.react";

const QRCodeGenerator = ({ value, name }) => {
  return (
    <div className="w-[260px] rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white">
      {/* Header */}
      <div className="bg-[#d5001c] p-3 text-white font-bold text-center text-lg tracking-widest">
        KHQR
      </div>

      {/* Name */}
      <div className="text-center py-3 border-b border-dashed border-gray-300">
        <div className="text-sm font-medium text-gray-800">{name || "Event Owner"}</div>
      </div>

      {/* QR Code */}
      <div className="flex items-center justify-center py-5 bg-white">
        <QRCodeSVG value={value} size={200} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
