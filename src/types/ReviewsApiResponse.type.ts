import AxiosApiResponse from "./AxiosApiResponse.type";
import Review from "./Review.type";

interface ReviewsApiResponse extends AxiosApiResponse {
  data: {
    data: Review[];
    message: string;
    status: number;
  };
}

export default ReviewsApiResponse;
