'use client'

import React from 'react'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Download } from 'lucide-react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import TakeActionSuccessSubmit from './TakeActionSuccessSubmit'

const TakeActionForm = () => {
  const form = useForm({
    defaultValues: {
      description: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
  }

  return (
    <main className='p-[20px] rounded-[20px] border-1 border-[#E3E7EC] relative'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-y-[11px] items-start">
                <FormLabel className="text-[26px]">Sign the Pledge</FormLabel>
                <FormControl className='mt-2'>
                  <Textarea
                    {...field}
                    id="description"
                    placeholder="Share your ideas here ..."
                    required
                    className="h-[353px] px-[20px] py-[15px] bg-[#F2F2F2] rounded-[10px] placeholder:text-[18px] placeholder:text-[#848E9B] focus-visible:ring-[1px] focus-visible:ring-[#1da761]"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className='flex items-center justify-between'>
            <Popover>
                <PopoverTrigger asChild>
                    <Button type="submit" className='w-auto flex gap-x-[11px] bg-#F2F3F6 hover:bg-[#F2F3F6] text-[#384C63] border-1 border-[#F2F3F6] text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5'>
                        <Download className='w-[24px] h-[24px]'/>
                        <p>Download PDF</p>
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                className="w-[700px]"
                >
                <div className="grid gap-4">
                    <TakeActionSuccessSubmit 
                    title={"Download Successfully!"}
                    desc={"Your Take Action has been downloaded"}
                    />
                </div>
                </PopoverContent>
            </Popover>
            
            <Popover>
                <PopoverTrigger asChild>
                  <Button type="submit" className='w-[120px] bg-primary hover:bg-[#1da761] text-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5'>
                    Submit
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                className="w-[700px]"
                >
                <div className="grid gap-4">
                    <TakeActionSuccessSubmit 
                    title={"Submit Successfully!"}
                    desc={"Your Take Action has been created "}
                    />
                </div>
                </PopoverContent>
            </Popover>
          </div>
        </form>
      </Form>
    </main>
  )
}

export default TakeActionForm
