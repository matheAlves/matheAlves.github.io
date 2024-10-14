import { BrowserRouter } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import Hero from './components/Hero'
import ComputerSection from './components/ComputerSection'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import StarsCanvas from './components/Stars'
import { Toaster } from 'react-hot-toast';
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
        <Toaster />
        <div className="relative overflow-hidden">
          <Hero />
        </div>
        <ComputerSection />
        <TechStack />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </ReactLenis>
    </BrowserRouter>
  )
}

export default App
