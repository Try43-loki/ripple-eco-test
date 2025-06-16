import VolunteerWrapperComponent from "../_component/VolunteerWrapperComponent";

const EventVolunteerPage = async ({ params }) => {
  const { eventId } = await params;

  return (
    <div className="w-full">
      <VolunteerWrapperComponent eventId={eventId} />
    </div>
  );
};

export default EventVolunteerPage;
