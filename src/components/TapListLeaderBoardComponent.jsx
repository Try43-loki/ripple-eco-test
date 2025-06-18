'use client';

import { useEffect, useState } from 'react';
import { getAllUserRankingService, getAllOrganizerRankingService } from '@/service/leaderboardService';
import Image from 'next/image';
import { Building, Users2 } from 'lucide-react';
import { TabsList, TabsTrigger } from './ui/tabs';

export const TapListLeaderboardComponent =()=> {
  const [activeTab, setActiveTab] = useState('user');
  const [topThree, setTopThree] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = [];

        if (activeTab === 'user') {
          const userRes = await getAllUserRankingService();
          data = userRes.data;
        } else {
          const orgRes = await getAllOrganizerRankingService();
          data = orgRes.data;
        }

        const sorted = [...data].sort((a, b) => a.ranking - b.ranking);
        const reordered = [sorted[1], sorted[0], sorted[2]];
        setTopThree(reordered);
      } catch (error) {
        console.error('Failed to fetch rankings:', error);
        setTopThree([]);
      }
    };

    fetchData();
  }, [activeTab]);

  const [second, first, third] = topThree;

  const getProfileImage = (entry) =>
    entry?.appUserResponse?.profileImageUrl || entry?.organizerResponse?.profileImageUrl || '/default-profile.png';
  return (
    <TabsList className="relative h-auto bg-white rounded-3xl border border-light-gray  shadow-sm overflow-visible flex flex-col w-full md:flex-row lg:flex-col p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="w-full mb-20 md:mb-0 flex flex-col ">
              <div className="flex gap-3 mb-4">
                <TabsTrigger
                  value="user"
                  onClick={() => setActiveTab('user')}
                  className={`flex items-center max-w-1/12 px-3 py-1.5 gap-2 border border-light-white cursor-pointer rounded-md text-xs md:text-sm lg:text-sm ${
            "data-[state=active]:bg-green data-[state=active]:text-white"
          }`}
                >
                  <Users2 className="w-4 h-4" />
                  User
                </TabsTrigger>
                <TabsTrigger
                  value="organizer"
                  onClick={() => setActiveTab('organizer')}
                  className={`flex items-center max-w-1/12 px-3 py-1.5 gap-2 border border-light-white cursor-pointer rounded-md text-xs md:text-sm lg:text-sm ${
            "data-[state=active]:bg-green data-[state=active]:text-white"
          }`}
                >
                  <Building className="w-4 h-4" />
                  Organizer
                </TabsTrigger>
              </div>
            
              {/* Dynamic Title & Description */}
              <div className="flex flex-col">
                <span className="text-green text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  Green Champions Leaderboard
                </span>
                <span className="text-dark-green text-xs md:text-md lg:text-lg mt-2 max-w-80">
                  Share more, do more—earn your spot and motivate others to join in.
                </span>
              </div>
            </div>
    
    
            {/* ----- Right side: podiums ----- */}
            <div className="">
              {topThree.length === 3 && (
      <div className="absolute top-10.5 right-0 flex items-end pr-15">
        {/* 2nd Place */}
        <div className="flex flex-col items-center relative z-0">
          <div className="absolute -top-8 sm:-top-10 md:-top-12 flex items-center gap-1">
            <Image src="/assets/leaderboard/laurel-wreath-left-02.png" alt="" width={20} height={64} />
            <Image
              src={getProfileImage(second)}
              alt="2nd"
              width={64}
              height={64}
              className="rounded-full w-[64px] h-[64px]"
            />
            <Image src="/assets/leaderboard/laurel-wreath-right-02.png" alt="" width={20} height={64} />
          </div>
          <Image src="/assets/leaderboard/board-2.png" alt="2nd" width={130} height={60} />
        </div>
    
        {/* 1st Place */}
        <div className="flex flex-col items-center relative z-10">
          <div className="absolute -top-10 sm:-top-12 md:-top-14 flex items-center gap-1">
            <Image src="/assets/leaderboard/laurel-wreath-left-01.png" alt="" width={20} height={64} />
            <Image
              src={getProfileImage(first)}
              alt="1st"
              width={64}
              height={64}
              className="rounded-full w-[64px] h-[64px]"
            />
            <Image src="/assets/leaderboard/laurel-wreath-right-01.png" alt="" width={20} height={64} />
          </div>
          <Image src="/assets/leaderboard/board.png" alt="1st" width={130} height={100} />
        </div>
    
        {/* 3rd Place */}
        <div className="flex flex-col items-center relative z-0">
          <div className="absolute -top-8 sm:-top-10 md:-top-12 flex items-center gap-1">
            <Image src="/assets/leaderboard/laurel-wreath-left-03.png" alt="" width={20} height={64} />
            <Image
               src={getProfileImage(third)}
              alt="3rd"
              width={64}
              height={64}
              className="rounded-full w-[64px] h-[64px]"
            />
            <Image src="/assets/leaderboard/laurel-wreath-right-03.png" alt="" width={20} height={64} />
          </div>
          <Image src="/assets/leaderboard/board-3.png" alt="3rd" width={130} height={60} />
        </div>
      </div>
      )}
            </div>
    
          </TabsList>
  )
}

