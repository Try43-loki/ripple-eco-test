import React from 'react'
import CardEcoEvnentOrgProfile from './CardEcoEvnentOrgProfile'
import CardOrgLeaderComponent from './CardOrgLeaderComponent'
import { DatePickComponent } from './DatePickComponent'


const SideComponent = () => {
  return (
    <>
      <section className="rounded-2xl bg-light-gray p-3.75 border-none w-full flex flex-col items-center gap-y-5">
        <CardOrgLeaderComponent/>
        <div className="w-full">
          <div className="flex flex-row items-center justify-between">
            <h4>My Schedule</h4>
            <DatePickComponent/>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default SideComponent