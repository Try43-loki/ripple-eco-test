import { Mail, MapPin, Phone, SquarePen } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const OrganizerProfileComponent = () => {
  return (
    <>
      <section className="rounded-2xl px-5 py-6 w-200 border-light-gray border-1 drop-shadow-lg">
        <div className="flex items-start justify-between">
            <Image
                src="/assets/profileVonlunteer.jpg"
                alt="Picture of the author"
                width={120}
                height={120}
                className="rounded-full"
            />
            <SquarePen className="w-6 h-6"/>
        </div>
        <article>
            <h2 className="text-xl">United Nations Environment Program (UNEP)</h2>
            <p className='text-strong-gray text-sm'>We Interesting to apply our support to the earth.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout </p>
        </article>
        <hr className="h-0.5 text-light-gray m-2" />
        <div>
        <div className="flex items-center text-sub-info text-strong-gray gap-x-1.5">
              <Phone className="w-4.5 h-4.5" />
              <p>012-333-334</p>
            </div>
            <div className="flex items-center text-sub-info text-strong-gray gap-x-1.5">
              <MapPin className="w-4.5 h-4.5" />
              <p>Phnom Penh</p>
            </div>
            <div className="flex items-center text-sub-info text-strong-gray gap-x-1.5">
              <Mail className="w-4.5 h-4.5" />
              <p>UNEP@gmail.com</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default OrganizerProfileComponent