export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#03050a]">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur-xl">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
        Loading portfolio experience...
      </div>
    </div>
  )
}
