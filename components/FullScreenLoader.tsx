type Props = {
  className?: string;
};

export default function FullScreenLoader({ className = "" }: Props) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-zinc-900 ${className}`}
    >
      <p className="build-text font-bold  text-white text-xl tracking-widest">
        BUILDING
      </p>

      <div className="loading-bar">
        <span />
      </div>
    </div>
  );
}
