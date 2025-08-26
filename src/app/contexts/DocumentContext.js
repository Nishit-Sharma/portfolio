"use client";

import { createContext, useContext, useState, useCallback } from "react";

const DocumentContext = createContext();

export function DocumentProvider({ children }) {
  const [activeDocument, setActiveDocument] = useState("summary");
  const [resumeClick, setResumeClick] = useState(false);

  const handleResumeClick = useCallback(() => {
    if (activeDocument === "resume") {
      setActiveDocument("summary");
      setResumeClick(false);
    } else {
      setActiveDocument("resume");
      setResumeClick(true);
    }
  }, [activeDocument]);

  const value = {
    activeDocument,
    setActiveDocument,
    resumeClick,
    setResumeClick,
    handleResumeClick,
  };

  return (
    <DocumentContext.Provider value={value}>
      {children}
    </DocumentContext.Provider>
  );
}

export function useDocument() {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error("useDocument must be used within a DocumentProvider");
  }
  return context;
}
