import Author from "./Author.type";

type Book = {
  _id: string;
  title: string;
  description: string;
  cover_image: string;
  file: string;
  author: Author;
};

export default Book;
