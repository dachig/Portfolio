"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";
import Image from "next/image";
import GithubAPI from "@/lib/public/github-api-screen.png";
import CryptoHippo from "@/lib/public/crypto-hippo-screen.png";

export function AnimatedPinDemo() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row gap-16 lg:gap-44 items-center justify-center ">
      <Link target="_blank" href="https://crypto-hippo.vercel.app">
        <PinContainer
          title="/crypto-hippo"
          href="https://crypto-hippo.vercel.app"
        >
          <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] lg:w-[32rem] lg:h-[24rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-gray-700 dark:text-slate-100">
              Crypto Hippo
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Browse the latest crypto trends and track your favourite coins
                to stay up-to-date easily.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <Image src={CryptoHippo} alt="crypto-hippo-thumbnail" />
            </div>
          </div>
        </PinContainer>
      </Link>
      <Link target="_blank" href="https://github-api-omega-lime.vercel.app">
        <PinContainer
          title="/github-api"
          href="https://github-api-omega-lime.vercel.app"
        >
          <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] lg:w-[32rem] lg:h-[24rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-gray-700 dark:text-slate-100">
              GithubAPI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Discover public Github repositories simply by entering a
                username below.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <Image src={GithubAPI} alt="github-api-thumbnail" />
            </div>
          </div>
        </PinContainer>
      </Link>
    </div>
  );
}
