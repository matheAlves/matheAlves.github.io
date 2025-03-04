import React, { useState } from 'react'
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <ReactLenis
        root
        options={{
          syncTouch: true,
        }}
      >

        <Toaster />

        <nav className="w-fit md:w-auto flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 bg-opacity-10 bg-neutral-500 md:backdrop-blur-sm rounded-br-3xl">
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center gap-9 w-full">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => section.ref.current?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white hover:holographic"
                onMouseEnter={(e) => e.currentTarget.classList.add('holographic')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('holographic')}
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40">
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      section.ref.current?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                    className="text-white text-xl hover:text-gray-300"
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            </div>
          )}
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
