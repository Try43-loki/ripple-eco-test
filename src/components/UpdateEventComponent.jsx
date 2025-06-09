"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Ellipsis, FolderOpen, Settings, Upload, X } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { multipleFileUploadAction } from "@/action/FileUploadAction";
import { updateEventService } from "@/service/createEventService";
import { updateEventAction } from "@/action/createEventAction";

// Zod validation schema
const eventSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  volunteer: z
    .string()
    .min(1, "Volunteer count is required")
    .regex(/^\d+$/, "Must be a valid number"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),
  images: z
    .array(z.instanceof(File))
    .min(1, "At least one image is required")
    .max(5, "Maximum 5 images allowed"),
});

export default function UpdateEventComponent() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      volunteer: "",
      description: "",
      images: [],
    },
  });

  const watchedImages = watch("images");

  const createImagePreview = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve({ file, url: e.target.result });
      reader.readAsDataURL(file);
    });
  };

  const updateImagePreviews = async (files) => {
    const previews = await Promise.all(files.map(createImagePreview));
    setImagePreviews(previews);
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    async (e) => {
      e.preventDefault();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files);
      const imageFiles = files.filter(
        (file) =>
          file.type === "image/png" ||
          file.type === "image/jpeg" ||
          file.type === "image/jpg"
      );

      if (imageFiles.length > 0) {
        const newFiles = [...selectedFiles, ...imageFiles].slice(0, 5); // Limit to 5 files
        setSelectedFiles(newFiles);
        setValue("images", newFiles);
        await updateImagePreviews(newFiles);
      }
    },
    [selectedFiles, setValue]
  );

  const handleFileSelect = useCallback(
    async (e) => {
      const files = Array.from(e.target.files || []);
      const imageFiles = files.filter(
        (file) =>
          file.type === "image/png" ||
          file.type === "image/jpeg" ||
          file.type === "image/jpg"
      );

      if (imageFiles.length > 0) {
        const newFiles = [...selectedFiles, ...imageFiles].slice(0, 5); // Limit to 5 files
        setSelectedFiles(newFiles);
        setValue("images", newFiles);
        await updateImagePreviews(newFiles);
      }
    },
    [selectedFiles, setValue]
  );

  const removeImage = async (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    setValue("images", newFiles);
    await updateImagePreviews(newFiles);
  };

  const onSubmit = async (data) => {
    reset();
    setSelectedFiles([]);
    setImagePreviews([]);
    const imgURLs = await multipleFileUploadAction(data?.images);
    data.images = imgURLs;
    const res = await updateEventAction(data);
    setIsDialogOpen(false);
  };

  const handleReset = () => {
    reset();
    setSelectedFiles([]);
    setImagePreviews([]);
  };

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
      className="w-auto"
    >
      <DialogTrigger asChild>
        <Button className="shadow-none bg-white hover:bg-white border w-full text-strong-gray font-light cursor-pointer border-light-gray hover:border-light-strok hover:text-dark-green transition-all ease-in-out duration-100">
          <Settings size={20} />
          Update Event
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white border border-light-strok !w-auto max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-strong-green">Event Update</DialogTitle>
          <DialogDescription>{""}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="flex justify-center items-start gap-x-8">
              <div className="w-50 space-y-2.5">
                <div className="grid w-full max-w-sm gap-1.5">
                  <Label htmlFor="title">Title</Label>
                  <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Tree planting"
                        className="bg-lighter-white text-gray-600 border-none h-10"
                      />
                    )}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm">
                      {errors.title.message}
                    </p>
                  )}
                </div>
                <div className="grid w-full max-w-sm gap-1.5">
                  <Label htmlFor="volunteer">Volunteer</Label>
                  <Controller
                    name="volunteer"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="1000"
                        className="bg-lighter-white text-gray-600 border-none h-10"
                      />
                    )}
                  />
                  {errors.volunteer && (
                    <p className="text-red-500 text-sm">
                      {errors.volunteer.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mx-auto w-50">
                <Label htmlFor="images">Poster (Max 5 images)</Label>
                <div
                  className={`relative border-2 border-dashed transition-colors mt-2 py-4 px-4 ${
                    isDragOver
                      ? "border-green-400 bg-green-50"
                      : "border-gray-300 bg-white"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <FolderOpen className="w-4 h-4 text-green-600" />
                      </div>
                    </div>

                    <p className="text-gray-600 mb-2 text-sm">
                      Drop files here
                    </p>

                    <div className="space-y-2">
                      <div className="relative">
                        <input
                          type="file"
                          accept=".png,.jpg,.jpeg"
                          multiple
                          onChange={handleFileSelect}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Button
                          type="button"
                          variant="default"
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Upload files
                        </Button>
                      </div>

                      {selectedFiles.length > 0 && (
                        <p className="text-sm text-green-600">
                          {selectedFiles.length} file(s) selected
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 mt-4">
                      Only PNG, JPG and JPEG files are supported (Max 5 files)
                    </p>
                  </div>
                </div>
                {errors.images && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.images.message}
                  </p>
                )}
              </div>
            </div>
            {/* Image Previews Row */}
            {imagePreviews.length > 0 && (
              <div className="w-full">
                <Label className="text-sm font-medium">Image Previews</Label>
                <div className="flex gap-3 mt-2 overflow-x-auto pb-2 py-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative flex-shrink-0">
                      <img
                        src={preview.url}
                        alt={`Preview ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                      >
                        <X size={12} />
                      </button>
                      <p className="text-xs text-gray-500 mt-1 text-center truncate max-w-20">
                        {preview.file.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="grid w-full gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    rows={5}
                    placeholder="Details about your event."
                    className="h-40 border border-light-strok bg-lighter-white text-gray-600 outline-0 focus:border-lighter-green shadow-none"
                  />
                )}
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="hover:bg-gray-50 border-light-strok hover:border-gray-400 transition-all ease-in cursor-pointer"
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="bg-green text-white border-light-strok hover:bg-meduim-green hover:text-white cursor-pointer"
            >
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
