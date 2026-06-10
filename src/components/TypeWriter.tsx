"use client";

import { useState, useEffect } from "react";
import useReducedMotion from "@/lib/useReducedMotion";

interface TypeWriterProps {
  words: string[];
  className?: string;
}

export default function TypeWriter({ words, className = "" }: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const word = words[currentWordIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === word) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(
        isDeleting ? word.substring(0, currentText.length - 1) : word.substring(0, currentText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, reduced]);

  if (reduced) {
    return <span className={className}>{words.join(" · ")}</span>;
  }

  return (
    <span className={className}>
      {currentText}
      <span className="typing-cursor" />
    </span>
  );
}
