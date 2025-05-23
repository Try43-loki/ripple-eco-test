import UserNavbarComponent from '@/components/NavbarComponent'
import React from 'react'

const HomeHeroSectionComponent = () => {
  return (
          <section className="relative">
        <div className="top-0 absolute w-full">
          <UserNavbarComponent />
        </div>

        <img src="/banner.jpg" alt="banner" />
        <h3 className="text-[#3BAA2C] absolute top-80 left-49 text-2xl">
          NATURAL ENVIRONMENT
        </h3>
        <h1 className="text-7xl/20 font-bold text-white absolute top-93 left-49">
          Guard Our Planet, <br />
          Ignite Change
        </h1>
        <h2 className="text-2xl text-white absolute bottom-56 left-49">
          Join events, share ideas, and lead initiatives that motivate your
          community <br />
          to create lasting, positive change.
        </h2>
        <button className="text-2xl text-white absolute bottom-31 left-49 py-5 px-15 bg-[#3BAA2C] rounded-2xl">
          Explore
        </button>
      </section>
  )
}

export default HomeHeroSectionComponent