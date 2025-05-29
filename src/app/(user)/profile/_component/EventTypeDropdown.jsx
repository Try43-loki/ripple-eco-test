import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ChevronDown, Hammer, NotebookPen } from 'lucide-react'
import React from 'react'

const EventTypeDropdown = () => {
  return (
    <>
       <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-2 rounded-xl h-10.5 px-6 py-5 bg-light-gray border-none">
              <h3 className="text-strong-gray">Event Type</h3>
              <ChevronDown className="w-3.5 h-3.5 text-strong-gray" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-4 space-y-1 rounded-xl border border-border">
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <NotebookPen className="w-5 h-5 text-strong-gray" />
                Seminar
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <Hammer className="w-5 h-5 text-strong-gray" />
                Hand-on Event
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
    </>
  )
}

export default EventTypeDropdown