import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

const ProvinceDropdown = () => {
  return (
    <>
       <Select>
            <SelectTrigger className="w-auto rounded-xl h-10.5 px-6 py-5 bg-light-gray border-none">
              <SelectValue
                placeholder="Province"
                className="placeholder:text-5 placeholder:text-light-gray"
              />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border border-border px-4 py-1 text-strong-gray text-[18px] max-h-[290px]">
              <SelectGroup>
                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                <SelectItem value="mst">
                  Mountain Standard Time (MST)
                </SelectItem>
                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                <SelectItem value="akst">
                  Alaska Standard Time (AKST)
                </SelectItem>
                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                <SelectItem value="hst1">Hawaii Standard Time (HST)</SelectItem>
                <SelectItem value="hst2">Hawaii Standard Time (HST)</SelectItem>
                <SelectItem value="hst3">Hawaii Standard Time (HST)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
    </>
  )
}

export default ProvinceDropdown