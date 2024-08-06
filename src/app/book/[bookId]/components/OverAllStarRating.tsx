import React from "react";
import StarRating from "./StarRating";

interface IOverAllStarRating {
  totalReview: number;
  rating: number;
}

const OverAllStarRating: React.FC<IOverAllStarRating> = ({
  totalReview,
  rating,
}) => {
  return (
    <div className="p-8 bg-primary-50 rounded-lg flex items-center justify-center flex-col">
      <h2 className="font-manrope font-bold text-5xl text-primary-400 mb-6">
        {rating}
      </h2>
      <StarRating value={rating} readOnly maxWidth={300} />
      <p className="font-medium text-xl leading-8 text-gray-900 text-center">
        {totalReview} Ratings
      </p>
    </div>
  );
};

export default OverAllStarRating;
