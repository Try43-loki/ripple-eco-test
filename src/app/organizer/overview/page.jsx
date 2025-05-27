import React from "react";
import HeaderComponent from "./_component/headerComponent";
import CurrentDayComponent from "./_component/CurrentDayComponent";
import TotalStatisticComponent from "./_component/TotalStatisticComponent";
import UpcomingEventComponent from "./_component/UpcomingEventComponent";
import { ChartComponent } from "./_component/ChartComponent";
import ProgressComponent from "./_component/ProgressComponent";
import ListVolunteerComponent from "./_component/ListVolunteerComponent";

function OverviewPage() {
  return (
    <>
      <section className="flex justify-center  items-start gap-x-5">
        {/* content */}
        <section className="grow">
          <HeaderComponent />
          {/* total statistic */}
          <TotalStatisticComponent />
          <section className="flex justify-center items-start gap-x-5 mt-5">
            {/* chart */}
            <ChartComponent className="h-full" />
            {/*progress bar  */}
            <ProgressComponent className="h-full" />
          </section>
          {/* list volunteer */}
          <ListVolunteerComponent />
        </section>
        {/* side right content */}
        <section className="w-2/7">
          <CurrentDayComponent />
          {/* up comming event */}
          <UpcomingEventComponent />
        </section>
      </section>
    </>
  );
}

export default OverviewPage;
