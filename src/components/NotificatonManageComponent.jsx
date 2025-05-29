import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookOpenCheck, Ellipsis, LibraryBig, NotebookPen } from "lucide-react";

export function NotificationManageComponent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-0 p-0 m-0 shadow-none">
        <Button className="cursor-pointer" variant="fill">
          <Ellipsis size={25} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white border border-light-strok p-2 space-y-1">
        <p className="text-sm text-light-green hover:text-strong-green cursor-pointer flex justify-start gap-x-2 items-center">
          <NotebookPen size={15} className="inline-block " />
          Read
        </p>
        <p className="text-sm text-light-green hover:text-strong-green cursor-pointer flex justify-start gap-x-2 items-center">
          <LibraryBig size={15} className="inline-block " />
          Achived
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
