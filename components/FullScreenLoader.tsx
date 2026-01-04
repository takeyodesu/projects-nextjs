type Props = {
  className?: string;
};
export default function FullScreenLoader({ className }: Props) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 ${className}`}
    >
      <p className="font-mono text-white text-xl tracking-widest">
        Loading<span className="loading-dots"></span>
      </p>
    </div>
  );
}
