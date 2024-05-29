"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <nav className="flex justify-center items-center py-3 text-base lg:text-2xl">
      <div className="flex gap-3  py-2 px-8 rounded-xl bg-white/20 isolate shadow-lg ring-1 ring-black/5">
        {navItems.map((navItem, index) => (
          <Link
            key={index}
            className={
              path == navItem.path
                ? "font-bold px-2 rounded-xl bg-white/25 isolate shadow-xl ring-1 ring-black/5"
                : "hover:font-semibold px-2 rounded-xl"
            }
            href={navItem.path}
          >
            {navItem.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
