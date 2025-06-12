import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { NotificationManageComponent } from "./NotificatonManageComponent";

export default function NotificationTabs({ messages }) {
  const unreadItems = messages?.filter((item) => item.read_at === null);

  return (
    <Tabs defaultValue="account" className="w-full mt-4 h-96 overflow-y-auto">
      <TabsList className="flex justify-between items-center w-full text-dark-green rounded-none  ">
        <TabsTrigger value="All">All</TabsTrigger>
        <TabsTrigger value="Unread">Unread</TabsTrigger>

        <TabsTrigger value="Archived">Archived</TabsTrigger>
      </TabsList>
      <hr className="border border-light-strok " />
      <TabsContent value="All">
        <section className="flex justify-center items-center flex-col gap-2">
          {messages?.map((item, index) => (
            <article
              key={index}
              className="flex justify-center flex-col items-center border-b border-lighter-green py-2 w-full"
            >
              <div className="flex justify-start items-start gap-x-4 w-full">
                <Image
                  src="/assets/profileVolunteer.png"
                  width={50}
                  height={50}
                  alt="profileVolunteer"
                ></Image>
                <div className="flex justify-center items-center flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-start flex-col">
                      <p className="text-sm text-lighter-green font-light ">
                        <span className="font-semibold text-meduim-green">
                          Kimhout
                        </span>{" "}
                        {item?.data?.category}
                      </p>
                      <p className="text-[12px] text-meduim-gray">Just now</p>
                    </div>
                    <NotificationManageComponent />
                  </div>
                  <article className="bg-meduim-green rounded-lg p-2 mt-2 text-white text-sm w-full">
                    <p>{item.data.message}</p>
                  </article>
                </div>
              </div>
            </article>
          ))}
        </section>
      </TabsContent>
      <TabsContent value="Unread">
        <section className="flex justify-center items-center flex-col gap-2">
          {unreadItems?.map((item, index) => (
            <article
              key={index}
              className="flex justify-center flex-col items-center border-b border-lighter-green py-2 w-full"
            >
              <div className="flex justify-start items-start gap-x-4 w-full">
                <Image
                  src="/assets/profileVolunteer.png"
                  width={50}
                  height={50}
                  alt="profileVolunteer"
                ></Image>
                <div className="flex justify-center items-center flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-start flex-col">
                      <p className="text-sm text-lighter-green font-light ">
                        <span className="font-semibold text-meduim-green">
                          Kimhout
                        </span>{" "}
                        {item?.data?.category}
                      </p>
                      <p className="text-[12px] text-meduim-gray">Just now</p>
                    </div>
                    <NotificationManageComponent />
                  </div>
                  <article className="bg-meduim-green rounded-lg p-2 mt-2 text-white text-sm w-full">
                    <p>{item.data.message}</p>
                  </article>
                </div>
              </div>
            </article>
          ))}
        </section>
      </TabsContent>
      <TabsContent value="Archived">
        <section className="flex justify-center items-center flex-col gap-2">
          {unreadItems?.map((item, index) => (
            <article
              key={index}
              className="flex justify-center flex-col items-center border-b border-lighter-green py-2 w-full"
            >
              <div className="flex justify-start items-start gap-x-4 w-full">
                <Image
                  src="/assets/profileVolunteer.png"
                  width={50}
                  height={50}
                  alt="profileVolunteer"
                ></Image>
                <div className="flex justify-center items-center flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-start flex-col">
                      <p className="text-sm text-lighter-green font-light ">
                        <span className="font-semibold text-meduim-green">
                          Kimhout
                        </span>{" "}
                        {item?.data?.category}
                      </p>
                      <p className="text-[12px] text-meduim-gray">Just now</p>
                    </div>
                    <NotificationManageComponent />
                  </div>
                  <article className="bg-meduim-green rounded-lg p-2 mt-2 text-white text-sm w-full">
                    <p>{item.data.message}</p>
                  </article>
                </div>
              </div>
            </article>
          ))}
        </section>
      </TabsContent>
    </Tabs>
  );
}
