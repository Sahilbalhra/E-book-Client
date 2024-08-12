"use server";
import { revalidateTag } from "next/cache";

export async function getAllReviewsAction(bookId: string) {
  try {
    await fetch(`${process.env.BACKEND_URL}/review/${bookId}`, {
      next: {
        revalidate: 3600,
        tags: ["reviews"],
      },
    });
    revalidateTag("reviews");
  } catch (error: any) {
    console.error("error", error);
    return {
      message: error?.message || "",
    };
  }
}
