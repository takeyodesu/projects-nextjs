import Link from "next/link";

export default function BackToTopButton() {
  return (
    <div className="mt-24">
      <Link
        href="/#works"
        className="
        fixed bottom-6 right-6
          inline-flex items-center gap-2
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
      >
        ← Back to Top
      </Link>
    </div>
  );
}
