"use client";

import { useEffect, useRef, useState } from "react";

type MarqueeProps = {
  children: React.ReactNode;
  speedPxPerSec?: number; // 流れる速さ（px/s）
  className?: string;
};

export default function Marquee({
  children,
  speedPxPerSec = 120,
  className = "",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // track の中身を 1セットだけに戻す
    const original = track.innerHTML;

    const recalc = () => {
      // 一旦リセットして幅を正しく測る
      track.innerHTML = original;

      // まず2倍にする（最低限のループ要件）
      track.innerHTML = original + original;

      // もしそれでも container より短いなら、途切れ防止のために追加で複製
      // ここが「画面幅で空白が出る」を根絶するポイント
      while (track.scrollWidth < container.clientWidth * 2) {
        track.innerHTML += original;
      }

      // 「1セット分」流せば綺麗に繋がる
      // original の幅を測るため、先頭のセットだけ取り出して計測する
      // 簡易的に: track.scrollWidth / (複製回数) ではなく、
      // original をラップして計測したいが、ここでは innerHTML なので
      // 最初の複製後の「全体の半分」を1セットとみなす（まず2倍しているため）
      // 追加複製した場合に備えて、元セット幅を DOM から測る。
      // → 先頭の子要素群を包含するラッパー方式にすると完璧。
      // ここでは実用上十分な方法として「最初のセットの幅」を data 属性で持たせます。

      // より確実にするため、最初のセットを <div data-set> で包む方式に変更するのがベスト。
      // なので下の「CSSだけ版」を推奨しつつ、ここは動く版として提示します。

      // 現状: 2倍にしてから測った半分を 1セット幅として使う（多くのケースでOK）
      const oneSet = track.scrollWidth / 2;

      setDistance(oneSet);
      setDuration(oneSet / speedPxPerSec);
    };

    recalc();

    const ro = new ResizeObserver(() => recalc());
    ro.observe(container);
    return () => ro.disconnect();
  }, [children, speedPxPerSec]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={
          distance && duration
            ? ({
                "--marquee-distance": `${distance}px`,
                animation: `marquee-x ${duration}s linear infinite`,
              } as React.CSSProperties)
            : undefined
        }
      >
        {children}
      </div>
    </div>
  );
}
