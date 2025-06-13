"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import OrganizerRatingsComponent from "./RateOrganizerComponent";
import RatingExperenceComponent from "./RatingExperenceComponent";
import RatingOverallComponent from "./RatingOverallComponent";
import { fileUploadAction } from "@/action/FileUploadAction";
import { rateFeedbackAction } from "@/action/createEventAction";

export default function RateComponent() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const progress = (currentPage / totalPages) * 100;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rating1: 0,
      rating2: 0,
      rating3: 0,
      rating4: 0,
      rating5: 0,
      feedback: "",
      file: null,
    },
  });
  const eventId = "c45a4711-fe7d-4e29-b967-464d0eeb6ebc";
  const onSubmit = async (data) => {
    const picture = await fileUploadAction(data.file);
    data.file = picture;
    const isSuccess = await rateFeedbackAction(data, eventId);
    if (isSuccess?.success) {
      console.log(isSuccess?.message);
    }
    console.log("Form Submitted!", data);

    setOpen(false);
    setCurrentPage(1);
    reset();
  };

  const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderCurrentPage = () => {
    const commonProps = { register, watch, setValue, errors };

    switch (currentPage) {
      case 1:
        return <OrganizerRatingsComponent {...commonProps} />;
      case 2:
        return <RatingExperenceComponent {...commonProps} />;
      case 3:
        return <RatingOverallComponent {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <Sparkles className="h-5 w-5 mr-2" />
          Rate & Review
        </Button>
      </DialogTrigger>

      <DialogContent className=" !w-[500px] bg-white border-0 rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-green p-4 rounded-3xl ">
          <DialogHeader>
            <DialogTitle className="text-3xl text-white text-center">
              Share Your Experience
            </DialogTitle>
          </DialogHeader>
        </div>

        <div className="h-[650px]  overflow-y-scroll">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentPage} of {totalPages}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 bg-green rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="min-h-[400px]">{renderCurrentPage()}</div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
            {currentPage > 1 ? (
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="px-6 py-3 rounded-2xl border border-light-strok font-medium transition-all cursor-pointer duration-300"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Previous
              </Button>
            ) : (
              <div />
            )}

            <Button
              onClick={currentPage === 3 ? handleSubmit(onSubmit) : handleNext}
              className={`px-8 py-3 rounded-2xl cursor-pointer  shadow-lg hover:shadow-xl transform  transition-all duration-300 ${
                currentPage === 3
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  : "bg-gradient-to-r from-blue-500 to-blue-400 hover:from-green-300 hover:to-green-500"
              } text-white`}
            >
              {currentPage === 3 ? (
                <>
                  <Sparkles className="h-5 w-5 mr-2" />
                  Submit Review
                </>
              ) : (
                <>
                  Next Step
                  <ChevronRight className="h-5 w-5 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
