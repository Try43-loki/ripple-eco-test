import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const eventData = [
  { name: "Tree Planting", percentage: 30, eventCount: "20,000 Events" },
  { name: "Animal Charity", percentage: 20, eventCount: "20,000 Events" },
  { name: "Plastic Cleanup", percentage: 80, eventCount: "20,000 Events" },
  { name: "Drainage Cleanup", percentage: 40, eventCount: "20,000 Events" },
  { name: "Waste Recycle", percentage: 90, eventCount: "20,000 Events" },
];

export default function ProgressComponent() {
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
                <p className="mr-4 text-light-green">{item?.eventCount}</p>
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
