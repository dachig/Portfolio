"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_PUBLIC_KEY);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      className="flex w-full flex-col gap-4"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col">
        <label>Name</label>
        <input
          className="bg-transparent border-2 border-indigo-300 dark:border-indigo-500 p-2 rounded-lg"
          type="text"
          name="from_name"
        />
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          className="bg-transparent border-2 border-indigo-300 dark:border-indigo-500 p-2 rounded-lg"
          type="email"
          name="from_email"
        />
      </div>
      <div className="flex flex-col">
        <label>Message</label>
        <textarea
          className="bg-transparent border-2 border-indigo-300 dark:border-indigo-500 p-2 rounded-lg"
          name="message"
        />
      </div>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 text-black dark:text-white flex items-center"
      >
        <input
          className="hover:cursor-pointer px-4"
          type="submit"
          value="Send"
        />
      </HoverBorderGradient>
    </form>
  );
};
