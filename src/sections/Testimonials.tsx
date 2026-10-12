import SectionTitle from "../components/SectionTitle";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Testimonials" subtitle="Kind words from people I have worked and learned with." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <figure key={index} className="bg-base-100 border border-base-300 rounded-2xl p-6 flex flex-col">
              <blockquote className="flex-1 opacity-80">“{item.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-content font-semibold"
                >
                  {item.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold">{item.name}</span>
                  <span className="block text-sm opacity-70">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}