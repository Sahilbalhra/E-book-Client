import React from "react";
import UserRatingCard from "./UserRatingCard";
import OverAllStarRating from "./OverAllStarRating";
import SliderRating from "./SliderRating";
import ReviewForm from "./ReviewForm";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Review from "@/types/Review.type";

const OverAllRating = async ({ reviews }: { reviews: Review[] }) => {
  const session = await getServerSession(authOptions);
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <div className="w-full">
          <h2 className="font-manrope font-bold text-4xl text-black mb-8 text-center">
            Ratings & Reviews
          </h2>
          {session?.user && (
            <>
              <ReviewForm />
            </>
          )}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
            <div className="box flex flex-col gap-y-4 w-full ">
              {[
                {
                  rating: 5,
                  ratingRatio: 30,
                  review: 100,
                },
                {
                  rating: 4,
                  ratingRatio: 30,
                  review: 100,
                },
                {
                  rating: 3,
                  ratingRatio: 30,
                  review: 100,
                },
                {
                  rating: 2,
                  ratingRatio: 30,
                  review: 100,
                },
                {
                  rating: 1,
                  ratingRatio: 30,
                  review: 100,
                },
                {
                  rating: 0,
                  ratingRatio: 30,
                  review: 100,
                },
              ].map((item) => (
                <SliderRating
                  rating={item.rating}
                  ratingRatio={item.ratingRatio}
                  review={item.review}
                  key={item.rating}
                />
              ))}
            </div>
            <div>
              <OverAllStarRating rating={4.3} totalReview={46} />
            </div>
          </div>
          {reviews.length > 0
            ? reviews.map((review: Review) => (
                <UserRatingCard
                  key={review._id}
                  date={review.createdAt}
                  rating={Number(review.rating || "0")}
                  title={review.title}
                  username={review.user_id.name}
                  desc={review.comment}
                />
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default OverAllRating;
