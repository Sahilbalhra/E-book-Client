import Book from "@/types/Book.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex gap-5 border p-5 shadow-md rounded-lg">
      <Image
        src={book.cover_image}
        alt={book.title}
        width={120}
        height={240}
        className="rounded-sm object-cover bg-gray-100"
        // sizes="100vw"
      />
      <div>
        <h4 className="line-clamp-2 text-xl font-bold text-primary-600 text-balance capitalize">
          {book.title}
        </h4>
        <p className="font-bold text-primary-900 mt-1 font-mono text-lg capitalize">
          {book.author.name}
        </p>
        <Link
          href={`/book/${book._id}`}
          className="py-1 px-2 rounded border border-primary-500 mt-4 inline-block text-primary-500 font-medium text-sm
                    hover:border-primary-100 hover:bg-primary-100 transition"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
