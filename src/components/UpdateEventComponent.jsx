"use client";

import { useState } from "react";
import { X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Component() {
  const handleDrag = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file upload here
      console.log("File selected:", e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
          <CardTitle className="text-2xl font-semibold text-strong-gr">
            Event Update
          </CardTitle>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-700"
                >
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Title Event"
                  className="bg-gray-50 border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="volunteer"
                  className="text-sm font-medium text-gray-700"
                >
                  Volunteer
                </Label>
                <Input
                  id="volunteer"
                  placeholder="Total volunteer"
                  className="bg-gray-50 border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="text-sm font-medium text-gray-700"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Description"
                  className="bg-gray-50 border-gray-200 min-h-[200px] resize-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Poster
              </Label>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors border-gray-300 bg-gray-50 
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Upload className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                      Drop file here
                    </p>
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg"
                      onChange={handleFileInput}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="cursor-pointer"
                        asChild
                      >
                        <span>Upload file</span>
                      </Button>
                    </label>
                    <p className="text-xs text-gray-500">
                      Only PNG, JPG and JPEG files are supported
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
