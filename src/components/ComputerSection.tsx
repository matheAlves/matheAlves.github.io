import ComputerCanvas from './Computer'

const ComputerSection = () => {
  return (
    <section className="bg-2000-pattern h-svh bg-cover flex justify-center items-center flex-col z-10 relative">
      <ComputerCanvas />
        <p className="font-monumentLightItalic text-primary text-xs">...but the sun is eclipsed by the moon.</p>

    </section>
  )
}

export default ComputerSection
