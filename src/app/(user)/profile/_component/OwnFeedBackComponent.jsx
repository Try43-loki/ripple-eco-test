import React from "react";
import OwnFeedBackCardComponent from "./OwnFeedBackCardComponent";
import Link from "next/link";
const desc = "Remaining essentially unchanged. It was popularised in the 1960s";
const link =
  "https://img.freepik.com/premium-photo/eco-concept-with-group-volunteers_23-2147807208.jpg";

const feedbackData = [
  { id: 1, link: link, desc: desc },
  { id: 2, link: "", desc: desc },
  { id: 3, link: "", desc: desc },
  { id: 4, link: link, desc: desc },
];
const OwnFeedBackComponent = () => {
  return (
    <main>
      <section className="flex flex-col gap-y-5 items-center w-full">
        {feedbackData.map((data) => (
          <Link href={`/eco-event/${data.id}`} key={data.id} className="w-full">
            <div className="w-full">
              <OwnFeedBackCardComponent
                link={data.link}
                desc={data.description}
              />
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default OwnFeedBackComponent;
