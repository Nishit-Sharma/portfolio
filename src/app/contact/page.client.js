"use client";

import { useRef, useState, useEffect } from "react";
import { motion, animate, useMotionValue, useTime, useTransform, AnimatePresence } from "motion/react";
import { SmoothAppear } from "../utils/animation-utils";
import {
  manropeRegular,
  manropeSemiBold,
  scholarRegular,
} from "../fonts";

export default function ContactClient() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [badgeState, setBadgeState] = useState("idle");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setBadgeState("processing");
    // setStatus("Sending...");
    
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
        // setStatus("Thanks for your message! I'll get back to you soon.");
        e.target.reset();
        setBadgeState("success");
      } else {
        const data = await res.json();
        // setStatus(data.error || "Oops! There was a problem.");
        setBadgeState("error");
      }
    } catch {
      setStatus("Oops! There was a problem.");
      // setBadgeState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SmoothAppear direction="up">
      <div
        className={`mx-auto max-w-2xl px-4 py-32 text-white-500 ${manropeRegular.className}`}
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
          ref={formRef}
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
            <HoldToConfirmButton
              state={badgeState}
              disabled={isSubmitting || badgeState === "processing"}
              onConfirm={() => {
                if (badgeState !== "idle" || isSubmitting) return;
                formRef.current?.requestSubmit();
              }}
            />
          </div>
        </form>
        {status && <p className="text-center mt-6 text-lg">{status}</p>}
      </div>
    </SmoothAppear>
  );
} 

function HoldToConfirmButton({ state, disabled, onConfirm }) {
  const progress = useMotionValue(0);
  const holdTimerRef = useRef(null);
  const holdDuration = 1500;

  const scale = useTransform(progress, [0, 1], [1, 0.98]);

  useEffect(() => () => clearTimeout(holdTimerRef.current), []);

  const handleDown = () => {
    if (disabled || state !== "idle") return;
    progress.set(0);
    holdTimerRef.current = setTimeout(() => {
      onConfirm?.();
    }, holdDuration);
    animate(progress, 1, { duration: holdDuration / 1000, ease: "easeOut" });
  };

  const cancelHold = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
    animate(progress, 0, { duration: 0.25 });
  };

  return (
    <motion.button
      layout
      transition={{ layout: { type: "spring", stiffness: 600, damping: 40 } }}
      type="button"
      disabled={disabled}
      onPointerDown={handleDown}
      onPointerUp={cancelHold}
      onPointerLeave={cancelHold}
      style={{ scale }}
      className={`relative overflow-hidden px-8 py-3 rounded-full font-bold transition-colors ${
        state === "success"
          ? "bg-white-500 text-black-500"
          : state === "error"
          ? "bg-white-500 text-black-500"
          : "bg-black-500 text-white-500"
      } ${manropeSemiBold.className}`}
      aria-live="polite"
    >
      <motion.div
        style={{ x: useTransform(progress, [0, 1], ["-200%", "0%"]) }}
        className="absolute inset-0 -z-0 bg-white-500"
        aria-hidden
      />
      <span className="relative z-10 inline-flex items-center gap-2 overflow-hidden align-middle leading-none">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={state}
            initial={{ y: -18, opacity: 0, filter: "blur(6px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 18, opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="inline-flex items-center gap-2"
          >
            <BadgeIcon state={state} />
            {STATE_LABELS[state]}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.button>
  );
}

const STATE_LABELS = {
  idle: "Hold to send",
  processing: "Sending",
  success: "Sent",
  error: "Error",
};

function BadgeIcon({ state }) {
  if (state === "processing") return <LoaderIcon />;
  if (state === "success") return <CheckIcon />;
  if (state === "error") return <XIcon />;
  return null;
}

function LoaderIcon() {
  const time = useTime();
  const rotate = useTransform(time, [0, 1000], [0, 360], { clamp: false });
  return (
    <motion.svg aria-label="Loading"
      style={{ rotate }}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Loading</title>
      <motion.path d="M21 12a9 9 0 1 1-6.219-8.56" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ type: "spring", stiffness: 150, damping: 20 }} />
    </motion.svg>
  );
}

function CheckIcon() {
  return (
    <motion.svg aria-label="Success"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Sent</title>
      <motion.polyline points="4 12 9 17 20 6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ type: "spring", stiffness: 150, damping: 20 }} />
    </motion.svg>
  );
}

function XIcon() {
  return (
    <motion.svg aria-label="Error"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Error</title>
      <motion.line x1="6" y1="6" x2="18" y2="18" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ type: "spring", stiffness: 150, damping: 20 }} />
      <motion.line x1="18" y1="6" x2="6" y2="18" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.1 }} />
    </motion.svg>
  );
}