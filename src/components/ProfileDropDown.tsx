"use client";
import React, { useState, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutSide";
import { signOut } from "next-auth/react";

const ProfileDropDown = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpenDropDown(false));
  return (
    <div className="relative" ref={ref}>
      <div
        className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full shadow-xl cursor-pointer hover:bg-gray-200"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        onClick={() => {
          setOpenDropDown(true);
        }}
      >
        <svg
          className="absolute w-12 h-12 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        id="userDropdown"
        className={`z-10 absolute ${
          openDropDown ? "block" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 top-12 end-0 overflow-hidden`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 ">
          <p className=" text-sm font-semibold text-center">Welcome ! 👋</p>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <div
          className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          onClick={() => signOut()}
        >
          <p>Sign Out </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
