import AxiosApiResponse from "./AxiosApiResponse.type";
import User from "./User.type";

interface SignUpApiResponse extends AxiosApiResponse {
  data: {
    data: User;
    message: string;
    status: number;
  };
}

export default SignUpApiResponse;
