import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Star } from 'lucide-react';
import React from 'react'

const OwnFeedBackCardComponent = ({link , desc}) => {
    const isLoading = false;
    let isHasImage = true;
    let image = link;
    let paddingY;
    if(image === ""){
        paddingY = "py-[24px]";
        isHasImage = false;
    }
  return (
    <main>
      <Card className={`px-0 py-${paddingY} w-full rounded-[22px] flex flex-col items-center gap-y-[20px] border-1 border-[#E3E7EC]`}>
        <CardContent className="flex items-center justify-between w-full">
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
                  className="h-[50px] w-[50px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-y-0">
                  <p className="text-[20px] font-medium text-[#4A5057]">
                    KPSxZyXL
                  </p>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-[14px] font-400 text-[#959FAF]">4.0</p>
                    <Star fill="#FD9644" className="w-[10px] h-[10px] text-[#FD9644]" />
                    <Star fill="#FD9644" className="w-[10px] h-[10px] text-[#FD9644]" />
                    <Star fill="#FD9644" className="w-[10px] h-[10px] text-[#FD9644]" />
                    <Star fill="#FD9644" className="w-[10px] h-[10px] text-[#FD9644]" />
                    <Star className="w-[10px] h-[10px] text-[#FD9644]" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className="text-[12px] font-400 text-[#697D74]">Just now</p>
        </CardContent>
        <CardHeader className="w-full">
            <article className='flex gap-x-[15px] w-full items-start'>
              {isHasImage ? (
               <img src={link} alt=""
                className="w-[329px] h-[222px] object-cover rounded-[10px]" 
              />
              ):""
              }
              
              <CardDescription className='text-[16px] text-[#697D74]'>
                {desc}
              </CardDescription>
            </article>
        </CardHeader>
      </Card>
    </main>
  );
}

export default OwnFeedBackCardComponent