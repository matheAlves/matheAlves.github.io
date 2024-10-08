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
            className="bg-cyber-goddess h-svh bg-cover bg-[center_20%] flex justify-around items-center flex-col relative"
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
                                frontend technologies
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            * react
                            <br />
                            * next.js
                            <br />
                            * typescript
                            <br />
                            * tailwindcss

                        </CardContent>
                        {/* <CardFooter>
                           
                        </CardFooter> */}
                    </Card>
                </TabsContent>

                <TabsContent value="backend">
                    <Card>
                        <CardHeader>
                            <CardTitle>backend</CardTitle>
                            <CardDescription>
                                backend technologies.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            * node.js
                            <br />
                            * express
                            <br />
                            * typescript
                            <br />
                            * postgresql

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
                                tools & devOps technologies.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            * git
                            <br />
                            * github
                            <br />
                            * docker
                            <br />
                            <br />



                        </CardContent>
                        {/* <CardFooter>
                        </CardFooter> */}
                    </Card>
                </TabsContent>
            </Tabs>
            <h1 className="text-primary absolute bottom-0 text-4xl">em construção...</h1>
        </section>
    )
}

export default TechStack