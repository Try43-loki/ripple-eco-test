import React from "react";
import Image from "next/image";

const CreateDiscussionComponent = ({ showModal, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-50">
      <div
        className="bg-white p-6 rounded-lg shadow-md max-w-md w-full"
        style={{ maxWidth: "400px" }}
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>

        {/* Form Title */}
        <h2 className="text-xl font-bold text-dark-green mb-4">
          Create Discussion
        </h2>

        {/* Form Fields */}
        <form>
          {/* Title Input */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter discussion title"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-dark-green"
            />
          </div>

          {/* Tags Input */}
          <div className="mb-4 flex gap-2">
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700"
            >
              Tags
            </label>
            <div className="flex-grow">
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="Add tags"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-dark-green"
              />
            </div>
            <button
              type="button"
              className="bg-green text-white px-4 py-2 rounded-md hover:bg-green/80 transition"
            >
              +
            </button>
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter discussion description"
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-dark-green"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <div
              className="mt-1 relative cursor-pointer border-2 border-dashed border-orange-400 rounded-md px-6 py-10 text-center"
              style={{ minHeight: "120px" }}
            >
              <Image
                src="/assets/upload-icon.png"
                alt="Upload icon"
                width={24}
                height={24}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-500">Upload image</p>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="bg-red text-white px-4 py-2 rounded-md hover:bg-red/80 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green text-white px-4 py-2 rounded-md hover:bg-green/80 transition"
            >
              Create Discussion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDiscussionComponent;
