export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} HonkeyBot. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="/test" className="hover:text-slate-900">Status</a>
        </div>
      </div>
    </footer>
  )
}
