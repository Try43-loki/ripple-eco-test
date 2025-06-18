// 'use client'
import { getAllEventCategoriesService, getAllProvincesService } from '@/service/ecoEventService'
import React from 'react'
import FilterComponent from './FilterComponent';
const FilterPanelComponent =async () => {
    const provinceData = await getAllProvincesService();
    const categoryData = await getAllEventCategoriesService();
  return (
          <article className="flex gap-3 text-md md:text-lg lg:text-xl items-center">
                <p className="text-green w-full">Filter by:</p>
                <FilterComponent provinceData={provinceData} categoryData={categoryData}/>
            </article>
  )
} 


export default FilterPanelComponent
