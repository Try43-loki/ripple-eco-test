import React from "react";
import HeaderComponent from "./_component/headerComponent";
import CurrentDayComponent from "./_component/CurrentDayComponent";
import TotalStatisticComponent from "./_component/TotalStatisticComponent";
import UpcomingEventComponent from "./_component/UpcomingEventComponent";
import { ChartComponent } from "./_component/ChartComponent";
import ProgressComponent from "./_component/ProgressComponent";
import ListVolunteerComponent from "./_component/ListVolunteerComponent";
import { getDashboardDataService } from "@/service/dashboardService";
import { getUserProfileAction } from "@/action/user-action";

export default async function OverviewPage() {
  const data = await getDashboardDataService();
  const profile = await getUserProfileAction();
  const headerSection = {
    title: "Welcome back, Earth Hero!",
    text: "The Earth is lucky to have you. Let’s keep making choices that lead to a brighter, cleaner future.",
    buttonAction: "create-event",
  };
  return (
    <>
      <section className="flex w-full justify-center  items-start gap-x-5">
        {/* content */}
        <section className="grow">
          <HeaderComponent
            title={headerSection?.title}
            text={headerSection?.text}
            buttonAction={headerSection?.buttonAction}
            profile={profile}
          />
          {/* total statistic */}
          <TotalStatisticComponent total={data?.data?.totals} />
          <section className="flex justify-center items-start gap-x-5 mt-5">
            {/* chart */}
            <ChartComponent
              eventTypeStats={data?.data?.eventTypeStats}
              className="h-full"
            />
            {/*progress bar  */}
            <ProgressComponent
              totalEvents={data?.data?.eventTypeStats.totalEvents}
              eventCategoryStats={data?.data?.eventCategoryStats}
              className="h-full"
            />
          </section>
          {/* list volunteer */}
          <ListVolunteerComponent
            latestVolunteersRequest={data?.data?.latestVolunteersRequest}
          />
        </section>
        {/* side right content */}
        <section className="w-2/9">
          <CurrentDayComponent />
          {/* up comming event */}
          <UpcomingEventComponent upcomingEvent={data?.data?.upcomingEvent} />
        </section>
      </section>
    </>
  );
}
