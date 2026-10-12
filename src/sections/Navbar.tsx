import { BiLogoOkRu } from "react-icons/bi";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-purple-700 text-white shadow-md border-b border-purple-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-wide">
          <BiLogoOkRu className="w-8 h-8 text-white" />
          <span>My Personal Web</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-sm">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-purple-200 transition">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Tombol Kanan & Hamburger Mobile */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="bg-white text-purple-700 hover:bg-purple-100 font-semibold px-4 py-2 rounded-lg text-sm shadow transition"
          >
            Contact me
          </a>

          {/* Tombol Hamburger untuk Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-purple-600 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-purple-800 text-white border-b border-purple-900 shadow-xl py-4 px-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}