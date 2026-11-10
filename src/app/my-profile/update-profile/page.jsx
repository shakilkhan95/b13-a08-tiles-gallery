"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
  const router = useRouter();
  const handleUpdate = async (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const name = e.target.name.value;

    const { error } = await authClient.updateUser({
      name,
      image,
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Profile updated successfully!");
      router.push("/my-profile");
    }
  };

  return (
    <div className="p-28">
      <Form
        onSubmit={handleUpdate}
        className="flex flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm"
      >
        <h1 className="text-2xl font-semibold text-(--color-ink)/80">
          Update Profile
        </h1>
        <TextField isRequired name="name" type="text">
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
