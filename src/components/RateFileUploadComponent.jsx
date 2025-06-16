"use client";

import { Upload, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

// File Upload Component with Two-Column Layout
const RateFileUploadComponent = ({ register, watch, setValue, errors }) => {
  const [fileError, setFileError] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const selectedFile = watch("file");

  const validateFile = (file) => {
    if (!file) return true;
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    return allowedTypes.includes(file.type);
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (validateFile(file)) {
        setValue("file", file);
        setFileError("");
        // Create image preview
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        setValue("file", null);
        setImagePreview(null);
        setFileError("Only PNG, JPG, and JPEG files are supported.");
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(true);
    event.dataTransfer.dropEffect = "copy";
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      if (validateFile(file)) {
        setValue("file", file);
        setFileError("");
        // Create image preview
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        setValue("file", null);
        setImagePreview(null);
        setFileError("Only PNG, JPG, and JPEG files are supported.");
      }
    }
  };

  const removeImage = () => {
    setValue("file", null);
    setImagePreview(null);
    setFileError("");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Side - Upload Area */}
      <div
        className={`relative overflow-hidden border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 backdrop-blur-sm ${
          isDragOver
            ? "border-green-400 bg-green-50 scale-105"
            : "border-gray-300 bg-gradient-to-br from-gray-50 to-white hover:border-green-400 hover:shadow-lg"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
          accept=".png,.jpg,.jpeg"
        />

        <div className="relative z-10">
          <div
            className={`transition-all duration-300 ${
              isDragOver ? "animate-bounce" : ""
            }`}
          >
            <Upload
              className={`h-8 w-8 mx-auto mb-2 transition-colors duration-300 ${
                isDragOver ? "text-green-500" : "text-gray-400"
              }`}
            />
          </div>

          <p className="text-sm font-medium text-gray-700 mb-2">
            {isDragOver ? "Drop it here!" : "Drop your image here"}
          </p>
          <p className="text-sm text-gray-500 mb-2">or</p>

          <Button
            variant="secondary"
            size="lg"
            className="bg-white/80 text-green cursor-pointer backdrop-blur hover:bg-white border-light-strok font-medium px-6 py-3"
          >
            Choose File
          </Button>

          <p className="text-xs text-gray-500 mt-6">
            PNG, JPG, JPEG up to 10MB
          </p>
        </div>

        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      </div>

      {/* Right Side - Image Preview */}
      <div className="flex flex-col">
        {imagePreview ? (
          <div className="relative border-2 border-emerald-200 rounded-2xl overflow-hidden bg-emerald-50 h-full min-h-[200px]">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* File info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-medium text-sm truncate">
                {selectedFile?.name}
              </p>
              <p className="text-white/80 text-xs">
                {selectedFile && (selectedFile.size / 1024 / 1024).toFixed(2)}{" "}
                MB
              </p>
            </div>

            {/* Remove button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeImage();
              }}
              className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 cursor-pointer shadow-lg transition-all duration-200 hover:scale-110"
            >
              <X size={15} />
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 h-full min-h-[200px] flex items-center justify-center">
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 font-medium">Image preview</p>
              <p className="text-gray-400 text-sm px-2">
                Upload an image to see preview
              </p>
            </div>
          </div>
        )}

        {/* File info when selected */}
        {selectedFile && !imagePreview && (
          <div className="mt-4 p-4 bg-emerald-100 rounded-xl border border-emerald-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-700 truncate">
                  ✓ {selectedFile.name}
                </p>
                <p className="text-xs text-emerald-600">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <button
                onClick={removeImage}
                className="text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Error message */}
        {fileError && (
          <div className="mt-4 p-4 bg-red-100 rounded-xl border border-red-200">
            <p className="text-sm font-medium text-red-700">{fileError}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RateFileUploadComponent;
