"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

export default function CreateTakeActionFormComponent({ open, onOpenChange }) {
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    onOpenChange(false); // Close modal on submit
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full lg:min-w-[600px] sm:max-w-[600px] bg-white border border-lightes-white rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green active:border-none">
            Create Take Action
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {/* Title Input */}
          <div className="space-y-2">
            <Label
              htmlFor="title"
              className="text-lg font-medium text-dark-green"
            >
              Title
            </Label>
            <Input
              id="title"
              placeholder="Enter take action title"
              className="h-12 border border-lightes-white placeholder:text-lighter-green"
            />
          </div>

          {/* Send To Input */}
          <div className="space-y-2">
            <Label
              htmlFor="sendTo"
              className="text-lg font-medium text-dark-green"
            >
              Send To
            </Label>
            <Input
              id="sendTo"
              placeholder="e.g., @government"
              className="h-12 border border-lightes-white placeholder:text-lighter-green"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="text-lg font-medium text-dark-green"
            >
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Enter discussion description"
              className="min-h-[150px] border border-lightes-white placeholder:text-lighter-green"
            />
          </div>

          {/* Image Upload Placeholder */}
          <div className="space-y-2">
            <Label className="text-lg font-medium text-dark-green">Image</Label>
            <div className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="flex flex-col items-center gap-2">
                <ImageIcon className="h-10 w-10 text-gray-400" />
                <span className="text-gray-500">Upload image</span>
              </div>
            </div>
          </div>

          {/* Anonymous Toggle */}
          {/* <div className="flex items-center justify-end space-x-2">
            <Label
              htmlFor="anonymous"
              className="text-lg font-medium text-dark-green"
            >
              Anonymous
            </Label>
            <Switch
              id="anonymous"
              checked={isAnonymous}
              onCheckedChange={setIsAnonymous}
            />
          </div> */}

          {/* Buttons */}
          <DialogFooter className="flex flex-row gap-2 sm:gap-5">
            <Button
              type="button"
              variant="destructive"
              onClick={() => onOpenChange(false)}
              className="w-1/3 sm:w-auto hover:bg-lighter-white bg-meduim-white cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-1/3 sm:w-auto cursor-pointer bg-green hover:bg-green/80 text-white"
            >
              Create Take Action
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
