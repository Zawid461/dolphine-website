import { motion } from "framer-motion";
import DolphinLogo from "./logo";

function About() {
  const highlights = [
    { year: "2019", event: "DOLPHIN founded in pondicherry, India" },
    { year: "2021", event: "Crossed 200 projects — expanded to IoT & AI" },
    { year: "2023", event: "Launched home automation & industrial solutions" },
    { year: "2025", event: "Started operations in Chennai, Tamil Nadu" },
    { year: "2026", event: "500+ projects delivered across South India" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Who We Are</span>
            <h2 className="section-heading mb-6">
              Engineering <span>Tomorrow's</span> Solutions Today
            </h2>
            <div className="neon-divider mb-8" />
            <p className="text-base leading-8 mb-6" style={{ color: "var(--text-muted)" }}>
              DOLPHIN is a Chennai-based innovation lab specialising in smart automation, IoT engineering,
              AI-powered systems, and turnkey academic project delivery. We work with students,
              startups, and businesses who want technology that actually works.
            </p>
            <p className="text-base leading-8 mb-10" style={{ color: "var(--text-muted)" }}>
              Every project we build is custom — no templates, no shortcuts. Just clean
              engineering, professional documentation, and full support.
            </p>

            {/* TIMELINE */}
            <div className="space-y-5">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  <span
                    className="font-bold text-sm shrink-0 px-3 py-1 rounded"
                    style={{
                      background: "rgba(0,212,255,0.1)",
                      color: "#00d4ff",
                      border: "1px solid rgba(0,212,255,0.2)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {item.year}
                  </span>
                  <p className="text-sm pt-0.5" style={{ color: "var(--text-muted)" }}>{item.event}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — LOGO CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="glass rounded-3xl p-12 flex flex-col items-center justify-center text-center relative overflow-hidden"
              style={{ minHeight: "420px" }}
            >
              {/* BG GLOW */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 40%, rgba(0,212,255,0.07) 0%, transparent 70%)" }}
              />

              {/* LOGO */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl" />
                <DolphinLogo size={130} className="relative z-10" />
              </div>

              <h3
                className="text-4xl font-extrabold mb-1"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: "linear-gradient(135deg,#00d4ff,#0090ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                DOLPHIN
              </h3>
              <p className="text-xs tracking-widest uppercase mb-10" style={{ color: "var(--text-dim)" }}>
                Smart Automation
              </p>

              {/* STAT PILLS */}
              <div className="flex flex-wrap justify-center gap-4">
                {[["🚀", "500+", "Projects"], ["🤝", "200+", "Clients"], ["📍", "Chennai", "HQ"]].map(
                  ([icon, num, label]) => (
                    <div
                      key={label}
                      className="flex flex-col items-center px-5 py-4 rounded-xl"
                      style={{
                        background: "rgba(0,212,255,0.05)",
                        border: "1px solid rgba(0,212,255,0.15)",
                      }}
                    >
                      <span className="text-xl mb-1">{icon}</span>
                      <span
                        className="font-bold text-white text-lg"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {num}
                      </span>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;