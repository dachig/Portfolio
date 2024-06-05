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
    <nav className="max-w-xl flex justify-between mx-auto">
      <Link href="/">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className={clsx(
            active === "/"
              ? "bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
              : "bg-transparent",
            "text-black dark:text-white flex items-center"
          )}
        >
          Home
        </HoverBorderGradient>
      </Link>
      <Link href="/expertise">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className={clsx(
            active === "/expertise"
              ? "bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
              : "bg-transparent",
            "text-black dark:text-white flex items-center"
          )}
        >
          Expertise
        </HoverBorderGradient>
      </Link>
      <Link href="/experience">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className={clsx(
            active === "/experience"
              ? "bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
              : "bg-transparent",
            "text-black dark:text-white flex items-center"
          )}
        >
          Experience
        </HoverBorderGradient>
      </Link>
      <Link href="/projects">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className={clsx(
            active === "/projects"
              ? "bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
              : "bg-transparent",
            "text-black dark:text-white flex items-center"
          )}
        >
          Projects
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
            "text-black dark:text-white flex items-center"
          )}
        >
          Contact
        </HoverBorderGradient>
      </Link>
    </nav>
  );
}
