import { Sparkles } from "lucide-react";
import RatingQuestionComponent from "./RatingQuestionComponent";

const RatingExperenceComponent = ({ register, watch, setValue }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-4">
          <Sparkles className="h-5 w-5 text-emerald-600 mr-2" />
          <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Your Experience
          </h3>
        </div>
        <p className="text-gray-600">
          Tell us about your personal experience at the event
        </p>
      </div>

      <div className="space-y-6">
        <RatingQuestionComponent
          number="3"
          question="Did you feel like your participation made a difference?"
          name="rating3"
          register={register}
          watch={watch}
          setValue={setValue}
        />
        <RatingQuestionComponent
          number="4"
          question="Would you attend again or recommend it to others?"
          name="rating4"
          register={register}
          watch={watch}
          setValue={setValue}
        />
      </div>
    </div>
  );
};

export default RatingExperenceComponent;
