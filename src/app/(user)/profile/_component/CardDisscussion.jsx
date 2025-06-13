import React from "react";
import TagComponent from "@/components/TagComponent";
import moment from "moment";
import TagCardComponent from "../../discussion-forums/_component/TagCardComponent";

const CardDiscussion = ({ discussions }) => {
  return (
    <>
      {discussions?.map((data, index) => (
        <article key={index} className="w-full mt-8">
          <div className="flex flex-col gap-4">
            {/* User Info */}
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full overflow-hidden bg-gray-300">
                <img
                  src={data?.appUser?.profileImageUrl}
                  alt="User Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-sm md:text-base lg:text-lg font-semibold text-dark-green">
                  {data?.appUser?.firstName} {data?.appUser?.lastName}
                </h2>
                <p className="text-xs md:text-sm lg:text-base text-lighters-green">
                  {moment(data?.createdAt).fromNow()}
                  {/* {data?.createdAt} */}
                </p>
              </div>
            </div>

            {/* Discussion Content */}
            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-dark-green">
                {data?.title}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-lighters-green mt-2">
                {data?.description}
              </p>

              {data?.image && (
                <img
                  src={data?.image}
                  alt={data?.title}
                  className="w-full h-72 mt-4 rounded-xl object-cover"
                />
              )}

              {/* Tags */}
              
                <div className="flex flex-wrap gap-2 mt-4">
                    <TagCardComponent tags={data?.tag} counts={data?.commentCount}/>
                    {/* <TagComponent tagData={data?.tag}  /> */}
                </div>
           
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default CardDiscussion;
