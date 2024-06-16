export type Book = {
  _id: string;
  title: string;
  description: string;
  cover_image: string;
  file: string;
  author: Author;
};

export type Author = {
  name: string;
  _id: string;
};

export type BooksApiResponse = {
  data: Book[];
  message: string;
  status: number;
};
