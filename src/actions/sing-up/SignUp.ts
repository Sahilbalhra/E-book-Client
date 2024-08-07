"use server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export async function signUpAction(formData: any) {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  console.log("formData", formData);
}
