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
import Link from "next/link";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";

export function RequestFormComponent({ contribute }) {
  return (
    <Dialog classNam="w-full">
      <DialogTrigger asChild>
        <div className="py-2 cursor-pointer px-8 md:px-11 lg:px-10 bg-light-gray rounded-md w-full flex justify-center items-center gap-2">
          <Image
            src="/assets/tick-circle.png"
            alt="tick-circle"
            width={20}
            height={10}
            className="h-5"
          ></Image>

          <p className="text-sm text-dark-green font-bold cursor-pointer">
            {contribute == "Donation" ? "Donation" : "Going"}
          </p>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-white border-none">
        <DialogHeader>
          <DialogTitle className="text-dark-green font-medium text-lg mb-4.5">
            Request Form
          </DialogTitle>

          <DialogDescription className="text-dark-green text-sm font-normal">
            <span className="w-2 h-2 bg-green rounded-full inline-block mr-2" />
            What are the main reasons someone should consider joining this
            event?
          </DialogDescription>
          <hr className="text-meduim-gray my-2" />
          <DialogDescription>
            <label className="block text-dark-green text-sm font-normal mb-2">
              <span className="w-2 h-2 bg-green rounded-full inline-block mr-2" />
              Your perspective
            </label>
            <textarea
              className="w-full min-h-[150px] bg-light-gray rounded-2xl p-3 text-sm resize-none focus:outline-none focus:ring-0 focus:border-none"
              placeholder="Type your answer here..."
            ></textarea>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          {/* <Link href="#"> */}
          {/* <button
            type="button"
            className="text-white bg-green px-8 py-2 rounded-xl cursor-pointer"
          >
            Send
          </button> */}
          {/* </Link> */}
          <DialogClose asChild>
            <Button
              type="button"
              // variant="secondary"
              className="text-white bg-green hover:bg-meduim-green px-8 py-2 rounded-xl cursor-pointer"
            >
              Send
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
