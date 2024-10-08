import { BrowserRouter } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import Hero from './components/Hero'
import ComputerSection from './components/ComputerSection'
import TechStack from './components/TechStack' 

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
        <div className="relative overflow-hidden">
          <Hero />
          <ComputerSection />
          <TechStack />
        </div>
      </ReactLenis>
    </BrowserRouter>
  )
}

export default App
