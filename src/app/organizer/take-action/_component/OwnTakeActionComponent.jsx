import TakeActionCard from '@/components/TakeActionCard'
import { getCurrentUserProfileService } from '@/service/profileService';
import React from 'react'

const OwnTakeActionComponent = async ( {ownCardData}) => {
  const userData = await getCurrentUserProfileService();
  return (
    <>
      <section className="flex flex-row flex-wrap items-start gap-7 justify-center">
              <TakeActionCard
                isOwner={true}
                cardData={ownCardData}
                layout={"col"}
                isOrganizer={userData?.data?.organizer}
              />
      </section>
    </>
  )
}

export default OwnTakeActionComponent