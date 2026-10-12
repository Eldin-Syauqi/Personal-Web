import { FiGithub, FiLinkedin } from "react-icons/fi";
import { contact } from "../data";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-base-300 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm opacity-70">© 2026 Eldyne Syauqillah. All rights reserved.</p>
        <div className="flex gap-4">
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="opacity-70 hover:opacity-100">
            <FiGithub size={20} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="opacity-70 hover:opacity-100">
            <FiLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}