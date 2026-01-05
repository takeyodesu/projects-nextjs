type Props = {
  className?: string;
};

export default function FullScreenLoader({ className = "" }: Props) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-zinc-900 ${className}`}
    >
      {/* Pixel bouncer */}
      <div className="pixel-bouncer" aria-label="Loading" role="status">
        <span className="pixel-cube cube-1" />
        <span className="pixel-cube cube-2" />
        <span className="pixel-cube cube-3" />
        <span className="pixel-cube cube-4" />
      </div>

      {/* Text */}
      <p className="font-mono text-white text-xl tracking-widest">
        Loading<span className="loading-dots"></span>
      </p>
    </div>
  );
}
