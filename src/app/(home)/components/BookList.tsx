import React from "react";
import BookCard from "@/app/(home)/components/BookCard";
import Book from "@/types/Book.type";
import BooksApiResponse from "@/types/BooksApiResponse.type";

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
