// import { motion } from 'framer-motion'
import heroBg from '../assets/herobg.jpg'
import { styles } from '../styles.ts'
import ComputerCanvas from './Computer.tsx'
const Hero = () => {
  return (
    <section className={`relative flex h-svh w-full flex-col overflow-hidden lg:flex-row`}>
      <div
        className={` ${styles.paddingX} ${styles.paddingY} flex flex-col items-center justify-center gap-5 lg:w-2/4 lg:items-start`}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          Oi, eu sou o <span className="text-primary">Matheus</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Um desenvolvedor fullstack entusiasta da <span className="text-secondary">criatividade</span>.
        </p>
      </div>

      <img
        className="absolute top-1/4 z-[-1] h-1/2 lg:left-1/3 lg:top-0 lg:h-screen"
        src={heroBg}
        alt="hero background"
      />
      <ComputerCanvas />

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero
