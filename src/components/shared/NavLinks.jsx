"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
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

export default NavLinks;