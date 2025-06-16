import { Sparkles } from "lucide-react";
import RatingQuestionComponent from "./RatingQuestionComponent";
import RateFileUploadComponent from "./RateFileUploadComponent";
import { Textarea } from "./ui/textarea";

const RatingOverallComponent = ({ register, watch, setValue, errors }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4">
          <Sparkles className="h-5 w-5 text-amber-600 mr-2" />
          <h3 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Overall Feedback
          </h3>
        </div>
        <p className="text-gray-600">
          Share your overall thoughts and any photos
        </p>
      </div>

      <div className="space-y-8">
        <RatingQuestionComponent
          number="5"
          question="Overall rating of the event"
          name="rating5"
          register={register}
          watch={watch}
          setValue={setValue}
        />

        <div className="grid grid-cols-1 gap-8">
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">
              Picture
            </label>
            <RateFileUploadComponent
              register={register}
              watch={watch}
              setValue={setValue}
              errors={errors}
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">
              Share your thoughts
            </label>
            <Textarea
              placeholder="Tell us about your experience..."
              {...register("feedback")}
              className="h-[180px] placeholder:text-gray-500 text-gray-600 resize-none text-md border border-light-strok hover:border-meduim-gray focus-visible:border-meduim-gray "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingOverallComponent;
