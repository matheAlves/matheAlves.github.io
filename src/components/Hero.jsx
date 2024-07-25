import { motion } from 'framer-motion'

import { styles } from '../styles'
import ComputerCanvas from './Computer'
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10`}>
        
        <div className="w-0.5 sm:h-96 h-40 terminal-green-gradient" />

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Oi, eu sou o <span className="text-terminal-green">Matheus</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Um desenvolvedor fullstack entusiasta da <span className="text-[#915EFF]">criatividade</span>.
          </p>
        </div>
      </div>

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
