import HeroSectionComponent from "@/components/HeroSectionComponent";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import FilterEcoEventComponent from "./_component/FilterEcoEventComponent";
import {
  getAllEcoEventService,
  getEcoEventByTitleService,
} from "@/service/ecoEventService";
import SearchBarComponent from "@/components/SearchBarComponent";

const EcoEventPage = async ({ searchParams: searchParamsPromise }) => {
  let cardData = [];

  const searchParams = (await searchParamsPromise) || null;
  const searchQuery = searchParams?.search || "";

  if (searchQuery !== "") {
    const response = await getEcoEventByTitleService(searchQuery);
    cardData = response?.data ?? [];
  } else {
    const response = await getAllEcoEventService();
    cardData = response?.data ?? [];
  }

  const heroSectionText = {
    title: "ECO EVENT",
    description:
      "Join our EcoEvent to share ideas, connect, and act for a healthier planet.",
    search: false,
  };

  return (
    <main className="w-full relative">
      <article>
        <HeroSectionComponent
          text={heroSectionText.title}
          description={heroSectionText.description}
          showSearchBar={heroSectionText.search}
        />

        <div className="w-full absolute space-y-3 left-1/2 top-85 -translate-y-1/2 -translate-x-1/2 max-w-5xl px-4 md:px-20 lg:px-[150px] text-white text-center flex flex-col items-center">
          <SearchBarComponent
            placeholder="Search Eco Event"
            pagePath="/eco-event"
          />
        </div>

        <section className="px-4 md:px-20 lg:px-[150px] pb-12 mt-10">
          <FilterEcoEventComponent />

          <div className="flex flex-wrap justify-start gap-5 mt-0">
            {cardData?.length > 0 ? (
              cardData.map((event) => (
                <div key={event?.eventId}>
                  <CardEcoEventComponent event={event} />
                </div>
              ))
            ) : (
              <p className="text-red text-center w-full">No events found.</p>
            )}
          </div>
        </section>
      </article>
    </main>
  );
};

export default EcoEventPage;
