import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
