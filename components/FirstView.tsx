"use client";

import Image from "next/image";
import { asset } from "@/asset";
import TypewriterText from "@/components/TypewriterText";
import { useEffect, useState } from "react";

export default function FirstView() {
  const [mounted, setMounted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {/* ウィンドウヘッダー */}
      <div
        className={`
    relative
    flex justify-between p-2
    bg-zinc-200 border-2 border-b-0 border-zinc-800
    transition-all duration-700
    ${mounted ? "opacity-100" : "opacity-0"}
  `}
      >
        <Image src={asset("/favicon.png")} alt="" width={24} height={24} />

        {/* 右側アイコン */}
        <div className="flex gap-2">
          {["Music-gray.svg", "Github-gray.svg", "Figma-gray.svg"].map(
            (icon) => (
              <button
                key={icon}
                onClick={() => {
                  setShowMessage(true);
                  setTimeout(() => setShowMessage(false), 2000);
                }}
                className="
        flex justify-center p-1 w-fit
        bg-gray-50 shadow-[2px_2px_0_#666666]
        active:translate-y-[2px]
      "
              >
                <Image src={asset(`/${icon}`)} alt="" width={16} height={16} />
              </button>
            )
          )}
        </div>

        {/* メッセージ */}
        {showMessage && (
          <p
            className="
        absolute right-0 -top-12
        text-xs font-bold
        bg-zinc-50 p-2
        border-2 border-zinc-800
        shadow-[2px_2px_0_#666666]
        animate-pulse
      "
          >
            すみませんこれはボタンではありません😂
          </p>
        )}
      </div>

      {/* メインウィンドウ */}
      <div
        className={`
          relative w-full h-fit p-8
          bg-gradient-to-b from-[#666] to-[#efefef]
          border-2 border-zinc-800
          shadow-[8px_8px_0_#60ffef]
          transition-all duration-700 ease-out
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* 見出し① */}
        <h1 className="w-fit text-3xl font-bold bg-[#60ffef] p-2">
          <TypewriterText text="こんにちは" cursor />
        </h1>

        {/* 見出し② */}
        <h2 className="w-fit text-3xl font-bold text-white bg-zinc-800 p-2 mt-2">
          <TypewriterText text="TAKEUCHI です" speed={90} />
        </h2>

        {/* サブテキスト */}
        <p className="mt-6 text-xl font-bold text-zinc-800">
          <TypewriterText
            text="Web / UI Designer & Frontend Developer"
            speed={30}
          />
        </p>

        {/* View Works */}
        <button
          onClick={() => {
            const worksSection = document.getElementById("works");
            worksSection?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className={`
            mt-12 w-fit rounded-full bg-zinc-50 border-2 border-zinc-800
            px-6 py-3 text-sm font-bold
            transition-all duration-700 delay-700
            hover:bg-black hover:text-white
            active:translate-y-[2px]
            ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }
          `}
        >
          ↓ View Works
        </button>

        {/* kuma */}
        <div
          className={`
            absolute -bottom-20 -right-8
            transition-all duration-700 delay-1000
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <Image
            src={asset("/kuma.png")}
            alt="うちの猫です"
            width={120}
            height={160}
          />
          <p className="text-xs font-bold bg-zinc-50 p-2 border-2 border-zinc-800 mt-1">
            ※この画像はうちの熊です
          </p>
        </div>
      </div>
    </div>
  );
}
