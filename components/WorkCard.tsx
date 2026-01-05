import Link from "next/link";
import Image from "next/image";
import { asset } from "@/asset";

type WorkCardProps = {
  title: string;
  href: string;
  image: string;
};

export default function WorkCard({ title, href, image }: WorkCardProps) {
  return (
    <Link
      href={href}
      className="
      block w-full
      max-w-[480px]
      mx-auto
      md:mx-0
      h-80
      transition
      hover:-translate-y-1
      relative
    "
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={asset(image)}
          alt={title}
          fill
          className="object-cover border-2 border-zinc-800"
          unoptimized
        />
      </div>
      <h3 className="absolute -bottom-4 left0 text-zinc-200 text-xl font-bold bg-zinc-800 p-2">
        {title}
      </h3>
    </Link>
  );
}
