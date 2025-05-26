import React from 'react'
import DiscussionCardComponent from '../../discussion-forums/_component/DiscussionCardComponent'

const DisccusionComponent = () => {
  return (
    <main>
        <section className='flex flex-col items-center gap-y-[12px]'>
            <DiscussionCardComponent image={"https://i.pinimg.com/564x/24/76/ef/2476efbf3daa04c675e03e0083ad38ac.jpg"}/>
            <DiscussionCardComponent />
            <DiscussionCardComponent />
            <DiscussionCardComponent image={"https://i.pinimg.com/564x/24/76/ef/2476efbf3daa04c675e03e0083ad38ac.jpg"}/>
        </section>
    </main>
  )
}

export default DisccusionComponent