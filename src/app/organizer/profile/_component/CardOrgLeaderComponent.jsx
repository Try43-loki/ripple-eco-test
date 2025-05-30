import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CardOrgLeaderComponent = () => {
  return (
    <>
      <Link href="/">
        <Card className="bg-white border-none flex flex-row items-center px-1.25 py-3 justify-between w-full">
            <CardHeader className="flex flex-row items-center w-67 gap-x-2.5 p-2">
                <p className="px-2 bg-light-gray rounded-full">4</p>
                <div className="w-12 h-10">
                    <img src="/assets/profileVolunteer.png" alt="" 
                    className="w-full h-full rounded-full"
                    />
                </div>
                
                <div className="flex flex-col gap-y-2">
                    <h2 className="text-strong-gray text-sm">United Nations Environment 
                    Program (UNEP)</h2>
                    <div className="flex items-center gap-1.5">
                        <Star  className="w-3 h-3 fill-orange text-orange"/>
                        <Star  className="w-3 h-3 fill-orange text-orange"/>
                        <Star  className="w-3 h-3 fill-light-gray text-light-gray"/>
                        <Star  className="w-3 h-3 fill-light-gray text-light-gray"/>
                        <Star  className="w-3 h-3 fill-light-gray text-light-gray"/>
                        <p className="text-sm">4.9</p>
                    </div>
                    
                </div>
            </CardHeader>
            <CardFooter className="flex flex-col itmes-center gap-y-0.5">
                <div className="px-3 py-1.5 rounded-2xl bg-lighter-blue text-sm text-blue">Recycling</div>
                <p className="text-sm text-meduim-gray">84 events</p>
            </CardFooter>
        </Card>
      </Link>
    </>
  )
}

export default CardOrgLeaderComponent