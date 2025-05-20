import Link from 'next/link'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
const NavbarComponent = () => {
  return (
    <>
      <nav>
        <div>

        </div>
        <div>
            <Link href=''>
                Home
            </Link>
            <Link href=''>
                Eco Event
            </Link>
            <Link href=''>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                    <NavigationMenuContent className='w-[400px]' >
                        <Link href={''} className='w-full'>
                            <NavigationMenuLink>
                                Take Action
                            </NavigationMenuLink>
                        </Link>
                        <Link href={''}>
                            <NavigationMenuLink>
                                Discussion
                            </NavigationMenuLink>
                        </Link>
                        
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            
            </Link>
        </div>
        <div>

        </div>
      </nav>
    </>
  )
}

export default NavbarComponent