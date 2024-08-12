import AxiosApiResponse from "./AxiosApiResponse.type";
import Review from "./Review.type";

export interface ReviewData {
  reviews: Review[];
  ratings: { rating: number; count: number }[];
  totalRatings: number;
  averageRating: number;
}

interface ReviewsApiResponse extends AxiosApiResponse {
  data: {
    data: ReviewData;
    message: string;
    status: number;
  };
}
export default ReviewsApiResponse;
