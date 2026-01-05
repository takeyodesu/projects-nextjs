"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  delay?: number; // ★追加（ms）
  className?: string;
  cursor?: boolean;
};

export default function TypewriterText({
  text,
  speed = 80,
  delay = 0, // ★デフォルトは遅延なし
  className = "",
  cursor = false,
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(delay === 0);

  // delay 用
  useEffect(() => {
    if (delay === 0) return;

    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  // text が変わったら初期化
  useEffect(() => {
    setDisplayed("");
    setIndex(0);
    setStarted(delay === 0);
  }, [text, delay]);

  // タイピング処理
  useEffect(() => {
    if (!started) return;
    if (index >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [index, text, speed, started]);

  return (
    <span className={className}>
      {displayed}
      {cursor && <span className="cursor">|</span>}
    </span>
  );
}
