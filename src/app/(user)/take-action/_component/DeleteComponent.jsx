"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Ellipsis, OctagonX } from "lucide-react";
import { useRouter } from "next/navigation";

export const DeleteComponent = ({ cardId }) => {
  const router = useRouter();
  
  const handleDelete = async () => {
    const res = await deleteTakeAction(cardId);
    console.log("Heees",res);
    router.refresh();
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="border-0  cursor-pointer bg-light-gray rounded-full h-6 w-6 p-0 hover:bg-gray"
          >
            <Ellipsis size={20} />
          </Button>
      </PopoverTrigger>
      <PopoverContent className="  border-none shadow-none p-0 flex justify-center items-start flex-col mr-30 space-y-1.5 mt-1 w-36">
        <Button
          className="shadow-none  hover:bg-white border w-full bg-white text-strong-gray font-light cursor-pointer border-light-gray hover:border-red-400  hover:text-red  transition-all ease-in-out duration-100"
          onClick={handleDelete}
        >
          <OctagonX size={20} />
          Delete Event
        </Button>
      </PopoverContent>
    </Popover>
  );
};
