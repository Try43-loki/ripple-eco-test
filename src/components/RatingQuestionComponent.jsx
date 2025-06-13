import StarRatingComponent from "./RatingStarComponent";
import { Badge } from "./ui/badge";

const RatingQuestionComponent = ({
  number,
  question,
  name,
  register,
  watch,
  setValue,
}) => {
  return (
    <div className="p-6  rounded-2xl border border-light-strok shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start mb-3">
        <Badge
          variant="secondary"
          className="mr-4 mt-1 h-8 w-8 rounded-full flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-sm"
        >
          {number}
        </Badge>
        <p className="text-lg font-semibold text-gray-800 leading-relaxed">
          {question}
        </p>
      </div>
      <div className="ml-12">
        <StarRatingComponent
          name={name}
          register={register}
          watch={watch}
          setValue={setValue}
        />
      </div>
    </div>
  );
};

export default RatingQuestionComponent;
