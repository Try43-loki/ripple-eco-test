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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyOrganizerSchema } from "@/lib/zod/VerifyOrganizerSchema";
import { verifyOrganizerAction } from "@/action/user-action";
import { useRouter } from "next/navigation";

const VerifyOrganizerComponent = () => {
  const [open, setOpen] = useState(false);

  const rounter = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(verifyOrganizerSchema),
  });

  const handleVerify = async (formData) => {
    const data = await verifyOrganizerAction(formData);
    if (data?.success) {
      console.log(data?.message);
    }
    reset();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-green cursor-pointer border-none hover:text-white text-white rounded-xl px-6 py-3 hover:bg-green/80"
        >
          Verify!
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-white border border-lightes-white max-w-md rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-green text-xl font-bold">
            Verify Organizer
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-5" onSubmit={handleSubmit(handleVerify)}>
          {/* National ID */}
          <div>
            <label className="block font-semibold text-sm mb-1 text-dark-green">
              National ID Number
            </label>
            <Input
              placeholder="National ID Number"
              className="bg-light-gray border-none placeholder:text-lighter-green"
              id="nationalID"
              {...register("nationalID")}
            />
            <p className="text-sm text-red-400 mt-1">
              {errors.nationalID?.message}
            </p>
          </div>

          {/* Khmer and English Names */}
          <div>
            <label className="block font-semibold text-sm mb-1 text-dark-green">
              Name
            </label>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative w-full">
                <Input
                  placeholder="ថោង ស្រីភា"
                  className="bg-light-gray border-none pr-10 placeholder:text-lighter-green"
                  id="khmerName"
                  {...register("khmerName")}
                />
                <p className="text-sm text-red-400 mt-1">
                  {errors.khmerName?.message}
                </p>
                <User className="absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
              </div>
              <div className="relative w-full">
                <Input
                  placeholder="Thaong Sreyphea"
                  className="bg-light-gray border-none pr-10 placeholder:text-lighter-green"
                  id="engName"
                  {...register("engName")}
                />
                <p className="text-sm text-red-400 mt-1">
                  {errors.engName?.message}
                </p>
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
              <div>
                <Input
                  placeholder="Day"
                  className="bg-light-gray border-none placeholder:text-lighter-green"
                  id="dayOfBirth"
                  {...register("dayOfBirth")}
                />
                <p className="text-sm text-red-400 mt-1">
                  {errors.dayOfBirth?.message}
                </p>
              </div>
              <div>
                <Input
                  placeholder="Month"
                  className="bg-light-gray border-none placeholder:text-lighter-green"
                  id="monthOfBirth"
                  {...register("monthOfBirth")}
                />
                <p className="text-sm text-red-400 mt-1">
                  {errors.monthOfBirth?.message}
                </p>
              </div>
              <div>
                <Input
                  placeholder="Year"
                  className="bg-light-gray border-none placeholder:text-lighter-green"
                  id="yearOfBirth"
                  {...register("yearOfBirth")}
                />
                <p className="text-sm text-red-400 mt-1">
                  {errors.yearOfBirth?.message}
                </p>
              </div>
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
