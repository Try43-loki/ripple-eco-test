import TakeActionCard from '@/components/TakeActionCard'
import React from 'react'

const OwnTakeActionComponent = ( {ownCardData}) => {
  return (
    <>
      <section className="flex flex-row flex-wrap items-start gap-7 justify-center">
      {ownCardData?.map(((data, index) =>
              // <div key={index} className="py-5">
              <TakeActionCard
                key={index}
                image={data?.image}
                id={data?.takeActionId}
                title={data?.title}
                description={
                  data?.description
                }
                support={data?.numberOfSupporter}
                layout={"col"}
                isOwner={true}
                isOrganizer={true}
                isPublic={data?.anonymous}
              />
            //</div>
            ))}
      </section>
    </>
  )
}

export default OwnTakeActionComponent