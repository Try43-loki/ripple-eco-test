import React from 'react'
import LeaderboardHeroSectionComponent from './_component/LeaderboardHeroSectionComponent'
import ChampionsLeaderboardComponent from './_component/ChampionsLeaderboardComponent'
import TopRankingComponent from './_component/TopRankingComponent'

const LeaderboardPage = () => {
  return (
    <div className='bg-black'>
      {/* Hero Section */}
      <LeaderboardHeroSectionComponent/>

      {/* Top Ranking Section */}
      <TopRankingComponent/>
    </div>
  )
}

export default LeaderboardPage