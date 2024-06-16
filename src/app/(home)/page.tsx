import { Suspense } from "react";
import Loading from "@/components/Loading";
import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<Loading />}>
        <BookList />
      </Suspense>
    </>
  );
}

