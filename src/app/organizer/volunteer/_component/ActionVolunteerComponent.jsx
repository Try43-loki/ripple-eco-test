import {
  approveVolunteerAction,
  rejectVolunteerAction,
} from "@/action/VolunteerAction";
import { useRouter } from "next/navigation";

export default function ActionVolunteerComponent({
  volunteer,
  isAlternateRow,
  onClick,
}) {
  const handleApprove = async (e) => {
    e.stopPropagation();
    await approveVolunteerAction(volunteer?.requestId);
  };

  const handleReject = async (e) => {
    e.stopPropagation();
    await rejectVolunteerAction(volunteer?.requestId);
  };
  return (
    <form
      onClick={onClick}
      className={`w-full flex py-5 px-4 justify-between items-center ${
        isAlternateRow ? "bg-white" : "bg-light-gray"
      } rounded-2xl cursor-pointer hover:bg-lighter-white transition`}
    >
      <p className="min-w-[160px]">
        {volunteer?.appUserResponse?.firstName}{" "}
        {volunteer?.appUserResponse?.lastName}
      </p>
      <p className="min-w-[120px]">{volunteer?.requestedTime}</p>

      <div className="min-w-[120px]">
        <div className="py-1 px-4 bg-white shadow text-dark-green rounded-full flex justify-center">
          {volunteer?.status || "Pending"}
        </div>
      </div>

      <div className="flex gap-3 min-w-[160px]">
        <button
          type="button"
          onClick={handleApprove}
          className="py-1 px-4 bg-green text-white rounded-full hover:bg-green/90"
        >
          Approve
        </button>
        <button
          type="button"
          onClick={handleReject}
          className="py-1 px-5 bg-red text-white rounded-full hover:bg-red/90"
        >
          Reject
        </button>
      </div>
    </form>
  );
}
