import { BrowserRouter } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import Hero from './components/Hero'
import ComputerSection from './components/ComputerSection'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import StarsCanvas from './components/Stars'
import { Toaster } from 'react-hot-toast';
import Cyber from './components/Cyber'
import Profile from './components/Profile'
function App() {
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
{/* 
        <div className='relative'>
          <Profile />
        </div> */}

        <div>
          <Cyber />
          <TechStack />
        </div>

        <ComputerSection />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

      </ReactLenis>
    </BrowserRouter>
  )
}

export default App
