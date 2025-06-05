import { dologout } from "@/action/loginSocialAction";
import { getUserProfileAction } from "@/action/user-action";
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

export function ProfileDropdownComponent({ operator, profile }) {
  const img = profile?.data?.profileImage;
  const first = profile?.data?.firstName.charAt(0);
  const last = profile?.data?.lastName.charAt(0);
  const name = first + last;

  return (
    <Popover>
      <PopoverTrigger asChild>
        {img ? (
          <img
            src={img}
            alt="avatar"
            className="w-[30px] h-[30px] rounded-full cursor-pointer"
          />
        ) : (
          <div className="w-9 h-9 bg-green rounded-full p-1 border border-light-gray flex justify-center items-center text-white font-semibold">
            <p>{name}</p>
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-50 mr-10 p-0 mt-3 rounded-2xl px-2 py-2 bg-white border border-light-strok">
        <div className="flex justify-center items-start flex-col w-full rounded-xl">
          <Link
            href={"/profile"}
            className="flex justify-start items-center gap-x-2 hover:bg-light-gray w-full rounded-md px-2 py-1 "
          >
            <User className="text-lighter-green" />
            <h3 className="text-lighter-green text-lg">Profile</h3>
          </Link>
          <Button
            onClick={dologout}
            className="flex justify-start items-center gap-x-2 hover:bg-light-gray w-full rounded-md px-2 py-1 "
          >
            <LogOut className="text-lighter-green" />
            <h3 className="text-lighter-green text-lg">Logout</h3>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
