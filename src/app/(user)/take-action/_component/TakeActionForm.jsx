'use client'

import React from 'react'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { BadgeCheck } from 'lucide-react'
import { Toast } from 'primereact/toast'
import { useRef } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Download } from 'lucide-react'

const TakeActionForm = () => {
  const form = useForm({
    defaultValues: {
      description: "",
    },
  })
  const router = useRouter()
  const toastCenter = useRef(null)

  const showCustomCenterToast = (content) => {
    toastCenter.current.show({
      severity: 'success',
      life: 3000,
      content
    });
  }

  const handleDownloadClick = () => {
    showCustomCenterToast(
      <div className='w-auto'>
        <article className='flex flex-col gap-y-4 w-[500px] rounded-[20px] p-[20px] items-center justify-center bg-white shadow-lg'>
            <BadgeCheck className='w-[170px] h-[170px] text-[#50C878]' />
            <h4 className='text-[35px] font-semibold'>Download Successfully!</h4>
            <p className='text-[24px] text-[#666666]'>Your Take Action has been downloaded</p>
        </article>
      </div>
      
    )
    setTimeout(() => {
        router.push('/take-action');
    }, 1000);
  }

  const handleSubmitClick = () => {
    showCustomCenterToast(
      <div className='w-auto'>
        <article className='flex flex-col gap-y-4 w-[500px] rounded-[20px] p-[20px] items-center justify-center bg-white shadow-lg'>
            <BadgeCheck className='w-[170px] h-[170px] text-[#50C878]' />
            <h4 className='text-[35px] font-semibold'>Submit Successfully!</h4>
            <p className='text-[24px] text-[#666666]'>Your Take Action has been created</p>
        </article>
      </div>
      
    )
    setTimeout(() => {
        router.push('/take-action')  // ✅ Navigate to target page
    }, 1000)
  }

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
          <Toast ref={toastCenter} position="center" closable={false}/>
          <div className='flex items-center justify-between'>
            

            <Button
              type="button"
              onClick={handleDownloadClick}
              className='w-auto flex gap-x-[11px] bg-[#F2F3F6] hover:bg-[#F2F3F6] text-[#384C63] border border-[#F2F3F6] text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5'
            >
              <Download className='w-[24px] h-[24px]' />
              <p>Download PDF</p>
            </Button>

            <Button
              type="submit"
              onClick={handleSubmitClick}
              className='w-[120px] bg-primary hover:bg-[#1da761] text-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5'
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </main>
  )
}

export default TakeActionForm
