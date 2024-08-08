"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { signUpAction } from "@/actions/auth/signUp.action";
import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import ToastHandle from "@/components/ToastHandler";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [state, signUpFormAction] = useFormState(signUpAction, {
    data: null,
    status: false,
    message: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (state.status) {
      ToastHandle("success", state.message);
      router.push("/sign-in");
    } else {
      ToastHandle("error", state.message);
    }
  }, [state.data, state.message]);

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
              Sign Up
            </h1>
            <form className="space-y-4 md:space-y-6" action={signUpFormAction}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Usermame
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 outline-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Jhon"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 outline-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg outline-primary-600 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <SubmitButton text="Sign up" />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Already have an account ?{" "}
                <Link
                  href="/sign-in"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
