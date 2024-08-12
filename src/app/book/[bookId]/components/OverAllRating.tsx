import React from "react";
import UserRatingCard from "./UserRatingCard";
import OverAllStarRating from "./OverAllStarRating";
import SliderRating from "./SliderRating";
import ReviewForm from "./ReviewForm";
import Review from "@/types/Review.type";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { ReviewData } from "@/types/ReviewsApiResponse.type";

interface Rating {
  rating: number;
  count: number;
}

const OverAllRating = async ({ bookId }: { bookId: string }) => {
  const session = await getServerSession(authOptions);
  let reviews: ReviewData | null = null;

  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/review/${bookId}`,
      {
        next: {
          revalidate: 3600,
          tags: ["reviews"],
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error fetching book");
    }
    const apiResponse: any = await response.json();
    reviews = apiResponse?.data;
  } catch (err: any) {
    throw new Error("Error fetching Reviews");
  }

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

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto items-center">
            <div className="box flex flex-col gap-y-4 w-full">
              {Array.isArray(reviews?.ratings)
                ? reviews?.ratings
                    .map((review) => ({
                      rating: review.rating,
                      review: review.count,
                      ratingRatio: review.rating / (reviews?.totalRatings || 1),
                    }))
                    .map((item) => (
                      <SliderRating
                        rating={item.rating}
                        ratingRatio={item.ratingRatio}
                        review={item.review}
                        key={item.rating}
                      />
                    ))
                : null}
            </div>
            {Number(reviews?.totalRatings || 0) > 0 ? (
              <div>
                <OverAllStarRating
                  rating={reviews?.averageRating || 0}
                  totalReview={reviews?.totalRatings || 0}
                />
              </div>
            ) : null}
          </div>
          {Array.isArray(reviews?.reviews) && reviews?.reviews.length > 0
            ? reviews?.reviews.map((review: Review) => (
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
