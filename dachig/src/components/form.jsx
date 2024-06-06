"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FaCheck } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
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
          setSent(true);
          setName("");
          setEmail("");
          setMessage("");
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => setLoading(false));
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
          className="bg-transparent border-2 border-purple-300 dark:border-purple-500 p-2 rounded-lg"
          type="text"
          name="from_name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          className="bg-transparent border-2 border-purple-300 dark:border-purple-500 p-2 rounded-lg"
          type="email"
          name="from_email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {!email.includes("@") && email.length > 0 && (
          <p className="text-xs text-red-500 dark:text-red-500">
            Must be a valid e-mail address
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label>Message</label>
        <textarea
          className="bg-transparent border-2 border-purple-300 dark:border-purple-500 p-2 rounded-lg"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        {message.length > 0 && message.length < 50 && (
          <p className="text-xs text-red-500">
            Message must be longer than 50 characters
          </p>
        )}
      </div>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        type="submit" // Ensure button type is "submit" for form submission
        className="bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 text-black dark:text-white flex items-center"
      >
        {loading ? (
          <ClipLoader
            className="border-white"
            color="#000000"
            loading={loading}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : sent ? (
          <FaCheck />
        ) : (
          "Send"
        )}
      </HoverBorderGradient>
    </form>
  );
};
