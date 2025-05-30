import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, LogOut, User } from "lucide-react";
import Link from "next/link";

export function ProfileDropdownComponent({ operator, onLogout }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {operator == "organizer" ? (
          <ChevronDown
            variant="outline"
            size={20}
            className=" text-light-green"
          />
        ) : (
          <img
            src="https://i.pinimg.com/736x/24/21/99/2421998d6c1e6bdc695a4243ba70f0ab.jpg"
            alt="avatar"
            className="w-[30px] h-[30px] rounded-full cursor-pointer"
          />
        )}
      </PopoverTrigger>
      <PopoverContent className="w-50 mr-10 p-0 mt-3 rounded-2xl px-2 py-2 bg-white border border-light-strok">
        <div className="flex justify-center items-start flex-col w-full rounded-xl">
          <Link
            href={operator == "organizer" ? "/organizer/profile" : "/profile"}
            className="flex justify-start items-center gap-x-2 hover:bg-light-gray w-full rounded-md px-2 py-1 "
          >
            <User className="text-lighter-green" />
            <h3 className="text-lighter-green text-lg">Profile</h3>
          </Link>
          <Link
            onClick={onLogout}
            href="/home"
            className="flex justify-start items-center gap-x-2 hover:bg-light-gray w-full rounded-md px-2 py-1 "
          >
            <LogOut className="text-lighter-green" />
            <h3 className="text-lighter-green text-lg">Logout</h3>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
