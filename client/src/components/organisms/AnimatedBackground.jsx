export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.18),_transparent_30%),linear-gradient(135deg,_#05070b_0%,_#0b1020_55%,_#03050b_100%)]" />
      <div className="aurora absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="aurora absolute bottom-[-5%] right-[-5%] h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[140px]" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 0.8px, transparent 0.8px)', backgroundSize: '18px 18px' }} />
    </div>
  )
}
