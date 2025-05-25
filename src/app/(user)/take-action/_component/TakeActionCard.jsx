
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Play } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const TakeActionCard = ({image, title, description, support}) => {
  return (
    <main>
      <Card className="p-0 pb-4 w-[300px] rounded-[20px]">
        <CardContent className="px-[7px] py-[5px] h-[155px] relative">
          <Image
            src={image}
            alt="sub-banner"
            width={298}
            height={155}
            className="rounded-t-[12px] h-[155px]"
          />
          <div className='absolute top-4 px-1.5 right-4.5 w-[47px] text-[12px] rounded-[10px] bg-white text-center'>
            Action
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className={'text-[18px]'}>{title}</CardTitle>
          <CardDescription className={'line-clamp-3 text-[14px]'}>
            {description}
          </CardDescription>
          <article className="flex gap-x-2 items-center text-[#048D4C] text-[16px]">
            <h1>ACTNOW</h1>
            <Play className="w-[14px] h-[14px] fill-[#048D4C]" />
          </article>
        </CardHeader>
        <CardFooter className={'flex flex-col items-start'}>
          <p className='text-[18px] font-700 text-[#048D4C]'>{support}</p>
          <p className='text-[10px] font-600 text-black'>SUPPORTERS</p>
        </CardFooter>
      </Card>
    </main>
  );
}

export default TakeActionCard