import React, { useState } from "react";

export default function RateComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  const [rating1, setRating1] = useState(0);

  const [rating2, setRating2] = useState(0);

  const [rating3, setRating3] = useState(0);

  const [rating4, setRating4] = useState(0);

  const [rating5, setRating5] = useState(0);

  const [feedback, setFeedback] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  const [fileError, setFileError] = useState("");

  const Star = ({ selected, onClick }) => (
    <svg
      className={`h-8 w-8 cursor-pointer transition-colors duration-200 ${
        selected ? "text-orange-400" : "text-gray-300"
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.36 2.445a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.539 1.118l-3.36-2.445a1 1 0 00-1.176 0l-3.36 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.381-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.96z" />
    </svg>
  );

  // StarRating component for rendering a row of stars
  const StarRating = ({
    totalStars = 5,
    initialRating = 0,
    onRatingChange,
  }) => {
    const [currentRating, setCurrentRating] = useState(initialRating);

    // Handles click on a star to set the rating
    const handleClick = (index) => {
      setCurrentRating(index + 1);
      if (onRatingChange) {
        onRatingChange(index + 1);
      }
    };

    return (
      <div className="flex space-x-1">
        {[...Array(totalStars)].map((_, index) => (
          <Star
            key={index}
            selected={index < currentRating}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    );
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      if (
        fileType === "image/png" ||
        fileType === "image/jpeg" ||
        fileType === "image/jpg"
      ) {
        setSelectedFile(file);
        setFileError("");
      } else {
        setSelectedFile(null);
        setFileError("Only PNG, JPG, and JPEG files are supported.");
      }
    }
  };

  // Handle drag over for file drop
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy";
  };

  // Handle file drop
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      const fileType = file.type;
      if (
        fileType === "image/png" ||
        fileType === "image/jpeg" ||
        fileType === "image/jpg"
      ) {
        setSelectedFile(file);
        setFileError("");
      } else {
        setSelectedFile(null);
        setFileError("Only PNG, JPG, and JPEG files are supported.");
      }
    }
  };

  // Handle "Next" button click
  const handleNext = () => {
    if (currentPage < 3) {
      // Move to the next step if not on the last step
      setCurrentPage(currentPage + 1);
    } else {
      // Logic for final submission or navigation after the last step
      console.log("Form Submitted!", {
        rating1,
        rating2,
        rating3,
        rating4,
        rating5,
        feedback,
        selectedFile,
      });
      // Using a custom modal/message box instead of alert()
      const messageBox = document.createElement("div");
      messageBox.className =
        "fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center";
      messageBox.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <p class="text-lg font-semibold mb-4">Form Submitted!</p>
          <p class="text-gray-700 mb-4">Check console for ratings and feedback.</p>
          <button id="closeMessageBox" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg">Close</button>
        </div>
      `;
      document.body.appendChild(messageBox);
      document.getElementById("closeMessageBox").onclick = () => {
        document.body.removeChild(messageBox);
      };
    }
  };

  // Handle "Previous" button click
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 sm:p-8 relative">
        {/* Header section with dynamic title and close button */}
        <div className="absolute top-4 left-6 flex items-center text-purple-600 font-semibold text-sm">
          <svg
            className="h-4 w-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <button className="absolute top-4 right-6 text-gray-400 hover:text-gray-600 transition-colors duration-200">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Progress bar */}
        <div className="flex mt-12 mb-8 space-x-2">
          <div
            className={`flex-1 h-1.5 ${
              currentPage >= 1 ? "bg-green-500" : "bg-gray-200"
            } rounded-full`}
          ></div>
          <div
            className={`flex-1 h-1.5 ${
              currentPage >= 2 ? "bg-green-500" : "bg-gray-200"
            } rounded-full`}
          ></div>
          <div
            className={`flex-1 h-1.5 ${
              currentPage >= 3 ? "bg-green-500" : "bg-gray-200"
            } rounded-full`}
          ></div>
        </div>

        {/* Main content - conditionally rendered based on currentPage */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Rate and Review
        </h2>

        {currentPage === 1 && (
          <>
            <p className="text-lg text-gray-600 mb-6">Rate on Organizer</p>

            {/* Rating Question 1 */}
            <div className="mb-6">
              <div className="flex items-start mb-2">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold mr-2">
                  1
                </span>
                <p className="text-gray-800 text-base font-medium">
                  Did the event achieve its environmental goal?
                </p>
              </div>
              <StarRating initialRating={rating1} onRatingChange={setRating1} />
            </div>

            {/* Rating Question 2 */}
            <div className="mb-8">
              <div className="flex items-start mb-2">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold mr-2">
                  2
                </span>
                <p className="text-gray-800 text-base font-medium">
                  How well the event was organized?
                </p>
              </div>
              <StarRating initialRating={rating2} onRatingChange={setRating2} />
            </div>
          </>
        )}

        {currentPage === 2 && (
          <>
            <p className="text-lg text-gray-600 mb-6">Rate on Experience</p>

            {/* Rating Question 3 */}
            <div className="mb-6">
              <div className="flex items-start mb-2">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold mr-2">
                  3
                </span>
                <p className="text-gray-800 text-base font-medium">
                  Did users feel like their participation made a difference?
                </p>
              </div>
              <StarRating initialRating={rating3} onRatingChange={setRating3} />
            </div>

            {/* Rating Question 4 */}
            <div className="mb-8">
              <div className="flex items-start mb-2">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold mr-2">
                  4
                </span>
                <p className="text-gray-800 text-base font-medium">
                  Would the user attend again or recommend it to others?
                </p>
              </div>
              <StarRating initialRating={rating4} onRatingChange={setRating4} />
            </div>
          </>
        )}

        {currentPage === 3 && (
          <>
            <p className="text-lg text-gray-600 mb-6">Overall of Event</p>

            {/* Rating Question 5 */}
            <div className="mb-6">
              <div className="flex items-start mb-2">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold mr-2">
                  5
                </span>
                <p className="text-gray-800 text-base font-medium">
                  Overall of Event
                </p>
              </div>
              <StarRating initialRating={rating5} onRatingChange={setRating5} />
            </div>

            {/* Feedback Text Area and File Upload */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* File Upload Section */}
              <div
                className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center flex flex-col items-center justify-center cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById("fileInput").click()}
              >
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".png,.jpg,.jpeg"
                />
                <p className="text-gray-500 mb-2">Drop file here</p>
                <p className="text-gray-500 mb-2">or</p>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg">
                  Upload file
                </button>
                {selectedFile && (
                  <p className="text-sm text-green-600 mt-2">
                    File selected: {selectedFile.name}
                  </p>
                )}
                {fileError && (
                  <p className="text-sm text-red-500 mt-2">{fileError}</p>
                )}
                <p className="text-gray-400 text-xs mt-2">
                  Only PNG, JPG and JPEG files are supported
                </p>
              </div>

              {/* Feedback Text Area */}
              <div className="flex-1">
                <textarea
                  className="w-full h-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  placeholder="About your feeling"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
              </div>
            </div>
          </>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between items-center">
          {currentPage > 1 && (
            <button
              onClick={handlePrevious}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center space-x-2"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                ></path>
              </svg>
              <span>Previous</span>
            </button>
          )}
          <button
            onClick={handleNext}
            className={`text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center space-x-2 ${
              currentPage === 1 ? "ml-auto" : "" // Push to right if only 'Next' button
            } ${
              currentPage === 3
                ? "bg-green-600 hover:bg-green-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            <span>{currentPage === 3 ? "Submit" : "Next"}</span>
            {currentPage !== 3 && ( // Only show arrow for "Next" button
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
