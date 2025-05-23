import React from 'react'

const CardAirQualityComponent = () => {
  return (
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
  )
}

export default CardAirQualityComponent