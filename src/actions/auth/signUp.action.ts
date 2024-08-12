"use server";
import axios from "axios";
import SignUpApiResponse from "@/types/SignUpApiResponse.type";
// import InitialFormState from "@/types/InitialFormState.type";

export async function signUpAction(prevState: any, formData: FormData) {
  try {
    const data: SignUpApiResponse = await axios.post(
      process.env.BACKEND_URL + "/users/register",
      {
        email: formData.get("email"),
        name: formData.get("name"),
        password: formData.get("password"),
      }
    );
    return {
      data: data.data,
      status: data.status,
      message: data.message,
    };
  } catch (error: any) {
    return {
      ...prevState,
      message: error?.message || "",
    };
  }
}

// export async function signUpAction(formData: {
//   email: string;
//   name: string;
//   password: string;
// }) {
//   return await axios.post(process.env.BACKEND_URL + "/users/register", {
//     email: formData.email,
//     name: formData.name,
//     password: formData.password,
//   });
// }
