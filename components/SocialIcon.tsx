import Image from "next/image";
import { asset } from "@/asset";

type SocialIconProps = {
  href: string;
  image: string;
  alt: string;
};

export default function SocialIcon({ href, image, alt }: SocialIconProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center
          w-8 h-8
          rounded-full
          bg-zinc-800
          p-2px]
          hover:bg-zinc-700
          transition
        "
      >
        <Image src={asset(image)} width={16} height={16} alt={alt} />
      </a>
    </li>
  );
}
