"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import CryptoHippo from "@/lib/public/crypto-hippo-screen.png";
import GithubAPI from "@/lib/public/github-api-screen.png";
import MeteorBlog from "@/lib/public/meteor-blog-screen.png";
import ComingSoon from "@/lib/public/coming-soon.jpg";
import Link from "next/link";

export function LayoutGridDemo() {
  return (
    <div className="h-full py-4 max-w-5xl mx-auto">
      <h2 className="font-medium text-2xl mb-2">My Recent Projects</h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <Link target="_blank" href={"https://crypto-hippo.vercel.app/"}>
        <p className="font-bold text-4xl underline text-indigo-300">
          Crypto Hippo
        </p>{" "}
      </Link>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Browse the latest crypto trends and track your favourite coins to stay
        up-to-date easily!
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <Link target="_blank" href={"https://meteorblog.vercel.app/"}>
        <p className="font-bold text-4xl underline text-indigo-300">
          Meteor Blog
        </p>{" "}
      </Link>{" "}
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A blog for my internship at Meteor Digital NV 2024 documenting my
        journey.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Coming Soon</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Stay tuned to see what's cooking under the hood.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <Link target="_blank" href={"https://github-api-omega-lime.vercel.app/"}>
        <p className="font-bold text-4xl underline text-indigo-300">
          Github API
        </p>{" "}
      </Link>{" "}
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        An app that connects to the Github API and displays all public
        repositories and its latest commits of a given user.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: CryptoHippo.src,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: MeteorBlog.src,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: ComingSoon.src,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: GithubAPI.src,
  },
];
