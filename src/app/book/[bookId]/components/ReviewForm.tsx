"use client";
import React, { useState, useRef } from "react";
import StarRating from "./StarRating";
import SubmitButton from "@/components/SubmitButton";
import ToastHandle from "@/components/ToastHandler";
import { useParams } from "next/navigation";
import { createReviewAction } from "@/actions/review/createReview.action";
import { getAllReviewsAction } from "@/actions/review/getAllReview.action";

const ReviewForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const { bookId } = useParams();

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

      setIsLoading(true);

      const response: any = await createReviewAction(formData);

      setIsLoading(false);

      if (response?.status) {
        ToastHandle("success", response.message);
        titleRef.current.value = "";
        descRef.current.value = "";
        setRating(0);
        await getAllReviewsAction(bookId.toString());
      } else {
        if (response?.message) {
          ToastHandle("error", response.message);
        }
      }
    }
  };

  return (
    <section className="my-8 border p-10 rounded-lg">
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
          <SubmitButton text={"Add Review"} isLoading={isLoading} />
        </div>
      </form>
    </section>
  );
};

export default ReviewForm;
