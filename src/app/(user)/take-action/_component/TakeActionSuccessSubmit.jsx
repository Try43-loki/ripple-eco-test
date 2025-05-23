import { BadgeCheck } from 'lucide-react'
import React from 'react'

const TakeActionSuccessSubmit = ({title , desc}) => {
  return (
    <main>
        <article className='flex flex-col gap-y-[0x] w-[700px] rounded-[20px] p-[20px] items-center justify-center'>
            <BadgeCheck className='w-[170px] h-[170px] text-[#50C878]'/>
            <h4 className='text-[40px]'>{title}</h4>
            <p className='text-[24px] text-[#666666]'>{desc}</p>
        </article>
    </main>
  )
}

export default TakeActionSuccessSubmit