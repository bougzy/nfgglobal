export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
        <p className="text-sm text-white/40">Loading...</p>
      </div>
    </div>
  );
}
