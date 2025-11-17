import { Gauge, Sparkles, Repeat2, ArrowLeftRight, Shield, Leaf, Waves, Banknote } from 'lucide-react'

const items = [
  {
    icon: Gauge,
    title: 'Sniping',
    desc: 'Instant launch detection with sub‑block reactions and private orderflow.',
  },
  {
    icon: Repeat2,
    title: 'Copy Trading',
    desc: 'Mirror selected wallets with configurable risk and exposure controls.',
  },
  {
    icon: Sparkles,
    title: 'MEV Engine',
    desc: 'Searcher-grade MEV strategies with bundle protection and priority fees.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Arbitrage',
    desc: 'DEX route scanning across pools with dynamic routing and slippage guards.',
  },
  {
    icon: Shield,
    title: 'Sandwich',
    desc: 'Offensive and defensive sandwiching with real-time toxicity filters.',
  },
  {
    icon: Leaf,
    title: 'Farming',
    desc: 'Auto-compound LP and staking strategies with APR optimization.',
  },
  {
    icon: Waves,
    title: 'Liquidity / Liquidation',
    desc: 'Provide, rebalance, and liquidate positions with Jito-bundled speed.',
  },
  {
    icon: Banknote,
    title: 'Throughput',
    desc: 'Designed to complete thousands of trades per day with deterministic ops.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What HonkeyBot Does</h2>
          <p className="mt-3 text-slate-600">Built with Python and Rust. Integrated with Helium, Jito bundling, QuickNode, and FireDance for end‑to‑end low latency.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-5 bg-white shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-white flex items-center justify-center shadow-md">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
