import { FiArrowRight, FiCode } from "react-icons/fi";

const highlights = ["React", "TypeScript", "Node.js", "Swift"];

export default function Hero() {
  return (
    <section id="home" className="relative isolate scroll-mt-16 overflow-hidden px-6 py-16 lg:py-24">
      {/* Dekorasi latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 -z-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-24 -z-10 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(circle,rgba(126,34,206,0.25)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-14 lg:grid-cols-2">
        {/* Teks & tombol */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-800 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Open to remote opportunities
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight lg:text-6xl">
            Hello there, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
              Eldyne Syauqillah
            </span>
          </h1>
          <p className="mt-3 text-xl font-semibold text-purple-700 dark:text-purple-300">Full Stack Developer</p>

          <p className="mt-5 max-w-xl text-base leading-relaxed opacity-80">
            I create high-performing digital solutions that drive business growth. With expertise in both front-end and
            back-end technologies, I build modern web applications that are not only visually engaging but also fast,
            secure, and optimized for performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-700/30 transition hover:-translate-y-0.5 hover:bg-purple-800"
            >
              Let&apos;s Chat <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-purple-700 px-7 py-3 font-semibold text-purple-800 transition hover:-translate-y-0.5 hover:bg-purple-700 hover:text-white dark:border-purple-300 dark:text-purple-200 dark:hover:bg-purple-300 dark:hover:text-purple-950"
            >
              View Projects
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Main technologies">
            {highlights.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-base-300 bg-base-100 px-3 py-1 text-sm font-medium shadow-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Foto profil */}
        <div className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-gradient-to-br from-purple-600 to-fuchsia-500"
            />
            <img
              src="/images/profile.webp"
              alt="Portrait of Eldyne Syauqillah"
              width={800}
              height={1000}
              fetchPriority="high"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl ring-4 ring-base-100"
            />
            <div className="float-slow absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-base-100 px-4 py-3 shadow-xl ring-1 ring-base-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                <FiCode aria-hidden="true" size={20} />
              </span>
              <span>
                <span className="block text-sm font-semibold">Self-taught developer</span>
                <span className="block text-xs opacity-70">Always learning</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
