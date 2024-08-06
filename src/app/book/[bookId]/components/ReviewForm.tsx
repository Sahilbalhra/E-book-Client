"use client";
import React, { useRef, useState } from "react";
import StarRating from "./StarRating";

const ReviewForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const [rating, setRating] = useState(0);
  const onSubmit = () => {};
  return (
    <section className="my-8 border p-10 rounded-lg">
      <form
        className="space-y-4 md:space-y-6"
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
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
          <button
            type="submit"
            className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add Review
          </button>
        </div>
      </form>
    </section>
  );
};

export default ReviewForm;
