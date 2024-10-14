import { motion, useScroll, useTransform } from "framer-motion";
const Cyber = () => {
    const { scrollYProgress } = useScroll();
    // const isMobile = window.matchMedia('(max-width: 500px)').matches;
    const imageY = useTransform(scrollYProgress, [0, 1], [0, -700]);


    return (
        <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}

            className="bg-cyber-goddess md:bg-cover h-full md:h-[1526px] absolute w-full z-0 bg-contain bg-bottom md:bg-top bg-no-repeat"
        >

        </motion.div>
    );
}

export default Cyber;