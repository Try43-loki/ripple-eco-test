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

function ResetButtonComponent({ onReset, disabled }) {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            type="button"
            disabled={disabled}
            className="flex gap-x-2 items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCcw size={20} />
            Reset to Default
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white border border-light-strok rounded-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Reset Form</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to reset the form? This will remove all days
              and activities except one empty day. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={onReset}
              className="bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
            >
              Reset Form
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default ResetButtonComponent;
