import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import AuthCTA from "./AuthCTA";

const Navbar = () => {
  return (
    <header className="w-full border-b border-(--color-grout)/40 bg-(--color-porcelain) fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo  */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-(--color-ink)"
        >
          Tiles<span className="text(--color-glaze)">Gallery</span>
        </Link>

        {/* Navigation Links */}
        <NavLinks />

        {/* Auth CTA */}
        <AuthCTA />
      </div>
    </header>
  );
};

export default Navbar;
