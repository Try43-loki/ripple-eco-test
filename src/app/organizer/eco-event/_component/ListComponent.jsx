import CancelEventComponent from "@/components/CancelEventComponent";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UpdateEventComponent from "@/components/UpdateEventComponent";
// import { UpdateEventComponent } from "@/components/UpdateEventComponent";
import { Edit, Ellipsis, OctagonX, Settings } from "lucide-react";

export function ListComponent({ eventId }) {
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
        <UpdateEventComponent eventId={eventId} />
        <CancelEventComponent eventId={eventId} />
      </PopoverContent>
    </Popover>
  );
}
