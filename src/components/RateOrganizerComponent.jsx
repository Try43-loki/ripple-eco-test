import { Sparkles } from "lucide-react";
import RatingQuestionComponent from "./RatingQuestionComponent";

const OrganizerRatingsComponent = ({ register, watch, setValue }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
          <Sparkles className="h-5 w-5 text-green-600 mr-2" />
          <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Rate the Organizer
          </h3>
        </div>
        <p className="text-gray-600">
          Help us understand how well the event was organized
        </p>
      </div>

      <div className="space-y-6">
        <RatingQuestionComponent
          number="1"
          question="Did the event achieve its environmental goal?"
          name="rating1"
          register={register}
          watch={watch}
          setValue={setValue}
        />
        <RatingQuestionComponent
          number="2"
          question="How well was the event organized?"
          name="rating2"
          register={register}
          watch={watch}
          setValue={setValue}
        />
      </div>
    </div>
  );
};

export default OrganizerRatingsComponent;
