import AxiosApiResponse from "./AxiosApiResponse.type";
import Review from "./Review.type";
import User from "./User.type";

interface CreateReviewApiResponse extends AxiosApiResponse {
  data: {
    data: Review;
    message: string;
    status: number;
  };
}

export default CreateReviewApiResponse;
