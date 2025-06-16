// 'use client'
import React, { useState } from 'react'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { getUserRankingFilterService } from '@/service/leaderboardService';

const FilterComponent = async({ provinceData, categoryData }) => {
  const [province, setProvince] = useState(null);
  const [category, setCategory] = useState(null);
  return (
    <div className='w-full flex gap-3 text-md md:text-lg lg:text-xl items-center justify-start'>
      {/* filter Province */}
      <Select onValueChange={(value) => setProvince(value)}>
      <SelectTrigger className="w-full border-none bg-lighter-white !text-dark-gray">
        <SelectValue placeholder="Choose Province"/>
      </SelectTrigger>
      <SelectContent className="bg-white border border-light-strok text-dark-gray">
        <SelectGroup>
          {provinceData?.data.map((item) => (
            <SelectItem
              key={item.provinceId}
              value={item.provinceId}
              className="!hover:bg-light-gray cursor-pointer"
            >
              {item.provinceName}

            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
     </Select>

      {/* filter Category */}
       <Select onValueChange={(value) => setCategory(value)}>
      <SelectTrigger className="w-full border-none bg-lighter-white !text-dark-gray">
        <SelectValue placeholder="Choose Category"/>
      </SelectTrigger>
      <SelectContent className="bg-white border border-light-strok text-dark-gray"> 
        <SelectGroup>
          {categoryData?.data.map((item) => (
            <SelectItem
              key={item.categoryId}
              value={item.categoryId}
              className="!hover:bg-light-gray cursor-pointer"
            >
              {item.categoryName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}

export default FilterComponent
