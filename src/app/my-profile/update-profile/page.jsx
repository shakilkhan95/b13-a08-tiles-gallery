"use client";
import { Button, Form, Input, Label, TextField } from "@heroui/react";

const UpdateProfilePage = () => {
  return (
    <div className="p-28">
      <Form
        className="flex flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm"
      >
        <h1 className="text-2xl font-semibold text-(--color-ink)/80">Update Profile</h1>
        <TextField isRequired name="Name" type="text">
          <Label>Name</Label>
          <Input className="bg-field" placeholder="Type your name" />
        </TextField>
        <TextField isRequired name="image" type="text">
          <Label>Image Url</Label>
          <Input className="bg-field" placeholder="Type the image URL" />
        </TextField>
        <Button className="w-full" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateProfilePage;
