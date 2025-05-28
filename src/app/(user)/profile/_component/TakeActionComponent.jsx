import React from 'react'
import Temporarycard from './Temporarycard';


const TakeActionComponent = () => {
  return (
    <main>
      <section className="w-full flex flex-row flex-wrap justify-between items-center">
        
        <div className='w-[280px]'>
          <Temporarycard
            image={"/sub-banner.jpg"}
            title={"Stand Up to Plastic Pollution"}
            description={
              "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
            }
            support={"11,376"}
          />
        </div>

        <div className='w-[280px]'>
          <Temporarycard
            image={"/sub-banner.jpg"}
            title={"Stand Up to Plastic Pollution"}
            description={
              "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
            }
            support={"11,376"}
          />
        </div>

        <div className='w-[280px]'>
          <Temporarycard
            image={"/sub-banner.jpg"}
            title={"Stand Up to Plastic Pollution"}
            description={
              "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
            }
            support={"11,376"}
          />
        </div>

        <div className='w-[280px]'>
          <Temporarycard
            image={"/sub-banner.jpg"}
            title={"Stand Up to Plastic Pollution"}
            description={
              "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
            }
            support={"11,376"}
          />
        </div>
      </section>
    </main>
  );
}

export default TakeActionComponent