import { motion, useScroll, useTransform } from 'framer-motion'
// import matheus from '../assets/math.png'
import { styles } from '../styles.ts'
import { WavyBackground } from './WavyBackground.tsx'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const Hero = () => {
  const { scrollY } = useScroll();
  // const imageX = useTransform(scrollY, [0, 500], [0, 100]);
  // const imageOpacity = useTransform(scrollY, [0, 500], [0.9, 0])
  const textX = useTransform(scrollY, [0, 500], [0, -100]);
  const textOpacity = useTransform(scrollY, [0, 500], [0.9, 0])

  return (
    <WavyBackground containerClassName='px-5' className={`relative flex min-h-screen flex-col items-center md:flex-row`}>
      <motion.div
        style={{ x: textX, opacity: textOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1.25 }}
        className={` px-0 ${styles.paddingY} flex flex-col items-center justify-center max-w-5xl pr-0`}>
        <h1 className={`${styles.heroHeadText}`}>
          Oi, eu sou o <span className="text-primary font-monumentBlack">Matheus</span>
        </h1>
        <p className={`${styles.heroSubText} text-white-100`}>
          Um desenvolvedor fullstack entusiasta da <span className="text-[#915EFF]">criatividade</span>.
        </p>

        <div className="mt flex gap-5">
          <img
            className={`${styles.heroLink} mt-5 h-10 w-10 sm:h-16 sm:w-16`}
            src={github}
            alt="github logo"
            onClick={() => window.open('https://github.com/matheAlves', '_blank')}
          />
          <img
            className={`${styles.heroLink} mt-5 h-10 w-[2.75rem] sm:h-16 sm:w-[4.5rem]`}
            src={linkedin}
            alt="linkedin logo"
            onClick={() => window.open('https://www.linkedin.com/in/mathealves/', '_blank')}
          />
        </div>
      </motion.div>

      {/* <motion.div
        style={{ x: imageX, opacity: imageOpacity }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.9, x: 1 }}
        transition={{ duration: 1 }}
      >
        <img className="w-80 lg:w-auto" src={matheus} alt="hero background" />
      </motion.div> */}

      <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
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
      </div>
    </WavyBackground>
  )
}

export default Hero
