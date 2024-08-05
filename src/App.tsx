import Hero from './components/Hero'
import { BrowserRouter } from 'react-router-dom'
import ComputerSection from './components/ComputerSection'
import Lenis from 'lenis'
function App() {
  const lenis = new Lenis()

  // lenis.on('scroll', (e: Lenis) => {
  //   console.log(e)
  // })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  return (
    <BrowserRouter>
      <div className="relative z-0 overflow-hidden bg-black">
        <Hero />
        <ComputerSection />
      </div>
    </BrowserRouter>
  )
}

export default App
