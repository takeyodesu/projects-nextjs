import Image from "next/image";
import { asset } from "@/asset";

type FloatingIconProps = {
  icon: string;
  size: number;
  rotate: number;
  className?: string;
  animationDelay?: string;
};

export default function FloatingIcon({
  icon,
  size,
  rotate,
  className = "",
  animationDelay = "0s",
}: FloatingIconProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute select-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Image
        src={asset(icon)}
        alt=""
        width={size}
        height={size}
        className="animate-float"
        style={{ animationDelay }}
      />
    </div>
  );
}
