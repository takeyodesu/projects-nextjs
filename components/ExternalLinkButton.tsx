type ExternalLinkButtonProps = {
  href: string;
  label: string;
};

export default function ExternalLinkButton({
  href,
  label,
}: ExternalLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
          inline-flex items-center justify-center
          gap-2
          w-fit rounded-full
          px-2 py-1
          text-xs font-bold
          text-zinc-900
          bg-zinc-50
          border-2 border-zinc-800
          transition
          hover:translate-x-1 hover:translate-y-1
          hover:shadow-none
        "
    >
      {label}
      <span aria-hidden>↗</span>
    </a>
  );
}
