import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/70 bg-white/70 px-3 py-1 text-xs text-emerald-700 shadow-sm backdrop-blur">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live on Solana • 0.05ms latency • Powered by Grok
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            AI‑Driven, Fully Automated Solana Memecoin Trading
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Meet HonkeyBot — your 24/7 on‑chain execution engine. Snipe launches, mirror whales, exploit MEV, arbitrage DEX routes, sandwich with protection, farm yields, and automate liquidity/liquidations with sub‑millisecond precision.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3 shadow-lg shadow-emerald-500/30 transition">
              Get Early Access
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 py-3">
              Explore Features
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="px-2.5 py-1 rounded-full bg-slate-100">Helium</span>
            <span className="px-2.5 py-1 rounded-full bg-slate-100">Jito bundling</span>
            <span className="px-2.5 py-1 rounded-full bg-slate-100">QuickNode</span>
            <span className="px-2.5 py-1 rounded-full bg-slate-100">FireDance</span>
            <span className="px-2.5 py-1 rounded-full bg-slate-100">Python + Rust</span>
          </div>
        </div>
      </div>
    </section>
  )
}
