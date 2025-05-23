"use client";
import { DollarSign,Mail } from 'lucide-react';
import UserNavbarComponent from "@/components/NavbarComponent";
import React from "react";

function HomePage() {
  const items = [
    "Eco Event",
    "Tree Planting",
    "Animal Charity",
    "Beach Plastic Clean Up",
    "Drainage Clean Up",
    "Waste Recycle",
  ];

  return (
    <main className="w-full h-[2000px] bg-black">
      {/* Hero Section */}
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

      {/* Scrolling Section */}
      <section className="w-full py-10 bg-[#048D4C] overflow-hidden relative">
        <div className="whitespace-nowrap animate-scroll">
          <div className="inline-flex gap-20">
            {[...items, ...items].map((title, index) => (
              <div key={index} className="flex items-center gap-25 px-10">
                <img src="/eco.png" alt="eco" className="w-7 h-7" />
                <h3 className="text-white text-2xl">{title}</h3>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            display: inline-block;
            animation: scroll 10s linear infinite;
          }
        `}</style>
      </section>

      {/* Air Quality Section */}
      <section className="w-full py-38 bg-white relative">
        <div className="absolute left-49 top-27">
          <h3 className="text-title text-3xl font-bold ">
            Air Quality in Phnom Penh
          </h3>
          <p className="text-description text-xl pt-2">
            Air quality index (AQI⁺) and PM2.5 air pollution in Phnom Penh{" "}
          </p>
          <p className="text-xl text-[#007AFF] pt-2">See more</p>
        </div>

        <div className="bg-[#FFF6D4] w-[585px] h-[200px] absolute right-49 top-13 rounded-3xl">
          <div className="flex gap-5">
            <div className="absolute left-10 top-12">
              <h2 className="text-[#F9C300] text-7xl font-bold">73</h2>
              <p className="text-[#4A5057] text-xl">US AQI⁺</p>
            </div>

            <div className="absolute top-10 left-40">
              <h4 className="text-[#4A5057] text-2xl font-bold ">Moderate</h4>

              <div className="flex gap-25 pt-2">
                <p className="text-description text-xl font-light ">
                  Main pollutant:{" "}
                  <span className="text-[#4A5057] font-medium">PM2.5 </span>
                </p>
                <p className="text-[#4A5057] font-medium text-xl">14.5 µg/m³</p>
              </div>

              <div className="flex gap-16">
                <div className="flex gap-2 pt-3">
                  <img src="air.png" alt="air" width={30} />
                  <p className="text-description text-xl ">5.5 km/h</p>
                </div>

                <div className="flex gap-2 pt-3">
                  <img
                    src="cloud.png"
                    alt="cloud"
                    className="h-5 w-5 items-center mt-1"
                  />
                  <p className="text-description text-xl ">33o</p>
                </div>

                <div className="flex gap-2 pt-3">
                  <img src="weather.png" alt="weather" width={30} />
                  <p className="text-description text-xl ">62 %</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Event Section */}
      <section className="w-full bg-[#F6F6EE] py-20 px-49">
        <p className="items-center justify-center flex text-xl text-[#3BAA2C] pb-2">
          ECO EVENT
        </p>
        <h2 className="text-title text-3xl/10 font-bold text-center">
          Join Our EcoEvent{" "}
          <span className="block">
            Share, Connect, and Act for a Greener Future
          </span>
        </h2>

        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 [&::-webkit-scrollbar]:hidden scrollbar-none">
          <div className="flex gap-8 pt-6 w-max">
            {Array(5)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="w-[310px] h-full pb-6 bg-white rounded-2xl snap-start shrink-0"
                >
                  <img
                    src="eventImage.png"
                    alt="Event Image"
                    className="rounded-t-2xl "
                    width={310}
                    height={110}
                  />
                  <div className="px-5">
                  <p className="text-ongoing text-sm pt-2">. Ongoing</p>
                  <p className="text-status-volunteer text-md">Mon, 12 May at 8 AM</p>
                  <h3 className="text-title text-2xl/7 font-bold">Green Oasis going <span className="block">Miyawaki</span> </h3>
                  <p className="text-cancel text-sm pt-1">Phnom Penh, Cambodia</p>
                  <p className="text-description text-sm pt-1">100 going</p>

                  <div className="pt-4 flex gap-2">
                    <button className='py-2 px-10 bg-light-gray rounded-md flex gap-2'>
                      <img src="tick-circle.png" alt="tick-circle" className='fill-current h-5 pt-1'/>
                      <p className='text-md text-title font-bold'>Going</p>
                    </button>

                    <button className='py-2 px-4 bg-light-gray rounded-md'>
                      <DollarSign />
                    </button>

                    <button className='py-2 px-4 bg-light-gray rounded-md'>
                      <Mail />
                    </button>
                        

                  </div>
                </div>
              </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
