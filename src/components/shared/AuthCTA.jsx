"use client"
import Link from "next/link";
import { authClient } from "@/lib/auth-client"
import { Avatar, Button } from "@heroui/react";

const handleSignOut = async() => {
  await authClient.signOut();
}

const AuthCTA = () => {
  const { data: session } = authClient.useSession();
    return (
      <div>
        {session ? (
          <div className="flex gap-3">
            <Avatar size="sm">
              <Avatar.Image
                alt={session?.user?.name}
                src={session?.user?.image}
              />
              <Avatar.Fallback>{session?.user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <Button size="sm" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        ) : (
          <Link href="/signin">
            <Button size="sm">Sign In</Button>
          </Link>
        )}
      </div>
    );
};

export default AuthCTA;