import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company'),
      message: form.get('message')
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Thanks — we\'ll be in touch shortly!')
        e.currentTarget.reset()
      } else {
        setStatus(data?.detail || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus(err.message || 'Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Get Early Access</h2>
            <p className="mt-3 text-slate-600">Tell us about your goals and we\'ll set you up with a private beta seat.</p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Priority Jito bundling for zero missed blocks</li>
              <li>• Copy trading lists curated by on‑chain signals</li>
              <li>• White‑glove setup for funds, teams, and pros</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required placeholder="Satoshi" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required placeholder="you@domain.com" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input name="company" placeholder="Alpha Capital" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="4" placeholder="What would you like to automate?" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
            </div>

            <button type="submit" disabled={loading} className="mt-5 w-full inline-flex justify-center items-center rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3 shadow-lg shadow-emerald-500/30 transition disabled:opacity-60">
              {loading ? 'Sending…' : 'Request Access'}
            </button>
            {status && <p className="mt-3 text-sm text-emerald-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
