import ComputerCanvas from './Computer'

const ComputerSection = () => {
  return (
    <section className="p-8 bg-2000-pattern h-svh bg-cover flex justify-center items-center flex-col z-10 relative">
      <h1
        className="text-primary font-monumentBlack text-4xl md:text-5xl lg:text-5xl mt-28"
      >projetos</h1>
      <ComputerCanvas />
      <div
        className='bg-neutral-500 bg-opacity-40 p-2 '
      >
        <p className="font-monumentLightItalic text-primary text-[0.6rem] md:text-xs">
          Esta seção está em construção, mas você pode conferir alguns projetos <a href="https://github.com/matheAlves/matheAlves.github.io" target="_blank" className="text-primary">(como esta página)</a> em meu github: <a href="https://github.com/matheAlves" target="_blank" className="text-primary">github.com/matheAlves</a>
        </p>
      </div>

    </section>
  )
}

export default ComputerSection
