import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
      <SectionTitle
        eyebrow="Kind words"
        title="Testimonials"
        subtitle="What people I have worked and learned with say about me."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <figure
            key={index}
            className="reveal relative flex flex-col rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <FaQuoteLeft aria-hidden="true" className="text-3xl text-purple-300" />
            <blockquote className="mt-4 flex-1 opacity-80">{item.quote}</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-base-300 pt-4">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 font-semibold text-white"
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
    </section>
  );
}
