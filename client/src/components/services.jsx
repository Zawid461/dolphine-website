import { motion } from "framer-motion";

const services = [
  {
    icon: "🎓",
    title: "College Projects",
    desc: "Cutting-edge final year projects with full documentation, presentations, and technical support for all engineering departments.",
    tags: ["ECE", "CSE", "EEE", "Mech"],
  },
  {
    icon: "🏫",
    title: "School Projects",
    desc: "Science fair and school-level projects designed to be educational, impressive, and easy to present.",
    tags: ["Science", "Tech", "Arduino"],
  },
  {
    icon: "📡",
    title: "IoT & Embedded",
    desc: "Custom IoT systems and embedded solutions built on Arduino, Raspberry Pi, ESP32, and more.",
    tags: ["Arduino", "ESP32", "RPi"],
  },
  {
    icon: "🏠",
    title: "Home Automation",
    desc: "Smart home systems with voice control, mobile app integration, and energy-saving automation.",
    tags: ["Voice", "Mobile", "Smart"],
  },
  {
    icon: "💻",
    title: "Software Solutions",
    desc: "Web apps, management systems, and custom software built with modern frameworks and clean code.",
    tags: ["React", "Node", "MongoDB"],
  },
  {
    icon: "🔧",
    title: "Industrial Automation",
    desc: "PLC programming, SCADA systems, and industrial automation solutions for manufacturing processes.",
    tags: ["PLC", "SCADA", "Industry"],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="section-label">What We Offer</span>
          <h2 className="section-heading">
            Our <span>Services</span>
          </h2>
          <div className="neon-divider mx-auto mt-4" />
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            From student projects to industrial automation — we cover the full spectrum of smart technology.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass p-8 rounded-2xl group transition-all duration-300"
              style={{ cursor: "default" }}
            >
              {/* ICON */}
              <div
                className="text-4xl mb-5 w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)" }}
              >
                {service.icon}
              </div>

              {/* CONTENT */}
              <h3
                className="text-xl font-bold mb-3 text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {service.title}
              </h3>
              <p className="text-sm leading-7 mb-5" style={{ color: "var(--text-muted)" }}>
                {service.desc}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.18)", color: "#00d4ff" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;