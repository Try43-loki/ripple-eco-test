"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { BadgeCheck } from "lucide-react";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { submitTakeActionAnswer } from "@/action/Take-actionAction";


const TakeActionFormComponent = ({takeActionId}) => {
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

  

  const handleSubmitClick = () => {
    showCustomCenterToast(
      <div className="w-auto">
        <article className="flex flex-col gap-y-4 w-125 rounded-2xl p-5 items-center justify-center bg-white shadow-lg">
          <BadgeCheck className="w-42.5 h-42.5 text-green" />
          <h4 className="text-4xl font-semibold">Submit Successfully!</h4>
          <p className="text-base text-muted-foreground">
            Your Take Action has been created
          </p>
        </article>
      </div>
    );
    setTimeout(() => {
      router.push("/take-action");
    }, 1500);
  };

  const onSubmit = async (data) => {
    const isSubmit = await submitTakeActionAnswer(data, takeActionId)
    if(isSubmit?.code === 201){
      form.reset();
      handleSubmitClick()
    }
  };

  return (
    <main className="p-5 rounded-2xl border-1 border-light-white relative ">
      {/* form data */}
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
                    className="h-88.25 border-none px-5 py-3.75 bg-light-gray rounded-xl placeholder:text-lg placeholder:text-strong-gray focus-visible:ring-1 focus-visible:ring-meduim-green"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Toast ref={toastCenter} position="center" closable={false} />
          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-30 bg-green hover:bg-strong-green text-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
};

export default TakeActionFormComponent;
