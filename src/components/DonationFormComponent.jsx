import React from "react";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DonationFormComponent = ({ operator }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {operator == "detail" ? (
            <button className="text-white bg-green px-3 py-1 rounded-xl cursor-pointer">
              Donate
            </button>
          ) : (
            <DollarSign size={18} />
          )}
        </DialogTrigger>

        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-dark-green font-medium text-lg mb-4.5">
              Donation Form
            </DialogTitle>

            <DialogDescription className="text-dark-green text-sm font-normal">
              <span className="w-2 h-2 bg-green rounded-full inline-block mr-2" />
              Thank you
            </DialogDescription>
            <hr className="text-meduim-gray my-2" />

            <DialogDescription className="flex flex-col gap-7 items-center justify-center my-10">
              <Image
                src="/assets/donation_form/qr.jpg"
                alt="qr"
                width={250}
                height={200}
              ></Image>
              <Image
                src="/assets/donation_form/WeBill365.jpg"
                alt="Webill365"
                width={200}
                height={15}
              ></Image>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DonationFormComponent;
