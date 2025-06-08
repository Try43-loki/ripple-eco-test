import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RefreshCcw } from "lucide-react";
import React from "react";

function ResetButtonComponent({ handleResetClick, confirmReset }) {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            type="button"
            onClick={handleResetClick}
            className="flex items-center gap-3 px-5 py-3 cursor-pointer bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-2xl hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:ring-offset-2 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <RefreshCcw size={20} />
            Reset Form
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
              <RefreshCcw size={24} className="text-orange-500" />
              Reset Form?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600 text-base leading-relaxed">
              Are you sure you want to reset the form? This will permanently
              delete all your current agenda data including all days and
              activities. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-3">
            <AlertDialogCancel className="px-6 cursor-pointer py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl border-none transition-all duration-200">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmReset}
              className="px-6 cursor-pointer py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-xl border-none transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Yes, Reset Form
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default ResetButtonComponent;
