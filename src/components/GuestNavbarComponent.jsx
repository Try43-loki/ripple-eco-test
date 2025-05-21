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
import { Button } from './ui/button'
import { ClipboardList, MessageCircleQuestion, SunDim, Wind } from 'lucide-react'
const GuestNavbarComponent = () => {
  return (
    <>
      <div className='px-[180px] pt-[28px]'>
        <nav className='flex flex-row items-center justify-between px-[35px] py-[10px] w-full bg-[#E3DFDF1A] rounded-[30px] border-1 border-solid border-[#FFFFFF] text-white text-[18px] '>
            <div>
                <Link href=''>
                    <h2>ripple<span className='text-[#048d4c]'>Eco</span></h2>
                </Link>
            </div>
            <div className='flex flex-row items-center gap-x-[20px]'>
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
            <Link href=''>
                <Button className='bg-[#048d4c] hover:bg-[#048d4c] rounded-2xl w-[100px]'>Sign in</Button>
            </Link>
        </nav>
      </div>
    </>
  )
}

export default GuestNavbarComponent