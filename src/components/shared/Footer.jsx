import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="mt-16 border-t border-(--color-grout)/40 bg-(--color-ink) text-(--color-plaster)">
        <div className="max-w-6xl mx-auto px-5 py-12 flex flex-col md:flex-row gap-6 md:justify-between">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-(--color-porcelain)"
            >
              TilesGallery
            </Link>
            <p className="mt-2 text-sm text-(--color-plaster)/70">
              A curated showcase of tile designs for <br /> every room and
              surface.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-(--color-plaster)/60 text-center">
              Follow us
            </p>
            <div className="mt-3 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-plaster)/30 hover:bg-(--color-glaze)"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-plaster)/30 hover:bg-(--color-glaze)"
              >
                <FaInstagram />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-plaster)/30 hover:bg-(--color-glaze)"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-(--color-plaster)/60">
              Contact us
            </p>
            <p className="mt-3 text-sm text-(--color-plaster)/70">
              123 Kiln Street, Dhaka, Bangladesh
            </p>
            <p className="text-sm text-(--color-plaster)/70">
              info@tilesgallery.com
            </p>
          </div>
        </div>

        <div className="border-t border-(--color-plaster)/10 px-5 py-4 text-center text-xs text-(--color-plaster)/50">
          © 2026 TilesGallery. Built for a front-end
          learning assignment.
        </div>
      </footer>
    );
};

export default Footer;