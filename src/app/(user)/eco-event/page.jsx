import HeroSectionComponent from "@/components/HeroSectionComponent";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import FilterEcoEventComponent from "./_component/FilterEcoEventComponent";
import { getAllEcoEventService } from "@/service/ecoEventService";

const EcoEventPage = async () => {
  const events = await getAllEcoEventService();
  const data = Array.isArray(events) ? events : events?.data || [];

  const heroSectionText = {
    title: "ECO EVENT",
    description:
      "Join our EcoEvent to share ideas, connect, and act for a healthier planet.",
    search: true,
  };

  return (
    <main className="w-full">
      <article className="flex flex-col justify-start items-start">
        <HeroSectionComponent
          text={heroSectionText.title}
          description={heroSectionText.description}
          showSearchBar={heroSectionText.search}
        />

        <section className="px-4 md:px-20 lg:px-[150px] pb-12 mt-5">
          <FilterEcoEventComponent />

          <div className="flex flex-wrap justify-start md:gap-10 lg:gap-5 w-full">
            {data?.map((item, index) => (
              <CardEcoEventComponent
                key={index}
                operator="guest"
                href={`/eco-event/${item.eventId}`}
                type={item.eventTypes.eventType}
                contribute={item.contributeTypesResponse.contributeTypeName}
                category={item.category.categoryName}
                status={item.eventStatus}
                date={item.startDate}
                participats={item.maxSlot}
                title={item.title}
                location={item.provinces?.provinceName}
                image={item.image}
              />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
};

export default EcoEventPage;
