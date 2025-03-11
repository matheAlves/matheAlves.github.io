import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import Hero from './components/Hero'
import Projects from './components/Projects'
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
    { ref: aboutRef as React.RefObject<HTMLDivElement>, name: 'Matheus' },
    { ref: stackRef as React.RefObject<HTMLDivElement>, name: 'Tech Stack' },
    { ref: projectsRef as React.RefObject<HTMLDivElement>, name: 'Projetos' },
    { ref: contactsRef as React.RefObject<HTMLDivElement>, name: 'Contato' },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  // const [indicatorStyle, setIndicatorStyle] = useState({
  //   left: 0,
  //   width: 0,
  // });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const observers = sections.map(section => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.name);
          }
        },
        { threshold: 0.5 }
      );

      if (section.ref.current) {
        observer.observe(section.ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // useEffect(() => {
  //   const activeButton = document.querySelector(`[data-section="${activeSection}"]`);
  //   if (activeButton) {
  //     const rect = activeButton.getBoundingClientRect();
  //     const navRect = activeButton.parentElement?.getBoundingClientRect();
  //     if (navRect) {
  //       setIndicatorStyle({
  //         left: rect.left - navRect.left,
  //         width: rect.width,
  //       });
  //     }
  //   }
  // }, [activeSection]);

  return (
    <BrowserRouter>
      <ReactLenis
        root
        options={{
          syncTouch: true,
        }}
      >

        <Toaster />

        <nav className="w-fit md:w-auto flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 bg-opacity-10 bg-neutral-500 md:backdrop-blur-sm rounded-br-3xl md:rounded-br-none">
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
          <div className="hidden md:flex justify-center items-center gap-9 w-full relative">
            {/* Animated Underline Indicator */}
            {/* <div
              className="absolute bottom-[-16px] h-[4px] bg-white transition-all duration-300 ease-in-out"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
              }}
            /> */}

            {sections.map((section, index) => (
              <button
                key={index}
                data-section={section.name}
                onClick={() => section.ref.current?.scrollIntoView({ behavior: 'smooth' })}

                className={`text-white hover:holographic relative ${activeSection === section.name ? 'holographic' : 'text-white'
                  }`}
                onMouseEnter={(e) => e.currentTarget.classList.add('holographic')}
                onMouseLeave={(e) => {
                  if (activeSection !== section.name) {
                    e.currentTarget.classList.remove('holographic')
                  }
                }}
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40">
              <button
                className="absolute top-4 right-4 text-white p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      section.ref.current?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                    className={`text-white text-xl hover:text-gray-300 ${activeSection === section.name ? 'border-b-2' : ''
                      }`}
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
          <Projects />
        </div>

        <div ref={contactsRef} className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

      </ReactLenis>
    </BrowserRouter >
  )
}

export default App
