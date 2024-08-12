"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/SubmitButton";
import ToastHandle from "@/components/ToastHandler";

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    setIsLoading(true);
    const signInResult = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    setIsLoading(false);
    if (signInResult?.url) {
      ToastHandle("success", "Signed in successfully");
      router.replace("/");
    } else {
      ToastHandle("error", "Something Went Wrong!");
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
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
                  ref={emailRef}
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
                  ref={passwordRef}
                  required
                />
              </div>
              <div className="flex items-center justify-end">
                <Link
                  href="/"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <SubmitButton text="Sign In" isLoading={isLoading} />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Don’t have an account yet?{" "}
                <Link
                  href="/sign-up"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
