"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Ellipsis, FolderOpen, Settings, Upload } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useCallback, useState } from "react";
import { Card } from "@knocklabs/react";

export function UpdateEventComponent() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(
      (file) =>
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg"
    );

    if (imageFile) {
      setSelectedFile(imageFile);
    }
  }, []);

  const handleFileSelect = useCallback((e) => {
    const file = e.target.files?.[0];
    if (
      file &&
      (file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg")
    ) {
      setSelectedFile(file);
    }
  }, []);

  const handleUpload = () => {
    if (selectedFile) {
      // Handle file upload logic here
      console.log("Uploading file:", selectedFile.name);
    }
  };
  return (
    <Dialog className="w-auto">
      <DialogTrigger asChild>
        <Button className="shadow-none bg-white hover:bg-white border w-full text-strong-gray font-light cursor-pointer border-light-gray hover:border-light-strok  hover:text-dark-green transition-all ease-in-out duration-100">
          <Settings size={20} />
          Update Event
        </Button>
      </DialogTrigger>
      <DialogContent className=" bg-white border border-light-strok !w-auto">
        <DialogHeader>
          <DialogTitle className="text-strong-green">Event Update</DialogTitle>
          <DialogDescription>{""}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex justify-center items-start gap-x-8">
            <div className="w-50 space-y-2.5">
              <div className="grid w-full max-w-sm gap-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  name="title"
                  placeholder="Tree planting"
                  className="bg-lighter-white text-gray-600 border-none h-10"
                />
              </div>
              <div className="grid w-full max-w-sm gap-1.5">
                <Label htmlFor="title">Volunteer</Label>
                <Input
                  name="title"
                  placeholder="1000"
                  className="bg-lighter-white text-gray-600 border-none h-10"
                />
              </div>
            </div>
            <div className="  mx-auto w-50">
              <Label htmlFor="title">Poster</Label>
              <div
                className={`relative border-2 border-dashed transition-colors mt-2 py-2 ${
                  isDragOver
                    ? "border-green-400 bg-green-50"
                    : "border-gray-300 bg-white"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className=" text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <FolderOpen className="w-4 h-4 text-green-600" />
                    </div>
                  </div>

                  <p className="text-gray-600 mb-2 text-sm">Drop file here</p>

                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        // onChange={handleFileSelect}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Button
                        variant="default"
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload file
                      </Button>
                    </div>

                    {selectedFile && (
                      <Button
                        onClick={handleUpload}
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                      >
                        Upload {selectedFile.name}
                      </Button>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 mt-4">
                    Only PNG, JPG and JPEG files are supported
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full gap-1.5 ">
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              rows={5}
              placeholder="Details about your event."
              className="h-40 border border-light-strok bg-lighter-white text-gray-600 outline-0 focus:border-lighter-green shadow-none"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              className="bg-green text-white hover:bg-meduim-green hover:text-white cursor-pointer"
            >
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
