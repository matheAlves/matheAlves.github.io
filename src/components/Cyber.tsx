import { motion, useScroll, useTransform } from "framer-motion";
import StarsCanvas from "@/components/Stars";

const Cyber = () => {
    const { scrollYProgress } = useScroll();
    // const isMobile = window.matchMedia('(max-width: 500px)').matches;
    const imageY = useTransform(scrollYProgress, [0, 2.5], [0, -700]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);


    return (
        <motion.div
            style={{ y: imageY, opacity: imageOpacity }}

            className="bg-cyber-goddess md:bg-cover h-full md:h-[1526px] absolute w-full z-0 bg-contain bg-bottom md:bg-top bg-no-repeat"
        >
            <StarsCanvas />

        </motion.div>
    );
}

export default Cyber;