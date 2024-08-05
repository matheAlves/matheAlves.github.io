import { motion } from 'framer-motion'
import matheus from '../assets/math.png'
import { styles } from '../styles.ts'
import { WavyBackground } from './WavyBackground.tsx'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
const Hero = () => {
  return (
    <WavyBackground>
      <section className={`relative flex min-h-screen flex-col items-center lg:flex-row`}>
        <div className={` ${styles.paddingX} ${styles.paddingY} flex flex-col items-center justify-center`}>
          <h1 className={`${styles.heroHeadText}`}>
            Oi, eu sou o <span className="text-primary">Matheus</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            Um desenvolvedor fullstack entusiasta da <span className="text-[#915EFF]">criatividade</span>.
          </p>

          <div className="mt flex gap-5">
            <img
              className={`${styles.heroLink} mt-5 h-10 w-10 lg:h-16 lg:w-16`}
              src={github}
              alt="github logo"
              onClick={() => window.open('https://github.com/matheAlves', '_blank')}
            />
            <img
              className={`${styles.heroLink} mt-5 h-10 w-[2.75rem] lg:h-16 lg:w-[4.5rem]`}
              src={linkedin}
              alt="linkedin logo"
              onClick={() => window.open('https://www.linkedin.com/in/mathealves/', '_blank')}
            />
          </div>
        </div>
        <img className="w-80 lg:w-auto" src={matheus} alt="hero background" />

        <div className="absolute bottom-10 md:bottom-10 flex w-full items-center justify-center ">
          <a href="#about">
            <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-primary p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="mb-1 h-3 w-3 rounded-full bg-primary"
              />
            </div>
          </a>
        </div>
      </section>
    </WavyBackground>
  )
}

export default Hero
