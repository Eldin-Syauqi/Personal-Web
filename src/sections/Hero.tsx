import { buttonVariants } from "../components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="w-full py-12 px-6 flex items-center justify-center bg-base-200/50">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
        {/* Foto Profil */}
        <div className="w-full max-w-sm shrink-0">
          <img
  src="/images/profile.webp"
  alt="Portrait of Eldyne Syauqillah"
  width={800}
  height={1000}
  fetchPriority="high"
  className="w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </div>

        {/* Teks & Tombol */}
        <div className="text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Hello There!</h1>
          <p className="py-4 text-base opacity-80 leading-relaxed">
            I'm Eldyne Syauqillah, a Full Stack Developer who creates high-performing digital solutions that drive business growth. With expertise in both front-end and back-end technologies, I build modern web applications that are not only visually engaging but also fast, secure, and optimized for performance. Whether it's an enterprise platform or a custom API integration, I deliver clean, maintainable code from scratch to deployment.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#contact" className={buttonVariants({ size: "lg" })}>Let's Chat</a>
            <a href="#projects" className={buttonVariants({ variant: "outline", size: "lg" })}>View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}