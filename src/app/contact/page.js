"use client";

import { useState } from "react";
import {
  manropeRegular,
  manropeSemiBold,
  scholarRegular,
} from "../utils/page-utils";

// export const metadata = {
//     title: "Contact",
//     description: "Get in touch with Nishit Sharma for any inquiries or collaborations.",
// };

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // This is where you would integrate with a backend service.
    // For example, using fetch with Formspree:
    /*
        const response = await fetch("https://formspree.io/f/your_form_id", {
            method: 'POST',
            body: new FormData(e.target),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus("Thanks for your message!");
            e.target.reset();
        } else {
            setStatus("Oops! There was a problem.");
        }
        */

    // For now, we'll just simulate a successful submission.
    setTimeout(() => {
      setStatus("Thanks for your message! I'll get back to you soon.");
      e.target.reset();
    }, 1000);
  };

  return (
    <div
      className={`mx-auto max-w-2xl px-4 py-12 text-white-500 ${manropeRegular.className}`}
    >
      <header className="mb-12 text-center">
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
            className={`px-8 py-3 text-lg font-bold text-black-500 bg-white-500 rounded-lg hover:bg-white-600 transition-colors ${manropeSemiBold.className}`}
          >
            Send Message
          </button>
        </div>
      </form>
      {status && <p className="text-center mt-6 text-lg">{status}</p>}
    </div>
  );
}
