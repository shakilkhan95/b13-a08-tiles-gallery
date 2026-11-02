'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const MyProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(user)
    return (
      <div className="p-28">
        {session ? (
          <Card className="flex gap-3 p-8 justify-center items-center">
            <Image
              alt={user?.name || "User Avatar"}
              width={100}
              height={100}
              className="h-16 w-16 shrink-0 rounded-xl object-cover select-none sm:h-20 sm:w-20"
              loading="lazy"
              src={user?.image}
            />
            <div className="flex flex-1 flex-col justify-center gap-1">
              <Card.Title className="text-sm">{user?.name}</Card.Title>
              <Card.Description className="text-xs">
                {user?.email}
              </Card.Description>
            </div>

            <Link href={"/my-profile/update-profile"} className="flex justify-center mt-5">
              <Button variant="danger">Update Profile</Button>
            </Link>
          </Card>
        ) : (
          <h1>Profile Not Found</h1>
        )}
      </div>
    );
};

export default MyProfilePage;