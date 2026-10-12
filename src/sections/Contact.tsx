import { useState } from "react";
import type { FormEvent } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { Button, buttonVariants } from "../components/ui/button";
import { contact } from "../data";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-base-300 bg-base-100 px-4 py-2.5 outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary";

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
    <section id="contact" className="py-20 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Contact" subtitle="Have a project in mind or want to say hi? Send me a message." />
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <a href={`mailto:${contact.email}`} className={buttonVariants({ size: "lg" })}>
              <FiMail /> {contact.email}
            </a>
            <div className="flex flex-wrap gap-3">
              <a href={contact.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "sm" })}>
                <FiGithub /> GitHub
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "sm" })}>
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-3 space-y-4">
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
              <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={5} required className={fieldClass} />
            </div>
            <Button type="submit" size="lg" disabled={status === "sending"}>
              <FiSend /> {status === "sending" ? "Sending..." : "Send Message"}
            </Button>
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