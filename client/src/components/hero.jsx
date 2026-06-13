import { motion } from "framer-motion";
import DolphinLogo from "./DolphinLogo";

function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden grid-bg"
      style={{ paddingTop: "100px" }}
    >
      {/* AMBIENT GLOW ORBS */}
      <div
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,144,255,0.06) 0%, transparent 70%)" }}
      />

      {/* FLOATING PARTICLES */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: "rgba(0,212,255,0.5)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/25 rounded-full blur-2xl animate-pulse" />
            <DolphinLogo size={100} className="relative z-10" />
          </div>
        </motion.div>

        {/* EYEBROW */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-label"
        >
          ⚡ Smart Automation & Engineering Solutions
        </motion.span>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="section-heading mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 800,
          }}
        >
          Build the <span>Future</span>
          <br />with DOLPHIN
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Innovative IoT systems, smart automation, final year projects, and
          custom software solutions — crafted for students, professionals & businesses.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#enquiry" className="btn-primary">Start Your Project →</a>
          <a href="#projects" className="btn-outline">View Our Work</a>
        </motion.div>

        {/* TRUST BADGES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-16"
        >
          {["500+ Projects", "200+ Clients", "5+ Years", "Chennai, TN"].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(0,212,255,0.06)",
                border: "1px solid rgba(0,212,255,0.18)",
                color: "var(--text-muted)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM FADE */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #03080f)" }}
      />
    </section>
  );
}

export default Hero;