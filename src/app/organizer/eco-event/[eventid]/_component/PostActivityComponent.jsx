"use client";
import React, { useState } from "react";
import Image from "next/image";

const PostActivityComponent = () => {
  // State to manage form visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle form visibility
  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      {/* Button to open the form */}
      <article className="flex items-center justify-between w-full bg-white py-4 px-5 mt-10 rounded-2xl">
        <p className="text-dark-green font-medium">Event Activity</p>
        <button
          className="bg-green text-white py-3 px-5 rounded-2xl hover:bg-green/80 transition"
          onClick={toggleForm}
        >
          Post Activity
        </button>
      </article>

      {/* Modal for the form */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-50">
          <div
            className="bg-white p-6 rounded-lg shadow-md max-w-md w-full"
            style={{ maxWidth: "400px" }}
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={toggleForm}
            >
              ×
            </button>

            {/* Form Title */}
            <h2 className="text-xl font-bold text-green mb-4">
              Post Take Activity
            </h2>

            {/* Form Fields */}
            <form>
              {/* Title Input */}
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-dark-green"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="RippleEco"
                  className="mt-1 block w-full bg-lighter-white placeholder:text-lighter-green rounded-md px-3 py-2 focus:outline-none focus:border-dark-green"
                />
              </div>

              {/* Image Upload */}
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-dark-green"
                >
                  Image
                </label>
                <div
                  className="mt-1 relative cursor-pointer border-2 border-dashed border-strong-orange rounded-md px-6 py-10 text-center"
                  style={{ minHeight: "120px" }}
                >
                  <Image
                    src="/assets/upload-icon.png"
                    alt="Upload icon"
                    width={24}
                    height={24}
                    className="mx-auto mb-2"
                  />
                  <p className="text-sm text-lighter-green">Upload image</p>
                </div>
              </div>

              {/* Description Input */}
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-dark-green"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="This event is amazing"
                  rows={6}
                  className="mt-1 block w-full bg-lighter-white placeholder:text-lighter-green rounded-md px-3 py-2 focus:outline-none focus:border-dark-green"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-green text-white px-4 py-2 rounded-md hover:bg-green/80"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default PostActivityComponent;
