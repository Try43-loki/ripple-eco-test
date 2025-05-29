import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { CircleCheck, Dot, Forward } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardEcoEvnentOrgProfile = () => {
  return (
    <>
      <Link href="" className="w-full" >
        <Card className="flex flex-row items-center gap-x-5 w-full">
          <CardHeader className="relative w-62.5 h-full">
            <Image
              src="/assets/eventImage.png"
              alt="Green Oasis going Miyawaki event"
              width={250}
              height={270}
              className="rounded-2xl w-full h-full object-cover"
            />
            <div className="absolute px-4 p-1.5 bg-white text-black text-xs top-1 left-1 rounded-xl">
              <p>Semina | Tree Planting</p>
            </div>
          </CardHeader>
          <CardContent className="w-70">
            <p className="text=sm">Mon, 12 May</p>
            <h2 className="text-2xl">Green Oasis Going Miyakawi</h2>
            <p className="text-sm font-bold text-meduim-gray">
              Phnom Penh, Cambodia
            </p>
            <p className="line-clamp-3 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <div className="px-2.5 py-1.5 bg-light-gray text-strong-gray rounded-lg text-xs">
              <Dot className="w-1.5 h-1.5" />
              Cancel
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-strong-gray">100</p>
            <div>
              <div className="p-2.5 bg-light-gray text-strong-gray text-xs rounded-lg">
                <CircleCheck className="w-4.75 h-4.75" />
                Going
              </div>
              <div className="p-2.5 bg-light-gray text-strong-gray text-xs rounded-lg">
              <Forward className="w-4.75 h-4.75" />
              </div>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
}

export default CardEcoEvnentOrgProfile