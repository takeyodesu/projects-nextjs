"use client";

export default function ScrollToTop() {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="
        inline-flex items-center justify-center
          gap-2
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
      aria-label="Scroll to top"
    >
      ↑ Scroll to top
    </button>
  );
}
