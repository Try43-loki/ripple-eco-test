import Link from 'next/link'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Bell, ClipboardList, MessageCircleQuestion, SunDim, Wind } from 'lucide-react'
import { Popover, PopoverTrigger } from '@radix-ui/react-popover'
const UserNavbarComponent = () => {
  return (
    <>
      <nav className='flex flex-row items-center justify-between px-[35px] py-[22px] w-full bg-[#E3DFDF1A] rounded-[30px] border-1 border-solid border-[#FFFFFF] text-white text-[18px] '>
        <div>
            <Link href=''>
                <h2>ripple<span className='text-[#048d4c]'>Eco</span></h2>
            </Link>
        </div>
        <div className='flex flex-row items-center lg:gap-x-5 lg:justify-center xl:gap-x-12'>
            <Link href=''>
                Home
            </Link>
            <Link href=''>
                Eco Event
            </Link>
            <NavigationMenu >
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger className={'bg-[#e3dfdf00]'}>Community</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="w-[160px] px-2 py-2 space-y-2 text-[#697D74]">
                            <NavigationMenuLink href='' className="w-full flex flex-row items-center gap-x-4"><ClipboardList />Take Action</NavigationMenuLink>
                            <NavigationMenuLink href='' className="w-full flex flex-row items-center gap-x-4"><MessageCircleQuestion />Discussion</NavigationMenuLink>
                        </div>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger className={'bg-[#e3dfdf00]'}>Environment Monitor</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="w-[180px] px-2 py-2 space-y-2 text-[#697D74]">
                            <NavigationMenuLink href='' className="w-full flex flex-row items-center gap-x-4"><SunDim />Air Quality</NavigationMenuLink>
                            <NavigationMenuLink href='' className="w-full flex flex-row items-center gap-x-4"><Wind />Natural Disastor</NavigationMenuLink>
                        </div>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Link href=''>
                Leaderbord
            </Link>
        </div>
        <div className='flex gap-x-[10px] items-center'>
            <Bell className='text-[#048d4c]'/>
            <div >
            <Popover>
                <PopoverTrigger>
                    <div>
                        <img src='https://i.pinimg.com/736x/24/21/99/2421998d6c1e6bdc695a4243ba70f0ab.jpg' alt='avatar' className='w-[40px] h-[40px] rounded-full'/>
                        {/* <Image src='https://i.pinimg.com/736x/24/21/99/2421998d6c1e6bdc695a4243ba70f0ab.jpg' alt='avatar' width={40} height={40} className='rounded-full'/> */}
                    </div>
                </PopoverTrigger>
            </Popover>

            </div>
        </div>
      </nav>
    </>
  )
}

export default UserNavbarComponent