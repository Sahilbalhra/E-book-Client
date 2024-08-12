import Book from "./Book.type";

type BooksApiResponse = {
  data: Book[];
  message: string;
  status: number;
};

export default BooksApiResponse;
