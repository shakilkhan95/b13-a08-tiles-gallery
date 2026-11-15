# TilesGallery

A single-page tile showcase. Visitors can browse a gallery of tiles, search by title, view details, and (once signed in) see their profile. Authentication is handled with BetterAuth backed by MongoDB.

**Live URL:** _[https://b13-a08-tiles-gallery-nine.vercel.app/](https://b13-a08-tiles-gallery-nine.vercel.app/)_

## Features

- **Home page** — hero banner, scrolling marquee, and a "Featured Tiles" carousel (top 4 tiles)
- **All Tiles page** — live search by title, responsive grid of tile cards
- **Tile details page** *(private)* — large image, description, creator, tags, price, and stock status
- **Authentication** — email/password login & registration, plus Google social sign-in, via BetterAuth
- **My Profile page** *(private)* — view profile info, and update name/photo on a dedicated route
- **Loader** shown while data is fetching, plus a custom **404 not-found** page
- **Route protection** for `/tile/[id]` and `/my-profile` (redirects logged-out users to `/login`)
- Fully responsive layout (mobile, tablet, desktop)

## Tech stack / npm packages used

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/) + [HeroUI](https://heroui.com/)
- [BetterAuth](https://www.better-auth.com/) with the MongoDB adapter
- [mongodb](https://www.npmjs.com/package/mongodb) driver
- [react-toastify](https://www.npmjs.com/package/react-toastify) — success/error toasts
- [swiper](https://www.npmjs.com/package/swiper) — Featured Tiles carousel
- [react-icons](https://www.npmjs.com/package/react-icons) — social, search & UI icons
