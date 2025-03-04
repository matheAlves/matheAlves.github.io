import React, { useRef } from 'react'
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
  const homeRef = React.useRef<HTMLDivElement>(null)
  const contactsRef = React.useRef<HTMLDivElement>(null)
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const stackRef = React.useRef<HTMLDivElement>(null)
  const projectsRef = React.useRef<HTMLDivElement>(null)

  const sections = [
    { ref: homeRef as React.RefObject<HTMLDivElement>, name: 'Home' },
    { ref: aboutRef as React.RefObject<HTMLDivElement>, name: 'Sobre' },
    { ref: stackRef as React.RefObject<HTMLDivElement>, name: 'Tech Stack' },
    { ref: projectsRef as React.RefObject<HTMLDivElement>, name: 'Projetos' },
    { ref: contactsRef as React.RefObject<HTMLDivElement>, name: 'Contato' },
  ]

  const scrollToSection = () => {
    contactsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <BrowserRouter>
      <ReactLenis
        root
        options={{
          syncTouch: true,
        }}
      >

        <Toaster />

        <nav className="flex justify-center items-center gap-9 p-4 fixed top-0 left-0 right-0 z-50 bg-opacity-10 bg-neutral-400 ">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => section.ref.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white hover:text-gray-300"
            >
              {section.name}
            </button>
          ))}
        </nav>

        <div ref={homeRef} className="relative overflow-hidden">
          <Hero />
        </div>

        <div ref={aboutRef} className='relative z-0'>
          <StarsCanvas />
          <Profile />
        </div>

        <div ref={stackRef}>
          <Cyber />
          <TechStack />
        </div>

        <div ref={projectsRef}>
          <ComputerSection />
        </div>

        <div ref={contactsRef} className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

      </ReactLenis>
    </BrowserRouter>
  )
}

export default App
