"use client";
import React, { useState } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navigation() {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  return (
    <nav className="max-w-xs flex justify-center md:justify-between mx-auto gap-4 flex-wrap">
      <Link href="/">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className={clsx(
            active === "/"
              ? "bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
              : "bg-transparent",
            "text-gray-700 dark:text-white flex items-center"
          )}
        >
          Home
        </HoverBorderGradient>
      </Link>
      <Link href="/work">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className={clsx(
            active === "/work"
              ? "bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
              : "bg-transparent",
            "text-gray-700 dark:text-white flex items-center"
          )}
        >
          Work
        </HoverBorderGradient>
      </Link>

      <Link href="/contact">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className={clsx(
            active === "/contact"
              ? "bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
              : "bg-transparent",
            "text-gray-700 dark:text-white flex items-center"
          )}
        >
          Contact
        </HoverBorderGradient>
      </Link>
    </nav>
  );
}
