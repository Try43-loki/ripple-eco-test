export default function AgendaComponent() {
  const scheduleData = [
    {
      day: "Day 1 - May 14, 2025",
      activities: [
        { time: "09:00 am", title: "Check-in and welcome" },
        { time: "10:00 am", title: "Opening ceremony" },
        { time: "11:00 am", title: "Keynote presentation" },
        { time: "12:00 pm", title: "Networking lunch" },
        { time: "02:00 pm", title: "Workshop session" },
        { time: "04:00 pm", title: "Panel discussion" },
        { time: "05:00 pm", title: "Closing remarks" },
      ],
    },
    {
      day: "Day 2 - May 15, 2025",
      activities: [
        { time: "09:00 am", title: "Morning briefing" },
        { time: "10:00 am", title: "Team building activities" },
        { time: "12:00 pm", title: "Lunch break" },
        { time: "02:00 pm", title: "Project presentations" },
        { time: "04:00 pm", title: "Awards ceremony" },
      ],
    },
  ];

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-2xl">
      <div className="relative">
        {/* Main vertical line */}
        <div className="absolute left-1.5 top-4 bottom-0 w-1 bg-green rounded-full"></div>

        {scheduleData.map((dayData, dayIndex) => (
          <div key={dayIndex} className="relative mb-8 last:mb-0">
            {/* Day Header */}
            <div className="flex items-center mb-3">
              <div className="w-4 h-4 bg-green rounded-full flex-shrink-0 z-10 relative"></div>
              <h2 className="ml-4 text-sm md:text-base lg:text-lg font-medium text-dark-green">
                {dayData.day}
              </h2>
            </div>

            {/* Activities List */}
            <div className="ml-8 space-y-3">
              {dayData.activities.map((activity, activityIndex) => (
                <div key={activityIndex} className="flex items-center">
                  <span className="text-xs md:text-sm lg:text-base font-medium text-dark-green mr-4 min-w-[65px]">
                    {activity.time}
                  </span>
                  <div className="w-0.5 h-4 bg-green mr-3 rounded-full"></div>
                  <span className="text-xs md:text-sm lg:text-base text-lighter-green">
                    {activity.title}
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
