"use client";

import { Spinner } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

const NavLinksContent = () => {
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