"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { useState } from "react";

const VerifyOrganizerComponent = ({ text, buttonAction }) => {
  const [open, setOpen] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    setOpen(false);
    if (typeof buttonAction === "function") {
      buttonAction();
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="bg-green cursor-pointer text-white rounded-xl px-6 py-3 hover:bg-green/80"
        >
          {text || "Verify Organizer"}
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-white border border-lightes-white max-w-md rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-green text-xl font-bold">
            Verify Organizer
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-5" onSubmit={handleVerify}>
          {/* National ID */}
          <div>
            <label className="block font-semibold text-sm mb-1 text-dark-green">
              National ID Number
            </label>
            <Input
              placeholder="National ID Number"
              className="bg-light-gray border-none placeholder:text-lighter-green"
            />
          </div>

          {/* Khmer and English Names */}
          <div>
            <label className="block font-semibold text-sm mb-1 text-dark-green">
              Name
            </label>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative w-full">
                <Input
                  placeholder="ជា៉ង ស្រីភា"
                  className="bg-light-gray border-none pr-10 placeholder:text-lighter-green"
                />
                <User className="absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
              </div>
              <div className="relative w-full">
                <Input
                  placeholder="Thaong Sreyphea"
                  className="bg-light-gray border-none pr-10 placeholder:text-lighter-green"
                />
                <User className="absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block font-semibold text-sm mb-1 text-dark-green">
              Date of Birth
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="Day"
                className="bg-light-gray border-none placeholder:text-lighter-green"
              />
              <Input
                placeholder="Month"
                className="bg-light-gray border-none placeholder:text-lighter-green"
              />
              <Input
                placeholder="Year"
                className="bg-light-gray border-none placeholder:text-lighter-green"
              />
            </div>
          </div>

          {/* Buttons */}
          <DialogFooter className="pt-4 flex justify-end gap-3">
            <Button
              type="button"
              onClick={() => setOpen(false)}
              className="bg-red cursor-pointer text-white hover:bg-red/80 rounded-lg"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-green text-white cursor-pointer hover:bg-green/80 rounded-lg"
            >
              Verify Organizer
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyOrganizerComponent;
