import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays, Play, Send} from 'lucide-react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

const TakeActionDetailCard = () => {
    const isLoading = false;
  return (
    <main>
      <Card className="relative py-[30px] w-full rounded-[20px] bg-[#F6F7F9] border-none">
        <CardContent className="flex flex-col items-start gap-y-[15px]">
          <div>
            {isLoading ? (
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.pinimg.com/736x/e3/cc/19/e3cc196b34603811d13323ee70c31c42.jpg"
                  alt="{user.name}"
                  className="h-[60px] w-[60px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-y-0">
                  <p className="text-[20px] font-medium text-[#4A5057]">
                    KPSxZyXL
                  </p>
                  <p className="text-[14px] font-400 text-[#959FAF]">
                    6h agos . Public
                  </p>
                </div>
              </div>
            )}
          </div>
          <CardTitle className={"text-[28px]"}>
            Reclaim Empty Spaces for Community Gardens{" "}
          </CardTitle>
          <article className="flex justify-between items-center">
            <div className="mt-1 text-xs md:text-sm lg:text-base bg-[#C5E5FB] w-fit rounded-full py-1 px-2 md:px-3">
              <p>@MekongRiver</p>
            </div>
          </article>

          <article className="space-y-1">
            <div className="flex items-center gap-x-[12px] px-2 text-[#636A74] text-[16px]">
              <CalendarDays className="w-[18px] h-[18px]" />
              <p>16 June, 2025</p>
            </div>
            <div className="flex items-center gap-x-[12px] px-2 text-[#636A74] text-[16px]">
              <Send className="w-[18px] h-[18px]" />
              <p>@government</p>
            </div>
          </article>
          <div className='absolute -top-7 right-16 rounded-[20px] border-[12px] border-white bg-white'>
            <img src="https://media.licdn.com/dms/image/v2/D5622AQHtEbMVtJpWXQ/feedshare-shrink_800/B56ZYfM_v6GUAo-/0/1744280223718?e=2147483647&v=beta&t=QINX5FJ3qryTBdPm8eqEFXoJx_bFa7PNslMhacdtuaU" 
            alt="" 
            className='w-[356px] h-[250px] rounded-[20px]'/>
          </div>
        </CardContent>
        <CardHeader>
        <CardDescription className='text-[18px] text-[#636A74]'>
          In our neighborhood in kompongcham province, there are far too many
          empty lots and underused spaces that sit untouched for years —
          becoming nothing more than dumping grounds for trash, overgrown weeds,
          and forgotten corners of the city. These spaces not only look
          unappealing but can also make residents feel unsafe and disconnected
          from their surroundings. But what if we could transform these
          neglected areas into something vibrant, meaningful, and beneficial for
          everyone? I'm proposing a community-driven initiative to turn these
          empty spaces into green community gardens and welcoming mini-parks
          where neighbors can gather, relax, grow fresh produce, and connect
          with nature. These small-scale green spaces have the power to do so
          much: improve air quality, reduce stress, encourage physical activity,
          support local biodiversity, and even help address food insecurity in
          our area. This isn't just about planting flowers or setting up benches
          — it's about building a stronger, healthier, and more connected
          community. Each garden or park could be co-designed and maintained by
          local volunteers, including students, families, seniors, and local
          businesses. We can even partner with schools and environmental groups
          to offer educational programs on sustainability, gardening, and urban
          ecology. But we can't do it alone. To bring this vision to life, we
          need to show local government and decision-makers that there is real
          community support behind this idea. That means your voice matters . If
          you believe in transforming wasted space into shared value, please
          support this initiative. The more of us who come together, the harder
          it will be for leaders to ignore the call for change.
        </CardDescription>
        </CardHeader>
        
        <CardFooter className={"flex flex-col items-start"}>
          <p className="text-[32px] font-700 text-[#048D4C]">16,000</p>
          <p className="text-[20px] font-600 text-black">SUPPORTERS</p>
        </CardFooter>
      </Card>
    </main>
  );
}

export default TakeActionDetailCard