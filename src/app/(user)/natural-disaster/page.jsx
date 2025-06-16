import HeroSectionNaturalDisasterComponent from "./_components/HeroSectionNaturalDisasterComponent";
import { clsx } from "clsx";
import MapComponent from "./_components/MapComponent";
import RecentDisasterComponent from "./_components/RecentDisasterComponent";
import { getFilterDisaster } from "@/service/naturalDisasterService";

const NaturalDisasterPage = async ({ searchParams: ParamsPromise }) => {
  const { disasterType, severityType, startDate, endDate } =
    await ParamsPromise;
  const naturalData = await getFilterDisaster(
    disasterType,
    severityType,
    startDate,
    endDate
  );

  return (
    <div className="relative flex flex-col gap-9">
      {/* Full-page background */}
      <div
        className={clsx(
          "absolute bottom-0 -z-1 left-0 right-0 top-0",
          `bg-[radial-gradient(circle_1500px_at_100%_200px,#FAF0CC,transparent)]`
        )}
      ></div>

      {/* Hero Section */}
      <section className="relative flex w-full h-[200px] md:h-[300px] lg:h-[400px] justify-center items-center">
        <HeroSectionNaturalDisasterComponent naturalData={naturalData.data} />
      </section>

      {/* Section Map */}
      <section className="flex flex-col w-full h-[200px] md:h-[300px] lg:h-fit">
        <MapComponent naturalData={naturalData.data} />
      </section>

      {/* Section Recently */}
      <section className="flex flex-col w-full">
        <RecentDisasterComponent naturalData={naturalData.data} />
      </section>
    </div>
  );
};

export default NaturalDisasterPage;
