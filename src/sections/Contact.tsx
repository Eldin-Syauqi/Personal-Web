import { useState } from "react";
import type { FormEvent } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { contact } from "../data";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 outline-offset-2 transition focus-visible:outline-2 focus-visible:outline-purple-600";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New message from my portfolio");
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-base-200 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Get in touch"
          title="Contact"
          subtitle="Have a project in mind or want to say hi? Send me a message."
        />

        <div className="reveal grid overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl md:grid-cols-5">
          <div className="space-y-6 bg-gradient-to-br from-purple-800 to-fuchsia-700 p-8 text-white md:col-span-2">
            <h3 className="text-2xl font-bold">Let&apos;s work together</h3>
            <p className="text-white/90">I usually reply within a day. Tell me about your idea or project.</p>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 break-all font-medium underline-offset-4 hover:underline"
            >
              <FiMail aria-hidden="true" className="shrink-0" /> {contact.email}
            </a>
            <div className="flex gap-3">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/30"
              >
                <FiGithub aria-hidden="true" size={20} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/30"
              >
                <FiLinkedin aria-hidden="true" size={20} />
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 p-8 md:col-span-3">
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea id="message" name="message" rows={5} required className={fieldClass} />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-700/30 transition hover:-translate-y-0.5 hover:bg-purple-800 disabled:opacity-60"
            >
              <FiSend aria-hidden="true" /> {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status === "success" && "Thank you! Your message was sent."}
              {status === "error" && "Sorry, the message could not be sent. Please email me directly."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
