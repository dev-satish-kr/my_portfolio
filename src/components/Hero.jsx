import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-violet-500">
            Hello, I'm
          </span>

          <h1 className="mt-7 text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Satish Kumar
          </h1>

          <h2 className="mt-3 text-2xl font-medium leading-relaxed text-slate-500 sm:text-3xl">
            Frontend Developer &
            <span className="block text-violet-500">
              Servicenow Developer
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-500">
            I build clean, modern and high-performing websites
            that help businesses grow and create meaningful
            digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-md bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600"
            >
              View My Work
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-md border border-violet-300 px-6 py-3 text-sm font-semibold text-violet-600 transition hover:bg-violet-50"
            >
              Download CV
              <Download size={17} />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* decorative circle */}
          <div className="absolute h-90 w-90 rounded-full border border-violet-200 sm:h-120 sm:w-120" />

          <div className="relative z-10 h-107.5 w-82.5 overflow-hidden rounded-b-[45%] sm:h-130 sm:w-100">
            <img
              src="/profile.png"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}