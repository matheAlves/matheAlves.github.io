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

const TechStack = () => {
    return (
        <section
            className="bg-cyber-goddess min-h-svh bg-cover bg-[center_20%] flex justify-around items-center flex-col relative px-5"
        >
            <h1
                className="text-primary font-monumentBlack text-4xl md:text-5xl lg:text-5xl"
            >tech stack</h1>
            <Tabs defaultValue="frontend" className="">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="frontend">frontend</TabsTrigger>
                    <TabsTrigger value="backend">backend</TabsTrigger>
                    <TabsTrigger value="tools & devOps">tools & devOps</TabsTrigger>

                </TabsList>

                <TabsContent value="frontend">
                    <Card>
                        <CardHeader>
                            <CardTitle>frontend</CardTitle>
                            <CardDescription>
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
                    <Card>
                        <CardHeader>
                            <CardTitle>backend</CardTitle>
                            <CardDescription>
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
                        {/* <CardFooter>
                        </CardFooter> */}
                    </Card>
                </TabsContent>

                <TabsContent value="tools & devOps">
                    <Card>
                        <CardHeader>
                            <CardTitle>tools & devOps</CardTitle>
                            <CardDescription>
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
                        {/* <CardFooter>
                        </CardFooter> */}
                    </Card>
                </TabsContent>
            </Tabs>
        </section >
    )
}

export default TechStack