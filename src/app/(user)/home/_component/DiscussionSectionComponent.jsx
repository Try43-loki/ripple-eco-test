import React from 'react'
import DiscussionButtonComponent from '../../discussion-forums/_component/DiscussionButtonComponent'

const DiscussionSectionComponent = () => {
    const btnDiscussion = "Start Discussion";
  return (
    <div>
        <section className="w-full py-16 px-6 md:px-20 lg:px-45 flex bg-white ">
        <div className="flex flex-col md:flex-col lg:flex-row md:gap-5 items-center  ">
          <div className="flex-col w-full lg:mr-20 ">
          <p className="text-primary text-base md:text-lg lg:text-xl mb-2">
            Discussion
          </p>
          <h2 className="text-title text-2xl md:text-3xl lg:text-4xl font-bold">
            Green Conversations For a Cleaner Tomorrow
          </h2>
          <p className="text-description text-xs md:text-sm lg:text-base mt-2">
            Share ideas, explore solutions, and connect with others driving environmental change.
          </p>
          <div className="mt-6">
            <DiscussionButtonComponent text={btnDiscussion} />
          </div>
          </div>
          <div className="mt-5">
            <img src="/assets/DiscussionSection.jpg" className="rounded-tl-2xl rounded-bl-2xl"></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DiscussionSectionComponent