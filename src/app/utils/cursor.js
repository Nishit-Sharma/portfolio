"use client";

import { Cursor, useCursorState } from "motion-plus/react";
import { manropeRegular } from "../fonts";
import { useDocument } from "../contexts/DocumentContext";

export default function InteractiveCursor() {
  const { zone } = useCursorState();
  const { activeDocument, setActiveDocument } = useDocument();

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
        backgroundColor: zone === "view-resume" ? "#292929" : "#888888",
        borderRadius: 10,
        mixBlendMode:
          zone === "overlay"
            ? "difference"
            : zone === "view-resume"
              ? "normal"
              : "multiply",
      }}
    >
      {zone === "view-resume" ? (
        <p
          className={`bg-black-600 text-md p-3 m-0 text-white-500 rounded-4xl ${manropeRegular.className}`}
        >
          {activeDocument === "resume" ? "View Summary" : "View Resume"}
        </p>
      ) : null}
    </Cursor>
  );
}
