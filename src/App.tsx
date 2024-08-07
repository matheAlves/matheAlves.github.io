import Hero from './components/Hero'
import { BrowserRouter } from 'react-router-dom'
import ComputerSection from './components/ComputerSection'
import { ReactLenis } from 'lenis/react'
function App() {
  // const lenis = useLenis(({ scroll: number }) => {
  //   console.log(scroll)
  // })

  return (
    <BrowserRouter>
      <ReactLenis
        root
        options={{
          syncTouch: true,
        }}
      >
        <div className="relative z-0 overflow-hidden">
          <Hero />
          <ComputerSection />
          <section className="h-screen"/>
        </div>
      </ReactLenis>
    </BrowserRouter>
  )
}

export default App
