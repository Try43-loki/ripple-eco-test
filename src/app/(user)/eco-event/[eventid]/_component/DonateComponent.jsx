import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import DonationFormComponent from "@/components/DonationFormComponent";

export default function DonationComponent({ operator }) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-4 md:p-5 lg:p-7 mt-8 md:mt-12 lg:mt-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 lg:gap-8">
        {/* Left section with icon and text */}
        <div className="flex items-center gap-3 md:gap-4 lg:gap-6 flex-1">
          {/* Icon */}
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-verylight-green rounded-full flex items-center justify-center">
            <Gift className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green" />
          </div>

          {/* Title and subtitle */}
          <div className="flex-shrink-0">
            <h3 className="text-sm md:text-base lg:text-lg font-semibold text-dark-green">
              Donation
              {/* <DonationFormComponent />  */}
            </h3>
            <p className="text-xs md:text-sm lg:text-base text-lighter-green">
              Support financially
            </p>
          </div>

          {/* Description text - positioned to the right */}
          <div className="hidden md:block flex-1 ml-4 lg:ml-8">
            <p className="text-xs md:text-sm lg:text-base text-lighter-green">
              Contribute funds for sapling, tools, and resources
            </p>
          </div>
        </div>

        {/* Mobile description text */}
        <div className="md:hidden">
          <p className="text-xs text-lighter-green">
            Contribute funds for sapling, tools, and resources
          </p>
        </div>

        {/* Right section with button */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <DonationFormComponent operator={"detail"} />
        </div>
      </div>
    </div>
  );
}
