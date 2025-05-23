import React from 'react'
import { DollarSign,Mail } from 'lucide-react';
const CardEcoEventComponent = () => {
  return (
            <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 [&::-webkit-scrollbar]:hidden scrollbar-none">
          <div className="flex gap-8 pt-6 w-max">
                <div
                  className="w-[310px] h-full pb-6 bg-white rounded-2xl snap-start shrink-0"
                >
                  <img
                    src="eventImage.png"
                    alt="Event Image"
                    className="rounded-t-2xl "
                    width={310}
                    height={110}
                  />
                  <div className="px-5">
                  <p className="text-ongoing text-sm pt-2">. Ongoing</p>
                  <p className="text-status-volunteer text-md">Mon, 12 May at 8 AM</p>
                  <h3 className="text-title text-2xl/7 font-bold">Green Oasis going <span className="block">Miyawaki</span> </h3>
                  <p className="text-cancel text-sm pt-1">Phnom Penh, Cambodia</p>
                  <p className="text-description text-sm pt-1">100 going</p>

                  <div className="pt-4 flex gap-2">
                    <button className='py-2 px-10 bg-light-gray rounded-md flex gap-2'>
                      <img src="tick-circle.png" alt="tick-circle" className='fill-current h-5 pt-1'/>
                      <p className='text-md text-title font-bold'>Going</p>
                    </button>

                    <button className='py-2 px-4 bg-light-gray rounded-md'>
                      <DollarSign />
                    </button>

                    <button className='py-2 px-4 bg-light-gray rounded-md'>
                      <Mail />
                    </button>
                  </div>
                </div>
              </div>
          </div>
        </div>
  )
}

export default CardEcoEventComponent;