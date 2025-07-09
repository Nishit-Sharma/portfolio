"use client";

import { useState } from "react";
import { SmoothAppear } from "../utils/animation-utils";
import {
  manropeRegular,
  manropeSemiBold,
  scholarRegular,
} from "../utils/page-utils";

export default function ContactClient() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const payload = { ...data, subject: "Contact Form Message" };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("Thanks for your message! I'll get back to you soon.");
        e.target.reset();
      } else {
        const data = await res.json();
        setStatus(data.error || "Oops! There was a problem.");
      }
    } catch (err) {
      setStatus("Oops! There was a problem.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SmoothAppear direction="up">
      <div
        className={`mx-auto max-w-2xl px-4 py-24 text-white-500 ${manropeRegular.className}`}
      >
        <header className="mb-18 text-center">
          <h1 className={`text-6xl font-bold ${scholarRegular.className}`}>
            Get In Touch
          </h1>
          <p className="text-xl mt-2 text-white-700">
            Have a question or want to work together? Drop me a message.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-black-600 p-8 rounded-2xl shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-black-500 rounded-lg py-3 px-4 border border-white-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-black-500 rounded-lg py-3 px-4 border border-white-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full bg-black-500 rounded-lg py-3 px-4 border border-white-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 text-lg font-bold text-black-500 bg-white-500 rounded-lg hover:bg-white-600 transition-colors ${manropeSemiBold.className}`}
            >
              Send Message
            </button>
          </div>
        </form>
        {status && <p className="text-center mt-6 text-lg">{status}</p>}
      </div>
    </SmoothAppear>
  );
} 