import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ProgressComponent({ totalEvents, eventCategoryStats }) {
  const eventData = [
    {
      name: eventCategoryStats?.eventCategoriesPercentage[0].type,
      percentage: eventCategoryStats?.eventCategoriesPercentage[0].percentage,
      eventCount: totalEvents,
    },
    {
      name: eventCategoryStats?.eventCategoriesPercentage[1].type,
      percentage: eventCategoryStats?.eventCategoriesPercentage[1].percentage,
      eventCount: totalEvents,
    },
    {
      name: eventCategoryStats?.eventCategoriesPercentage[2].type,
      percentage: eventCategoryStats?.eventCategoriesPercentage[2].percentage,
      eventCount: totalEvents,
    },
    {
      name: eventCategoryStats?.eventCategoriesPercentage[3].type,
      percentage: eventCategoryStats?.eventCategoriesPercentage[3].percentage,
      eventCount: totalEvents,
    },
    {
      name: eventCategoryStats?.eventCategoriesPercentage[4].type,
      percentage: eventCategoryStats?.eventCategoriesPercentage[4].percentage,
      eventCount: totalEvents,
    },
  ];
  return (
    <>
      <section className="w-4/7 rounded-xl border border-light-strok p-4">
        <h1 className="text-xl text-dark-green font-semibold">
          Popular Events
        </h1>
        <article className="flex justify-center items-center mt-4 flex-col gap-y-5.5">
          {eventData.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-x-4 w-full"
            >
              <p className="w-3/5 text-light-green ">{item?.name}</p>
              <div className="h-7 relative w-full bg-lighter-white rounded-3xl flex justify-end items-center ">
                <p className="mr-4 text-light-green">
                  {item?.eventCount === 0 || item?.eventCount === 1
                    ? item?.eventCount + " event"
                    : item?.eventCount + " events"}
                </p>
                <div
                  className={`h-full bg-green  rounded-3xl absolute left-0 flex justify-center items-center ${
                    item?.percentage == 100 ? "opacity-100" : "opacity-90"
                  }`}
                  style={{ width: `${item?.percentage}%` }}
                >
                  <p className="text-white">{item?.percentage}%</p>
                </div>
              </div>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
