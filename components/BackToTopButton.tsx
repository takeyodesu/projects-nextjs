"use client";

import { useRouter } from "next/navigation";

export default function BackToTopButton() {
  const router = useRouter();

  const handleClick = () => {
    // 履歴があるなら戻る（スクロール位置も戻りやすい）
    if (window.history.length > 1) {
      router.back();
      return;
    }
    // 直リンク等で戻れないならトップへ
    router.push("/"); // basePathありでもOK（next/link と同じ扱い）
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        fixed bottom-6 right-6
        inline-flex items-center gap-2
        w-fit rounded-full
        px-2 py-1
        text-s font-bold
        text-zinc-900
        bg-zinc-50
        border-2 border-zinc-800
        transition
        hover:translate-x-1 hover:translate-y-1
        hover:shadow-none
      "
    >
      ← Back
    </button>
  );
}
