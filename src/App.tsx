import Hero from './components/Hero'
import { BrowserRouter } from 'react-router-dom'
import ComputerSection from './components/ComputerSection'
import { ReactLenis, useLenis } from 'lenis/react'
function App() {
  const lenis = useLenis(({ scroll }) => {
    console.log('away')
  })

  return (
    <BrowserRouter>
      <ReactLenis
        root
        options={{
          syncTouch: true,
        }}
      >
        <div className="relative z-0 overflow-hidden bg-black">
          <Hero />
          <ComputerSection />
        </div>
      </ReactLenis>
    </BrowserRouter>
  )
}

export default App
