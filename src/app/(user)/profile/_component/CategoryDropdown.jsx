import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ChevronDown, HandHeart, Recycle, TreeDeciduous } from 'lucide-react'
import React from 'react'

const CategoryDropdown = () => {
  return (
    <>
        <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-2 rounded-xl h-10.5 px-6 py-5 bg-light-gray border-none">
              <h3 className="text-strong-gray">Category Type</h3>
              <ChevronDown className="w-3.5 h-3.5 text-strong-gray" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-4 space-y-1 rounded-xl border border-border">
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <Recycle className="w-5 h-5 text-strong-gray" />
                Environment Cleaning
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <TreeDeciduous className="w-5 h-5 text-strong-gray" />
                Tree Planting
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <HandHeart className="w-5 h-5 text-strong-gray" />
                Donation
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
    </>
  )
}

export default CategoryDropdown