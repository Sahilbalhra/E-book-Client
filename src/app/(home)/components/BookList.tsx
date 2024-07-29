import React from "react";
import BookCard from "@/app/(home)/components/BookCard";
import { Book, BooksApiResponse } from "@/types";

type Props = {
  books: BooksApiResponse;
};

const BookList = ({ books }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
      {books.data.map((book: Book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
