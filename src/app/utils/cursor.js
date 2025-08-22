"use client";

import { Cursor, useCursorState } from "motion-plus/react";

export default function InteractiveCursor() {
  const { zone } = useCursorState();

  return (
    <Cursor
      magnetic
      className="cursor"
      variants={{
        pointer: {
          backgroundColor: "#ddd",
        },
        text: {
          backgroundColor: "#000000",
        },
      }}
      style={{
        backgroundColor: "#888888",
        borderRadius: 10,
        mixBlendMode: zone === "overlay" ? "difference" : "multiply",
      }}
    />
  );
}
