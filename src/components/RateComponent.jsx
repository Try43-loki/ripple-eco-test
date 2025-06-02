"use client";

import { useState } from "react";
import { Star, Upload, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function RatingDialog() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);
  const [rating5, setRating5] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");

  const StarRating = ({
    totalStars = 5,
    initialRating = 0,
    onRatingChange,
  }) => {
    const [currentRating, setCurrentRating] = useState(initialRating);

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
            className={`h-8 w-8 cursor-pointer transition-colors duration-200 ${
              index < currentRating
                ? "text-orange-400 fill-orange-400"
                : "text-gray-300"
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    );
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
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

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy";
  };

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

  const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    } else {
      console.log("Form Submitted!", {
        rating1,
        rating2,
        rating3,
        rating4,
        rating5,
        feedback,
        selectedFile,
      });
      setOpen(false);
      // Reset form
      setCurrentPage(1);
      setRating1(0);
      setRating2(0);
      setRating3(0);
      setRating4(0);
      setRating5(0);
      setFeedback("");
      setSelectedFile(null);
      setFileError("");
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progressValue = (currentPage / 3) * 100;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 text-white hover:bg-green-700">
          Rate and Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white border border-light-strok">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl font-bold text-left">
            Rate and Review
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Page 1: Organizer Ratings */}
          {currentPage === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-muted-foreground mb-4">
                  Rate on Organizer
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-start mb-3">
                    <Badge variant="secondary" className="mr-3 mt-0.5">
                      1
                    </Badge>
                    <p className="text-base font-medium">
                      Did the event achieve its environmental goal?
                    </p>
                  </div>
                  <StarRating
                    initialRating={rating1}
                    onRatingChange={setRating1}
                  />
                </div>

                <div>
                  <div className="flex items-start mb-3">
                    <Badge variant="secondary" className="mr-3 mt-0.5">
                      2
                    </Badge>
                    <p className="text-base font-medium">
                      How well the event was organized?
                    </p>
                  </div>
                  <StarRating
                    initialRating={rating2}
                    onRatingChange={setRating2}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Page 2: Experience Ratings */}
          {currentPage === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-muted-foreground mb-4">
                  Rate on Experience
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-start mb-3">
                    <Badge variant="secondary" className="mr-3 mt-0.5">
                      3
                    </Badge>
                    <p className="text-base font-medium">
                      Did users feel like their participation made a difference?
                    </p>
                  </div>
                  <StarRating
                    initialRating={rating3}
                    onRatingChange={setRating3}
                  />
                </div>

                <div>
                  <div className="flex items-start mb-3">
                    <Badge variant="secondary" className="mr-3 mt-0.5">
                      4
                    </Badge>
                    <p className="text-base font-medium">
                      Would the user attend again or recommend it to others?
                    </p>
                  </div>
                  <StarRating
                    initialRating={rating4}
                    onRatingChange={setRating4}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Page 3: Overall Rating and Feedback */}
          {currentPage === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-muted-foreground mb-4">
                  Overall of Event
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start mb-3">
                    <Badge variant="secondary" className="mr-3 mt-0.5">
                      5
                    </Badge>
                    <p className="text-base font-medium">Overall of Event</p>
                  </div>
                  <StarRating
                    initialRating={rating5}
                    onRatingChange={setRating5}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* File Upload */}
                  <div
                    className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center cursor-pointer hover:border-muted-foreground/50 transition-colors"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() =>
                      document.getElementById("fileInput")?.click()
                    }
                  >
                    <input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".png,.jpg,.jpeg"
                    />
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drop file here
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">or</p>
                    <Button variant="secondary" size="sm">
                      Upload file
                    </Button>
                    {selectedFile && (
                      <p className="text-sm text-green-600 mt-2">
                        File selected: {selectedFile.name}
                      </p>
                    )}
                    {fileError && (
                      <p className="text-sm text-destructive mt-2">
                        {fileError}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      Only PNG, JPG and JPEG files are supported
                    </p>
                  </div>

                  {/* Feedback */}
                  <div>
                    <Textarea
                      placeholder="About your feeling"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="h-full min-h-[150px] resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4">
            {currentPage > 1 ? (
              <Button variant="outline" onClick={handlePrevious}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
            ) : (
              <div />
            )}

            <Button
              onClick={handleNext}
              className="bg-green-600 text-white hover:bg-green-700"
            >
              {currentPage === 3 ? "Submit" : "Next"}
              {currentPage !== 3 && <ChevronRight className="h-4 w-4 ml-2" />}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
