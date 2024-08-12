import Book from "./Book.type";

type SingleBookApiResponse = {
  data: Book;
  message: string;
  status: number;
};

export default SingleBookApiResponse;
