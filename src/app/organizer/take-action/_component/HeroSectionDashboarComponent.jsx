import DiscussionButtonComponent from '@/components/DiscussionButtonComponent';
import StatusButtonComponent from '@/components/StatusButtonComponent'
import Image from 'next/image'
import React from 'react'

const HeroSectionDashboarComponent = () => {
  return (
    <>
      <section className='rounded-2xl relative flex items-center justify-start bg-linear-to-r bg-light-brown p-5 h-42.5 mt-8'>

       <div className='flex flex-col gap-y-2 items-start'>
            <h3 className='text-xl'>Take Action Now</h3>
            <p className='text-sm text-strong-gray'>Speak up for nature by contacting your elected officials or pledging to take action. Make a difference for conservation—we can't do it without you!</p>
            <div className='w-30 mt-2'>
                <DiscussionButtonComponent text={"Start Action"}/>
            </div>
            
        </div>
        <Image
            src="/badges/hero-section-dashboard.png"
            alt="hero section dashboard"
            width={338}
            height={160}
            objectFit="cover"
            className="absolute rounded-2xl right-0 bottom-0"
        />

      </section>
    </>
  );
}

export default HeroSectionDashboarComponent