import React from 'react'
import OwnFeedBackCardComponent from './OwnFeedBackCardComponent'
const desc = "Remaining essentially unchanged. It was popularised in the 1960s"
const link = "https://img.freepik.com/premium-photo/eco-concept-with-group-volunteers_23-2147807208.jpg"
const OwnFeedBackComponent = () => {
  return (
    <main>
        <section className='flex flex-col gap-y-10 items-center w-full'>
            <div className='w-full'>
                <OwnFeedBackCardComponent link={link} desc={desc}/>
            </div>
            <div className='w-full'>
                <OwnFeedBackCardComponent link={""} desc={desc}/>
            </div>
            <div className='w-full'>
                <OwnFeedBackCardComponent link={""} desc={desc}/>
            </div>
            <div className='w-full'>
                <OwnFeedBackCardComponent link={link} desc={desc}/>
            </div>
        </section>
        
    </main>
  )
}

export default OwnFeedBackComponent