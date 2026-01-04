"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
};

export default function TypewriterText({
  text,
  speed = 80,
  className = "",
  cursor = false,
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 初期化
    setDisplayed("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [index, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {cursor && <span className="cursor">|</span>}
    </span>
  );
}
