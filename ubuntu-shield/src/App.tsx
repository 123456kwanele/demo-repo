import { motion } from 'framer-motion'
import { Shield, Link as LinkIcon, AlertTriangle, Map, Newspaper, Lock } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sa-blue/30 via-sa-black to-black text-white">
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full gradient-flag shadow-inner shadow-white/10" />
            <div className="flex items-center gap-2">
              <Shield className="text-sa-gold w-5 h-5" />
              <span className="font-display text-lg tracking-wide">Ubuntu Shield</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
            <a href="#check" className="hover:text-sa-gold transition-colors">Check Link</a>
            <a href="#report" className="hover:text-sa-gold transition-colors">Report</a>
            <a href="#alerts" className="hover:text-sa-gold transition-colors">Alerts</a>
            <a href="#trends" className="hover:text-sa-gold transition-colors">Trends</a>
            <a href="#news" className="hover:text-sa-gold transition-colors">News</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-4xl md:text-6xl font-semibold leading-tight">
              Secure SA’s Digital Streets
            </motion.h1>
            <p className="mt-4 text-white/80 max-w-prose">Check suspicious links, report scams anonymously, and stay ahead with live community alerts and trends. Built for South Africa, with love and vigilance.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#check" className="px-5 py-3 rounded-lg bg-sa-blue hover:bg-sa-blue/90 shadow-lg shadow-sa-blue/20 inline-flex items-center gap-2">
                <LinkIcon className="size-4" /> Quick Link Check
              </a>
              <a href="#report" className="px-5 py-3 rounded-lg bg-sa-green hover:bg-sa-green/90 shadow-lg shadow-sa-green/20 inline-flex items-center gap-2">
                <AlertTriangle className="size-4" /> Report a Scam
              </a>
            </div>
          </div>
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 14 }} className="relative">
            <div className="aspect-video rounded-2xl bg-[url('https://images.unsplash.com/photo-1542372147193-a7aca54189cd?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center ring-1 ring-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Lock className="w-4 h-4 text-sa-gold" /> Johannesburg CBD Skyline
                </div>
              </div>
            </div>
            <motion.div className="absolute -top-6 -right-6 rounded-xl bg-sa-gold/10 border border-sa-gold/30 text-sa-gold px-4 py-3 backdrop-blur shadow-lg" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
              Trusted. Futuristic. Proudly South African.
            </motion.div>
          </motion.div>
        </section>

        <section id="check" className="py-12">
          <h2 className="font-display text-2xl mb-4 flex items-center gap-2"><LinkIcon className="w-5 h-5 text-sa-gold" /> Suspicious Link Checker</h2>
          <div className="grid md:grid-cols-[1fr_auto] gap-3">
            <input placeholder="Paste link or phone number" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-sa-gold/50 placeholder:text-white/50" />
            <button className="px-5 py-3 rounded-lg bg-sa-gold text-black hover:bg-yellow-400">Scan</button>
          </div>
          <div className="mt-4 text-sm text-white/70">Mock ML result appears here with animated shield.</div>
        </section>

        <section id="report" className="py-12">
          <h2 className="font-display text-2xl mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-sa-gold" /> Anonymous Scam Reporting</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 md:p-6">
            <div className="grid gap-3">
              <input placeholder="Scam title" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder:text-white/50" />
              <textarea placeholder="Describe what happened (no personal info)" className="min-h-28 rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder:text-white/50" />
              <div className="flex items-center gap-3">
                <input type="file" className="text-sm" />
                <button className="px-5 py-3 rounded-lg bg-sa-blue hover:bg-sa-blue/90">Submit Report</button>
              </div>
            </div>
            <div className="mt-3 text-sm text-white/70">Reports are stored locally for now.</div>
          </div>
        </section>

        <section id="alerts" className="py-12">
          <h2 className="font-display text-2xl mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-sa-gold" /> Community Alerts</h2>
          <div className="rounded-xl border border-white/10 bg-sa-red/10 p-4 ring-1 ring-sa-red/30 animate-pulse">
            ⚠ This site has been flagged 25 times by the community.
          </div>
        </section>

        <section id="trends" className="py-12">
          <h2 className="font-display text-2xl mb-4 flex items-center gap-2"><Map className="w-5 h-5 text-sa-gold" /> Fraud Trends</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">Animated SA map heatmap placeholder.</div>
        </section>

        <section id="news" className="py-12">
          <h2 className="font-display text-2xl mb-4 flex items-center gap-2"><Newspaper className="w-5 h-5 text-sa-gold" /> SA Fraud News</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3].map(i => (
              <article key={i} className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1467348733814-f93fc480bec6?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="p-4">
                  <h3 className="font-medium">Mock headline about a phishing wave #{i}</h3>
                  <p className="text-sm text-white/70 mt-1">Short summary of the incident and what to watch out for.</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/60">
          © {new Date().getFullYear()} Ubuntu Shield — Proudly South African
        </div>
      </footer>
    </div>
  )
}

export default App
