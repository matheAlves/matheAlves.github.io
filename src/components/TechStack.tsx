import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { motion, useTransform, useScroll } from "framer-motion"
import { styles } from "@/styles"
// import StarsCanvas from "./Stars"

const TechStack = () => {
    // const isMobile = window.matchMedia('(max-width: 500px)').matches;
    const { scrollYProgress } = useScroll();
    const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <motion.section
            className="min-h-svh bg-cover bg-[center_20%] flex justify-around items-center flex-col relative px-5"
            style={{ opacity: imageOpacity }}
        >
            {/* {!isMobile && <StarsCanvas />} */}
            <h1
                className="text-primary font-monumentBlack text-4xl md:text-5xl lg:text-5xl holographic-text"
            >tech stack</h1>
            <Tabs defaultValue="frontend" >
                <TabsList className="grid w-full grid-cols-3 bg-white bg-opacity-70">
                    <TabsTrigger value="frontend">frontend</TabsTrigger>
                    <TabsTrigger value="backend">backend</TabsTrigger>
                    <TabsTrigger className="min-[320px]:text-[10px]" value="tools & devOps">tools & devOps</TabsTrigger>

                </TabsList>

                <TabsContent value="frontend">
                    <Card className="bg-white bg-opacity-95">
                        <CardHeader>
                            <CardTitle>frontend</CardTitle>
                            <CardDescription className={`${styles.fontItalic}`}>
                                all that you touch, and all that you see...
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul
                                className="list-disc list-inside"
                            >
                                <li>react</li>
                                <li>next.js</li>
                                <li>typescript</li>
                                <li>tailwindcss</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="backend">
                    <Card className="bg-white bg-opacity-95">
                        <CardHeader>
                            <CardTitle>backend</CardTitle>
                            <CardDescription className={`${styles.fontItalic}`}>
                                ...and all you create, and all you destroy...
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul className="list-disc list-inside">
                                <li>node.js</li>
                                <li>express</li>
                                <li>typescript</li>
                                <li>postgresql</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="tools & devOps">
                    <Card className="bg-white bg-opacity-95">
                        <CardHeader>
                            <CardTitle>tools & devOps</CardTitle>
                            <CardDescription className={`${styles.fontItalic}`}>
                                ...and everything under the sun is in tune...
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul className="list-disc list-inside">
                                <li>git</li>
                                <li>github</li>
                                <li>docker</li>
                                <li>heroku</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
            <p className="absolute bottom-0 font-monumentLightItalic text-primary text-[0.6rem] md:text-xs">
            ...e mais
            </p>
        </motion.section >
    )
}

export default TechStack