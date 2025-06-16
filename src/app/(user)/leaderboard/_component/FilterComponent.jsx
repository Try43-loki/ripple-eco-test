'use client'
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from 'next/navigation';

const FilterComponent = ({ provinceData, categoryData }) => {
  const [province, setProvince] = useState('');
  const [category, setCategory] = useState('');

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (province) {
      params.set('provinceId', province);
    } else {
      params.delete('provinceId');
    }

    if (category) {
      params.set('categoryId', category);
    } else {
      params.delete('categoryId');
    }

    const queryString = params.toString();
    router.push(`/leaderboard?${queryString}`);
  }, [province, category]);

  return (
    <div className='w-full flex gap-3 text-md md:text-lg lg:text-xl items-center justify-start'>
      {/* filter Province */}
      <Select onValueChange={(value) => setProvince(value)}>
        <SelectTrigger className="w-full border-none bg-lighter-white !text-dark-gray">
          <SelectValue placeholder="Choose Province" />
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
          <SelectValue placeholder="Choose Category" />
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
  );
};

export default FilterComponent;
