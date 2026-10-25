"use client";

import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

const NavLinksContent = () => {
  const { data: session } = authClient.useSession();
    const pathname = usePathname();
    return (
      <ul className="flex gap-4 text-(--color-ink) font-semibold">
        <li>
          <Link
            href="/"
            className={`${pathname === "/" ? "text-(--color-glaze) border-b-2 border-(--color-glaze)" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/all-tiles"
            className={`${pathname === "/all-tiles" ? "text-(--color-glaze) border-b-2 border-(--color-glaze)" : ""}`}
          >
            All Tiles
          </Link>
        </li>
        {session && (
          <li>
            <Link
              href="/profile"
              className={`${pathname === "/profile" ? "text-(--color-glaze) border-b-2 border-(--color-glaze)" : ""}`}
            >
              Profile
            </Link>
          </li>
        )}
      </ul>
    );
};


export default function NavLinks () {
  return (
    <Suspense
      fallback={
        <div className="flex items-center gap-4">
          <Spinner />
        </div>
      }
    >
      <NavLinksContent />
    </Suspense>
  );
};