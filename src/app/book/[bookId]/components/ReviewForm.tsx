"use client";
import React, { useState, useRef } from "react";
import StarRating from "./StarRating";
import { createReviewAction } from "@/actions/review/createReview.action";
// import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import ToastHandle from "@/components/ToastHandler";
import { useParams } from "next/navigation";

const ReviewForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const [rating, setRating] = useState(0);
  const { bookId } = useParams();
  // console.log("query", searchParams);
  // const [state, reviewFormAction] = useFormState(createReviewAction, {
  //   data: null,
  //   status: false,
  //   message: "",
  // });
  // const router = useRouter();

  // useEffect(() => {
  //   if (state.status) {
  //     ToastHandle("success", state.message);
  //   } else {
  //     ToastHandle("error", state.message);
  //   }
  // }, [state.data, state.message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const title = titleRef.current?.value;
    const description = descRef.current?.value;

    if (title && description && bookId && rating) {
      let formData: any = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("rating", rating.toString());
      formData.append("bookId", bookId.toString());
      const response: any = await createReviewAction(formData);
      console.log("response", response);
      if (response?.status) {
        ToastHandle("success", response.message);
        titleRef.current.value = "";
        descRef.current.value = "";
        setRating(0);
      } else {
        ToastHandle("error", response.message);
      }
    }

    // const formData = {
    //   title,
    //   description,
    //   rating,
    //   param, // Pass URL parameter to the server action
    // };

    // const response = await createReviewAction(formData);

    // if (response.status) {
    //   ToastHandle("success", response.message);
    // } else {
    //   ToastHandle("error", response.message);
    // }
  };

  return (
    <section className="my-8 border p-10 rounded-lg">
      <form
        className="space-y-4 md:space-y-6"
        // action={reviewFormAction}
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 outline-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Must buy!"
            ref={titleRef}
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Write your thoughts here..."
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg outline-primary-600 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            ref={descRef}
            required
          />
        </div>
        {/* <div>
          <label
            htmlFor="range"
            className="hidden mb-2 text-sm font-medium text-gray-900"
          >
            Range
          </label>
          <input
            type="range"
            id="range"
            name="range"
            min="0"
            max="11"
            className="hidden"
            defaultValue={rating}
          />
        </div> */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Rating
          </label>
          <StarRating
            value={rating}
            readOnly={false}
            onChange={(rating: number) => {
              setRating(rating);
            }}
          />
        </div>
        <div className="flex justify-end">
          <SubmitButton text={"Add Review"} />
          {/* <button
            type="submit"
            className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add Review
          </button> */}
        </div>
      </form>
    </section>
  );
};

export default ReviewForm;
