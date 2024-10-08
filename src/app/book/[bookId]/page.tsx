import React from "react";
import Image from "next/image";
import Book from "@/types/Book.type";
import SingleBookApiResponse from "@/types/BookApiResponse.type";
import DownloadButton from "@/app/book/[bookId]/components/DownloadButton";
import OverAllRating from "./components/OverAllRating";

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
  let book: Book | null = null;

  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/books/${params.bookId}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error fetching book");
    }
    const apiResponse: SingleBookApiResponse = await response.json();
    book = apiResponse.data;
  } catch (err: any) {
    throw new Error("Error fetching book");
  }

  if (!book) {
    throw new Error("Book not found");
  }

  return (
    <>
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
        <div className="col-span-2 pr-16 text-primary-950">
          <h2 className="font-manrope font-bold text-4xl text-black mb-4 capitalize">
            {book.title}
          </h2>
          <span className="font-semibold capitalize text-black">
            by {book.author.name}
          </span>
          <p className="font-manrope mt-5 text-md">{book.description}</p>
          <DownloadButton fileLink={book.file} />
        </div>
        <div className="flex justify-end">
          <Image
            src={book.cover_image}
            alt={book.title}
            className="rounded-md border"
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <hr />
      <div className="mx-auto  max-w-6xl px-5 py-10">
        <OverAllRating bookId={params.bookId} />
      </div>
    </>
  );
};

export default SingleBookPage;
