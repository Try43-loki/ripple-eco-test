import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Play } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TakeActionCard = ({ image, title, description, support }) => {
  return (
    <main>
      <Card className="p-0 pb-4 w-72 rounded-2xl">
        <CardContent className="px-2 py-1.5 h-40 relative">
          <Image
            src={image}
            alt="sub-banner"
            width={298}
            height={155}
            className="rounded-t-xl h-40 object-cover"
          />
          <div className="absolute top-4 right-4 px-1.5 w-12 text-xs rounded-lg bg-white text-center">
            Action
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="line-clamp-3 text-sm">
            {description}
          </CardDescription>
          <article className="flex items-center gap-2 text-green text-base">
            <h1>ACTNOW</h1>
            <Play className="w-3.5 h-3.5 fill-meduim-green" />
          </article>
        </CardHeader>

        <CardFooter className="flex flex-col items-start">
          <p className="text-lg font-bold text-green">{support}</p>
          <p className="text-[10px] font-semibold text-black">SUPPORTERS</p>
        </CardFooter>
      </Card>
    </main>
  )
}

export default TakeActionCard
