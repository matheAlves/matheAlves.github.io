import ComputerCanvas from './Computer'

const ComputerSection = () => {
  return (
    <section className="bg-2000-pattern h-svh bg-cover flex justify-center items-center flex-col z-10 relative">
      <ComputerCanvas />
        <a 
        href='https://genius.com/823422' target='_blank' rel='noreferrer'
        className="font-monumentLightItalic text-primary text-[0.6rem]">...but the sun is eclipsed by the moon.</a>

    </section>
  )
}

export default ComputerSection
