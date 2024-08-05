import { motion } from 'framer-motion'
import matheus from '../assets/math.png'
import { styles } from '../styles.ts'
import { WavyBackground } from './WavyBackground.tsx'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
const Hero = () => {
  return (
    <WavyBackground>
      <section className={`relative flex h-screen flex-col items-center lg:flex-row`}>
        <div className={` ${styles.paddingX} ${styles.paddingY} flex flex-col items-center justify-center`}>
          <h1 className={`${styles.heroHeadText}`}>
            Oi, eu sou o <span className="text-primary">Matheus</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            Um desenvolvedor fullstack entusiasta da <span className="text-[#915EFF]">criatividade</span>.
          </p>

          <div className="flex gap-5 mt">
            <img className={`${styles.heroLink} w-10 h-10 lg:w-16 lg:h-16 mt-5 `} src={github} alt="github logo" onClick={() => window.open('https://github.com/matheAlves', '_blank')}/>
            <img className={`${styles.heroLink} w-[2.75rem] h-10 lg:w-[4.5rem] lg:h-16 mt-5`} src={linkedin} alt="linkedin logo" onClick={() => window.open('https://www.linkedin.com/in/mathealves/', '_blank')}/>
          </div>
        </div>

        {/* <ComputerCanvas /> */}
        <img className="w-80 lg:w-auto" src={matheus} alt="hero background" />

        <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
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
