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
      <DialogContent className="sm:max-w-[500px] bg-white border border-lightes-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green">
            Create Take Action
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div className="space-y-2">
            <Label className="text-lg font-medium text-dark-green">Image</Label>
            <div className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="flex flex-col items-center gap-2">
                <ImageIcon className="h-10 w-10 text-gray-400" />
                <span className="text-gray-500">Upload image</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-2">
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
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="destructive"
              onClick={() => onOpenChange(false)}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-green hover:bg-green/80 text-white"
            >
              Create Take action
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
