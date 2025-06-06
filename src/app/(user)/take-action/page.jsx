import React from "react";
import SearchBarComponent from "@/components/SearchBarComponent";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import TakeActionComponent from "./_component/TakeActionComponent";
import PopupTakeActionForm from "./_component/PopupTakeActionForm";
import {
  getAllTakeActionService,
  getTakeActionByTitleService,
} from "@/service/takeActionService";

const TakeActionPage = async ({ searchParams: searchParamsPromise }) => {
  // const [openForm, setOpenForm] = useState(false);
  let cardData;
  const searchParams = (await searchParamsPromise) || null;
  const searchQuery = searchParams?.search || "";
  if (searchQuery !== "") {
    const response2 = await getTakeActionByTitleService(searchQuery);
    cardData = response2?.data || [];
  }
  if (searchQuery === "") {
    const response = await getAllTakeActionService();
    cardData = response?.data || [];
  }

  const heroSectionText = {
    title: "TAKE ACTION",
    description:
      " Share ideas, explore solutions, and connect with others driving environmental change.",
    search: false,
  };

  return (
    <main>
      <HeroSectionComponent
        text={heroSectionText.title}
        description={heroSectionText.description}
        showSearchBar={heroSectionText.search}
      />

      <section className="mt-[48px] flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center px-4 md:px-12 lg:px-32 my-6 w-full">
        {/* Search bar */}
        <SearchBarComponent
          placeholder="Search Take Action"
          pagePath={"/take-action"}
        />
        <PopupTakeActionForm />
      </section>
      <TakeActionComponent cardData={cardData} />
    </main>
  );
};

export default TakeActionPage;
