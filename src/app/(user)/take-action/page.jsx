
import React from "react";
import SearchBarComponent from "@/components/SearchBarComponent";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import TakeActionComponent from "./_component/TakeActionComponent";
import PopupTakeActionForm from "./_component/PopupTakeActionForm";
import { getAllTakeActionService, getTakeActionByTitleService } from "@/service/takeActionService";

const TakeActionPage = async ( {searchParams : searchParamsPromise} ) => {
  // const [openForm, setOpenForm] = useState(false);
  let cardData ;
  const searchParams = await searchParamsPromise || null;
  const searchQuery = searchParams?.search || '';
  if(searchQuery !== ''){
    const response2 = await getTakeActionByTitleService(searchQuery);
    cardData = response2?.data || [];
  } 
  if(searchQuery === '') {
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
        <SearchBarComponent placeholder="Search Take Action" pagePath={"/take-action"}/>

        {/* Create Discussion Button */}
        {/* <Button
          onClick={() => setOpenForm(true)}
          variant="outline"
          className="w-auto bg-green cursor-pointer hover:bg-strong-green text-white hover:text-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6"
        >
          Create Survey
        </Button>
        <CreateTakeActionFormComponent
          open={openForm}
          onOpenChange={setOpenForm}
        /> */}
        <PopupTakeActionForm/>
      </section>
      <TakeActionComponent cardData={cardData} />
    </main>
  );
};

export default TakeActionPage;
