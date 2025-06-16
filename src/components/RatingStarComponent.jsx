import { Star } from "lucide-react";
import { useState } from "react";

const StarRatingComponent = ({
  name,
  control,
  register,
  watch,
  setValue,
  totalStars = 5,
}) => {
  const currentRating = watch(name) || 0;
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (rating) => {
    setValue(name, rating);
  };

  return (
    <div className="flex space-x-2">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          className={`h-10 w-10 cursor-pointer transition-all duration-300 transform hover:scale-110 ${
            index < (hoverRating || currentRating)
              ? "text-green-500 fill-green-500 drop-shadow-lg"
              : "text-gray-300 hover:text-green-200"
          }`}
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => setHoverRating(index + 1)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ))}
    </div>
  );
};

export default StarRatingComponent;
