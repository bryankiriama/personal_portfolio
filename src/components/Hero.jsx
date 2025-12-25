import { heroData } from "../data/hero"

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black">

      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        {heroData.greeting}
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6">
        {heroData.role}
      </h2>

      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
        {heroData.summary}
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
        >
          {heroData.primaryCTA}
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-gray-500 text-white font-medium rounded-lg hover:border-white transition"
        >
          {heroData.secondaryCTA}
        </a>
      </div>
    </section>
  )
}

export default Hero
