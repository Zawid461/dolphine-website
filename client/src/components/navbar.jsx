import { useState, useEffect } from "react";
import DolphinLogo from "./DolphinLogo";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#03080f]/95 backdrop-blur-xl border-b border-cyan-400/10 shadow-[0_4px_30px_rgba(0,212,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md group-hover:bg-cyan-400/35 transition-all duration-300" />
            <DolphinLogo size={44} className="relative z-10" />
          </div>
          <div>
            <span
              className="text-2xl font-bold tracking-wide"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "linear-gradient(135deg, #00d4ff, #0090ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DOLPHIN
            </span>
            <p className="text-[10px] text-cyan-400/50 tracking-[0.2em] uppercase -mt-1">
              Smart Automation
            </p>
          </div>
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-200 relative group"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#enquiry"
          className="hidden md:block btn-primary text-sm"
          style={{ padding: "10px 24px", fontSize: "14px" }}
        >
          Start a Project →
        </a>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-cyan-400 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#07111c]/98 backdrop-blur-xl border-t border-cyan-400/10 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            className="btn-primary text-center mt-2"
            style={{ padding: "12px 24px", fontSize: "14px" }}
          >
            Start a Project →
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;