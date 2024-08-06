import React from "react";
import StarRating from "./StarRating";

interface IUserRatingCardProps {
  username: string;
  date: Date;
  title: string;
  desc: string;
  rating: number;
}

const UserRatingCard: React.FC<IUserRatingCardProps> = ({
  username,
  date,
  title,
  desc,
  rating,
}) => {
  return (
    <div className="pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
      <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
        <div className="flex items-center gap-3">
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
            <span className="font-medium text-gray-600 capitalize">
              {username.charAt(0)}
            </span>
          </div>
          <h6 className="font-semibold text-lg leading-8 text-primary-600 ">
            {username}
          </h6>
        </div>
        <p className="font-normal text-lg leading-8 text-gray-400">
          {new Date(date).toDateString()}
        </p>
      </div>
      <div className="m">
        <StarRating value={rating} readOnly />
        <h5 className="font-manrope font-semibold text-lg leading-9 text-black mb-2">
          {title}
        </h5>
      </div>
      <p className="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">
        {desc}
      </p>
    </div>
  );
};

export default UserRatingCard;
