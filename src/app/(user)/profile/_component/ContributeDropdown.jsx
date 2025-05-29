import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { BadgeDollarSign, ChevronDown, Gift, HandHeart, Handshake, HeartHandshake } from 'lucide-react'
const ContributeDropdown = () => {
  return (
    <>
      <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-2 rounded-xl h-10.5 px-6 py-5 bg-light-gray border-none">
              <h3 className="text-strong-gray">Contribute Type</h3>
              <ChevronDown className="w-3.5 h-3.5 text-strong-gray" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-4 space-y-1 rounded-xl border border-border">
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <HandHeart className="w-5 h-5 text-strong-gray" />
                Donation
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <Handshake className="w-5 h-5 text-strong-gray" />
                Volunteer
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <HeartHandshake className="w-5 h-5 text-strong-gray" />
                Volunteer and Donation
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <Gift className="w-5 h-5 text-strong-gray" />
                Free
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <BadgeDollarSign className="w-5 h-5 text-strong-gray" />
                Fees
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
    </>
  )
}

export default ContributeDropdown