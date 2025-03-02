import ComputerCanvas from './Computer'

const ComputerSection = () => {
  return (
    <section className="p-8 bg-2000-pattern h-svh bg-cover flex justify-center items-center flex-col z-10 relative">
      <h1
        className="text-primary font-monumentBlack text-4xl md:text-5xl lg:text-5xl mt-28"
      >projetos</h1>
      <ComputerCanvas />
      <p

        className="font-monumentLightItalic text-primary text-[0.6rem] md:text-xs">em breve...</p>

    </section>
  )
}

export default ComputerSection
