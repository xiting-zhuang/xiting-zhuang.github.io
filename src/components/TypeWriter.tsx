"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  className?: string;
}

export default function TypeWriter({ words, className = "" }: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="typing-cursor" />
    </span>
  );
}
