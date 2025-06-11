export default function AgendaComponent({ agenda }) {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-2xl">
      <div className="relative">
        {/* Main vertical line */}
        <div className="absolute left-1.5 top-4 bottom-0 w-1 bg-green rounded-full"></div>

        {agenda?.map((dayData, dayIndex) => (
          <div key={dayIndex} className="relative mb-8 last:mb-0">
            {/* Day Header */}
            <div className="flex items-center mb-3">
              <div className="w-4 h-4 bg-green rounded-full flex-shrink-0 z-10 relative"></div>
              <h2 className="ml-4 text-sm md:text-base lg:text-lg font-medium text-dark-green">
                {dayData.dayLabel} - {dayData.date}
              </h2>
            </div>

            {/* Activities List */}
            <div className="ml-8 space-y-3">
              {dayData.activitiesList?.map((activity, activityIndex) => (
                <div key={activityIndex} className="flex items-center">
                  <span className="text-xs md:text-sm lg:text-base font-medium text-dark-green mr-4 min-w-[65px]">
                    {activity.time}
                  </span>
                  <div className="w-0.5 h-4 bg-green mr-3 rounded-full"></div>
                  <span className="text-xs md:text-sm lg:text-base text-lighter-green">
                    {activity.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
