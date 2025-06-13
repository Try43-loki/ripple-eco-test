"use client";
import {
  approveVolunteerAction,
  rejectVolunteerAction,
} from "@/action/VolunteerAction";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import FormattedDate from "@/utils/FomattedDate";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
export default function ActionVolunteerComponent({ volunteerList }) {
  const [selected, setSelected] = useState(null);

  const handleApprove = (data) => {
    approveVolunteerAction(data);
  };

  const handleReject = (data) => {
    rejectVolunteerAction(data);
  };
  return (
    <>
      <div>
        <table className="w-full text-left table-auto bg-light-gray rounded-2xl">
          <tbody>
            {volunteerList?.map((volunteer) => (
              <tr
                key={volunteer.requestId}
                className=" overflow-hidden cursor-pointer hover:bg-light-gray hover:rounded-2xl flex justify-between items-center"
                onClick={() => setSelected(volunteer)}
              >
                {/* Name */}
                <td className="py-4 px-6 font-medium min-w-[140px]">
                  {volunteer?.appUserResponse?.firstName}{" "}
                  {volunteer?.appUserResponse?.lastName}
                </td>

                {/* Date */}
                <td className="py-4 px-6 text-sm text-gray-600 min-w-[170px]">
                  <FormattedDate isoString={volunteer?.requestedTime} />
                </td>

                {/* Status*/}
                <td className="py-4 px-6 min-w-[140px]">
                  <span className="inline-block px-4 py-1 text-sm bg-white rounded-full shadow-sm text-gray-700">
                    {volunteer.status || "Pending"}
                  </span>
                </td>

                {/* Action Buttons */}
                <td className="py-4 px-6 space-x-2 rounded-r-2xl min-w-[120px]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApprove(volunteer?.requestId);
                    }}
                    className="bg-green text-white px-4 py-1 rounded-full hover:bg-green/80 w-[100px] cursor-pointer"
                  >
                    Approve
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReject(volunteer?.requestId);
                    }}
                    className="bg-red text-white px-4 py-1 rounded-full hover:bg-red/80 w-[100px] cursor-pointer"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Popup profile */}
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="bg-white rounded-2xl p-6 shadow-lg border border-green cursor-pointer !w-[500px]">
            <DialogTitle />
            {selected && (
              <div className="">
                <div className="flex flex-col sm:flex-row justify-between gap-6 mb-4">
                  {/*User Info */}
                  <div className="flex-1 space-y-2 text-sm text-lighter-green">
                    <div>
                      <h2 className="text-lg font-semibold text-dark-green">
                        {selected.appUserResponse?.firstName}{" "}
                        {selected.appUserResponse?.lastName}
                      </h2>
                      <p className="text-green font-medium">
                        {selected.participantsCount || 0} events participated
                      </p>
                    </div>

                    <div className="mt-4 space-y-1">
                      <p>
                        <span className="font-medium text-dark-green">
                          Requested at :
                        </span>{" "}
                        {/* {selected.requestedTime?.split("T")[0]} */}
                        <FormattedDate
                          isoString={selected?.requestedTime}
                          format="withTime"
                        />
                      </p>
                      <p>
                        <span className="font-medium text-dark-green">
                          Contact :
                        </span>{" "}
                        {selected?.appUserResponse?.phoneNumber}
                      </p>
                      <p>
                        <span className="font-medium text-dark-green">
                          Address :
                        </span>{" "}
                        {selected?.appUserResponse?.address}
                      </p>
                    </div>
                  </div>

                  {/*Profile Image */}
                  <div className="flex-shrink-0 mt-1">
                    <img
                      src={
                        selected.appUserResponse?.profileImageUrl ||
                        "/profile.jpg"
                      }
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover border border-lightes-white"
                    />
                  </div>
                </div>
                <div className="border border-b mb-8 border-lightes-white"></div>

                {/* Reason box */}
                <div className="relative bg-gray-50 border border-lightes-white rounded-xl mb-4 p-4 pt-6">
                  <label
                    htmlFor="reason"
                    className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-dark-green"
                  >
                    Reason of joining :
                  </label>
                  <p className="w-full h-56 p-3 rounded-md text-sm bg-white border border-lightes-white focus:outline-green resize-none text-lighter-green">
                    {selected?.answer}
                  </p>
                </div>

                {/* Approve / Reject buttons */}
                <div className="flex justify-between">
                  <button
                    onClick={(e) => {
                      handleApprove(selected?.requestId);
                      setSelected(null);
                    }}
                    className="bg-green text-white px-5 py-2 rounded-full hover:bg-green-700 w-[48%] cursor-pointer"
                  >
                    Approve
                  </button>
                  <button
                    onClick={(e) => {
                      handleReject(selected?.requestId);
                      setSelected(null);
                    }}
                    className="bg-red text-white px-5 py-2 rounded-full hover:bg-red-700 w-[48%] cursor-pointer"
                  >
                    Reject
                  </button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
