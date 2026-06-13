import DolphinLogo from "./dolphinLogo";

function Footer() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Start Project", href: "#enquiry" },
  ];

  return (
    <footer style={{ borderTop: "1px solid rgba(0,212,255,0.12)", background: "#03080f" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="flex flex-col md:flex-row gap-10 justify-between items-start mb-12">

          {/* BRAND */}
          <div className="flex items-center gap-4">
            <DolphinLogo size={52} />
            <div>
              <h2
                className="text-2xl font-bold"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: "linear-gradient(135deg,#00d4ff,#0090ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                DOLPHIN
              </h2>
              <p className="text-xs tracking-widest uppercase" style={{ color: "var(--text-dim)" }}>
                Smart Automation
              </p>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.target.style.color = "#00d4ff")}
                onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ height: "1px", background: "rgba(0,212,255,0.08)", marginBottom: "24px" }} />

        {/* BOTTOM */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{ color: "var(--text-dim)" }}
        >
          <p>© 2026 DOLPHIN — Smart Automation Solutions. All rights reserved.</p>
          <p>Crafted with ❤️ in Chennai, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;