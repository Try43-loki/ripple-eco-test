import HeroSectionComponent from '@/components/HeroSectionComponent'
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import TakeActionDetailCard from '../_component/TakeActionDetailCard'
import TakeActionForm from '../_component/TakeActionForm'
const TakeActionDetailPage = () => {
  return (
    <main>
        <HeroSectionComponent text={"TAKE ACTION"} description={"Share ideas, explore solutions, and connect with others driving environmental change."} showSearchBar={false} />

        <div className="w-full my-6 px-6 md:px-20 lg:px-[150px]">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center text-sm md:text-base lg:text-lg font-semibold">
            <BreadcrumbItem>
              <BreadcrumbLink href="/take-action">
                Take Action
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator
              className={"[&>svg]:size-5 md:[&>svg]:size-6 lg:[&>svg]:size-7"}
            ></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-primary">
                Green Oasis going Miyawaki
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className='w-full my-6 px-6 md:px-20 lg:px-[150px]'>
        <TakeActionDetailCard/>
      </section>
      <section className='w-full my-6 px-6 md:px-20 lg:px-[150px] mt-[48px] mb-24'>
        <TakeActionForm />
      </section>
      
    </main>
  )
}

export default TakeActionDetailPage