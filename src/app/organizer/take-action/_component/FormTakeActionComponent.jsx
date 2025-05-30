"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Toast } from "primereact/toast";
import { BadgeCheck, Download } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const FormTakeActionComponent = ({ open, onOpenChange }) => {
  const form = useForm({
    defaultValues: {
      description: "",
    },
  });

  const router = useRouter();
  const toastCenter = useRef(null);

  const showCustomCenterToast = (content) => {
    toastCenter.current.show({
      severity: "success",
      life: 3000,
      content,
    });
  };

  const handleDownloadClick = () => {
    showCustomCenterToast(
      <div className="w-auto">
        <article className="flex flex-col gap-y-4 w-125 rounded-2xl p-5 items-center justify-center bg-white shadow-lg">
          <BadgeCheck className="w-10 h-10 text-green" />
          <h4 className="text-[35px] font-semibold">Download Successfully!</h4>
          <p className="text-base text-muted-foreground">
            Your Take Action has been downloaded
          </p>
        </article>
      </div>
    );
    setTimeout(() => {
      router.push("/organizer/take-action");
    }, 1000);
  };

  const handleSubmitClick = () => {
    showCustomCenterToast(
      <div className="w-auto">
        <article className="flex flex-col gap-y-4 w-125 rounded-2xl p-5 items-center justify-center bg-white shadow-lg">
          <BadgeCheck className="w-10 h-10 text-green" />
          <h4 className="text-4xl font-semibold">Submit Successfully!</h4>
          <p className="text-base text-muted-foreground">
            Your Take Action has been created
          </p>
        </article>
      </div>
    );
    setTimeout(() => {
      router.push("/organizer/take-action");
    }, 1000);
  };

  const onSubmit = (data) => {
    handleSubmitClick(); // or include actual API logic here
  };

  return (
    <main className="p-5 rounded-2xl border border-light-gray relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-y-2.75 items-start">
                <FormLabel className="text-2xl">Sign the Pledge</FormLabel>
                <FormControl className="mt-2">
                  <Textarea
                    {...field}
                    id="description"
                    placeholder="Share your ideas here ..."
                    required
                    className="h-88.25 px-5 py-3.75 bg-light-gray border border-light-gray rounded-xl placeholder:text-lg placeholder:text-strong-gray focus-visible:ring-1 focus-visible:ring-meduim-green"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Toast ref={toastCenter} position="center" closable={false} />
          <div className="flex items-center justify-end gap-x-4">
            <Button
              type="submit"
              className="w-35 bg-green hover:bg-meduim-green text-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
};

export default FormTakeActionComponent;
