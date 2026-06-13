import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  { title: "Smart Home Automation", category: "IoT", desc: "Full-stack home control with voice commands and mobile app.", emoji: "🏠", color: "#00d4ff" },
  { title: "AI Attendance System", category: "AI/ML", desc: "Face-recognition based attendance with real-time dashboard.", emoji: "🤖", color: "#0090ff" },
  { title: "IoT Weather Monitoring", category: "IoT", desc: "Live weather tracking with sensor arrays and cloud sync.", emoji: "🌦️", color: "#00d4ff" },
  { title: "Face Recognition Security", category: "AI/ML", desc: "Secure access control system using deep learning.", emoji: "🔐", color: "#0090ff" },
  { title: "Industrial Automation", category: "Automation", desc: "PLC-based industrial process automation for manufacturing.", emoji: "⚙️", color: "#00b4cc" },
  { title: "College Final Year Projects", category: "Education", desc: "End-to-end project delivery — hardware, software, report.", emoji: "🎓", color: "#00d4ff" },
  { title: "Smart Agriculture System", category: "IoT", desc: "Soil monitoring, auto-irrigation, crop health alerts.", emoji: "🌾", color: "#00d4ff" },
  { title: "Inventory Management App", category: "Software", desc: "Web-based inventory system with analytics & billing.", emoji: "📦", color: "#0090ff" },
  { title: "Energy Monitor Dashboard", category: "Automation", desc: "Real-time power usage tracking and optimization.", emoji: "⚡", color: "#00b4cc" },
];

const categories = ["All", "IoT", "AI/ML", "Automation", "Software", "Education"];

function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="section-label">Portfolio</span>
          <h2 className="section-heading">
            Featured <span>Projects</span>
          </h2>
          <div className="neon-divider mx-auto mt-4" />
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-250"
              style={{
                background: active === cat ? "linear-gradient(135deg,#00d4ff,#0090ff)" : "rgba(0,212,255,0.05)",
                color: active === cat ? "#000" : "var(--text-muted)",
                border: active === cat ? "none" : "1px solid rgba(0,212,255,0.18)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="glass rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            >
              {/* CATEGORY BADGE */}
              <span
                className="absolute top-5 right-5 text-[11px] font-bold px-3 py-1 rounded-full"
                style={{ background: "rgba(0,212,255,0.1)", color: "#00d4ff", border: "1px solid rgba(0,212,255,0.2)" }}
              >
                {project.category}
              </span>

              {/* EMOJI */}
              <div
                className="text-5xl mb-6 w-18 h-18 flex items-center justify-center"
                style={{ fontSize: "52px" }}
              >
                {project.emoji}
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {project.title}
              </h3>
              <p className="text-sm leading-7" style={{ color: "var(--text-muted)" }}>
                {project.desc}
              </p>

              {/* HOVER LINE */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(90deg, #00d4ff, #0090ff)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#enquiry" className="btn-outline">
            Commission a Custom Project →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;