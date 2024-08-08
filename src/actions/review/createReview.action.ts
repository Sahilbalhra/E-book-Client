"use server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import CreateReviewApiResponse from "@/types/CreateReviewApiResponse.type";
// import SignUpApiResponse from "@/types/SignUpApiResponse.type";
import axios from "axios";
// import { headers } from "next/headers";

export async function createReviewAction(formData: FormData) {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  console.log("formData", formData);
  console.log(formData, "formData");

  try {
    const data: CreateReviewApiResponse = await axios.post(
      process.env.BACKEND_URL + "/review/" + formData.get("bookId"),

      {
        rating: formData.get("rating"),
        title: formData.get("title"),
        comment: formData.get("description"),
      },
      {
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
      }
    );
    console.log("data", data);
    return {
      data: data.data,
      status: data.status,
      message: data.message,
    };
  } catch (error: any) {
    console.error("error", error);
    return {
      data: null,
      status: false,
      message: error?.message || "",
    };
  }
}
