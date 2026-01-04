import Link from "next/link";
import Image from "next/image";

type WorkCardProps = {
  title: string;
  href: string;
  image: string;
};

export default function WorkCard({ title, href, image }: WorkCardProps) {
  return (
    <Link
      href={href}
      className="block w-full mx-auto transition hover:-translate-y-1 relative"
    >
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src={image}
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
