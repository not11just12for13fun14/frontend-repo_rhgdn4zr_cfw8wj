import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 z-30 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-md">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">HonkeyBot</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="/test" className="hover:text-slate-900">Status</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700"><Menu className="w-5 h-5" /></button>
      </div>
    </header>
  )
}
