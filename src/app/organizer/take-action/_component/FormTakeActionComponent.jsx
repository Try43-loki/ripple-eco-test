"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Toast } from "primereact/toast";
import { BadgeCheck } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitTakeActionAnswer } from "@/action/Take-actionAction";

// 🧾 Zod schema for form validation
const formSchema = z.object({
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description must be under 1000 characters"),
});

const FormTakeActionComponent = ({takeActionId}) => {
  const router = useRouter();
  const toastCenter = useRef(null);

  // ⚙️ Initialize the form with react-hook-form and zod validation
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  // ✅ Display a centered success toast
  const showCustomCenterToast = (content) => {
    toastCenter.current?.show({
      severity: "success",
      life: 3000,
      content,
    });
  };

  // 📦 Handle successful form submission
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

    // ⏱️ Redirect after a short delay
    setTimeout(() => {
      router.push("/organizer/take-action");
    }, 1500);
  };

  // 🚀 Handle form submission
    const onSubmit = async (data) => {
      const isSubmit = await submitTakeActionAnswer(data, takeActionId)
      if(isSubmit?.code === 201){
        form.reset();
        handleSubmitClick()
      }
    };
 

  return (
    <main className="p-5 rounded-2xl border border-light-gray relative">
      {/* 🔁 Zod-enhanced form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* 📝 Description Textarea */}
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

          {/* 🔔 Center Toast Message */}
          <Toast ref={toastCenter} position="center" closable={false} />

          {/* 📤 Submit Button */}
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
