"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignInPage = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Sign In Successful!");
      router.push("/");
    }
  };

  const handleGoogleSignUp = async() => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
      console.log(data);
    }

  return (
    <Form
      onSubmit={handleSubmit}
      className="flex w-10/12 max-w-lg mx-auto m-28 border p-4 rounded-md shadow-md bg-slate-50 flex-col gap-4"
    >
      <h1 className="text-xl font-semibold">Sign In</h1>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter Your Email Here" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>
      <div className="flex items-center justify-between flex-col md:flex-row gap-2">
        <Button type="submit">
          <Check />
          Sign In
        </Button>
        <p>
          Do not have an account?{" "}
          <Link href={"/signup"} className="underline text-blue-500 font-medium">
            Sign Up here
          </Link>
        </p>
      </div>
      <h1 className="text-lg font-medium border-b text-center pb-2.5">OR</h1>
      <Button
        onClick={handleGoogleSignUp}
        className="w-full"
        variant="tertiary"
      >
        <FcGoogle />
        Sign In with Google
      </Button>
    </Form>
  );
};

export default SignInPage;
