"use client";

import { useEffect, useState } from "react";

type Props = {
  className?: string;
  duration?: number;
};

export default function FullScreenLoader({
  className = "",
  duration = 2000,
}: Props) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      setPercent(Math.min(100, Math.round((elapsed / duration) * 100)));
      if (elapsed < duration) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col overflow-hidden bg-[#1f1f1f] ${className}`}
    >
      <div className="flex flex-1 flex-col justify-center min-[800px]:justify-start">
        <p className="whitespace-nowrap px-6 font-[family-name:var(--font-line-seed-jp)] font-bold leading-none text-[#c1ff1e] text-[14vw] min-[800px]:mt-24 min-[800px]:px-12 min-[800px]:text-[12vw]">
          LOADING
        </p>
      </div>

      <div className="relative h-20 w-full min-[800px]:h-32">
        <div
          className="absolute inset-y-0 left-0 bg-[#c1ff1e]"
          style={{ width: `${percent}%` }}
        />
        <p className="relative flex h-full items-center px-6 font-[family-name:var(--font-line-seed-jp)] font-bold text-[#1f1f1f] text-2xl min-[800px]:px-12 min-[800px]:text-4xl">
          {percent}%
        </p>
      </div>
    </div>
  );
}
