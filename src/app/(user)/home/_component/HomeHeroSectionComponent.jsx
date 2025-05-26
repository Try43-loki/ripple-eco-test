import React from 'react';
import UserNavbarComponent from '@/components/NavbarComponent';

const HomeHeroSectionComponent = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <UserNavbarComponent />
      </div>

      {/* Background Image */}
      <img
        src="/assets/banner.jpg"
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-20 lg:px-45 text-white bg-black/40">
        <h3 className="text-primary text-base md:text-xl lg:text-2xl mb-4">
          NATURAL ENVIRONMENT
        </h3>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight mb-6">
          Guard Our Planet, <br /> Ignite Change
        </h1>
        <h2 className="text-sm md:text-base lg:text-lg mb-8 max-w-3xl">
          Join events, share ideas, and lead initiatives that motivate your
          community to create lasting, positive change.
        </h2>
        <button className="text-base md:text-lg lg:text-xl bg-primary px-6 py-3 rounded-xl hover:bg-[#339622] transition">
          Explore
        </button>
      </div>
    </section>
  );
};

export default HomeHeroSectionComponent;
