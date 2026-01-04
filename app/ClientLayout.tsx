"use client";

import { useEffect, useState } from "react";
import FullScreenLoader from "@/components/FullScreenLoader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 演出用ローディング時間
    const timer = setTimeout(() => {
      setVisible(false); // フェード開始
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) {
      // フェード完了後に完全に消す
      const timer = setTimeout(() => {
        setLoading(false);
      }, 700); // opacity duration と合わせる

      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <>
      {loading && (
        <FullScreenLoader
          className={`transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      {!loading && children}
    </>
  );
}
