'use client'
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

const SignUpPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <Form
      onSubmit={handleSubmit}
      className="flex max-w-2xl mx-auto m-28 border p-4 rounded-md shadow-md bg-slate-50 flex-col gap-4"
    >
      <h1 className="text-xl font-semibold">Sign Up</h1>
      <TextField isRequired name="name" type="text">
        <Label>Name</Label>
        <Input placeholder="Enter Your Name Here" />
        <FieldError />
      </TextField>
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
      <TextField isRequired name="image" type="url">
        <Label>Image URL</Label>
        <Input placeholder="Enter Your Image URL Here" />
        <FieldError />
      </TextField>
      <div className="flex items-center justify-between md:flex-row gap-2">
        <Button type="submit">
          <Check />
          Sign Up
        </Button>
        <p>
          Already have an account?{" "}
          <Link href={"/signin"} className="underline">
            Sign In here
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default SignUpPage;
