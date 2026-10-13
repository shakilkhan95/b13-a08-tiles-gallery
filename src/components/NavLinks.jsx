"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const pathname = usePathname();
    return (
        <ul>
            <li><Link href="/" className= {`font-semibold `}>Home</Link></li>
            <li><Link href="/all-tiles">All Tiles</Link></li>
        </ul>
    );
};

export default NavLinks;