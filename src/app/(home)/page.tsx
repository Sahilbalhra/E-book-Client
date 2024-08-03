import { Suspense } from "react";
import Loading from "@/components/Loading";
import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";
import { BooksApiResponse } from "@/types";

const fetchBooks = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/books`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("An error occurred while fetching the books");
  }

  const books: BooksApiResponse = await response.json();
  return books;
};

const Home = async () => {
  const books = await fetchBooks();
  return (
    <>
      <Banner />
      <Suspense fallback={<Loading />}>
        <BookList books={books} />
      </Suspense>
    </>
  );
};

export default Home;

