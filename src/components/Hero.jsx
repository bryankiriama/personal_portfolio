function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Hi, I’m Bryan 👋
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">
        Software Engineer
      </h2>

      <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-8">
        I specialize in full-stack development, scalable systems,
        and clean architecture, building high-impact applications.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-slate-500 text-slate-300 rounded-lg hover:border-white hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero
