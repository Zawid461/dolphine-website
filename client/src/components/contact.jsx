import { motion } from "framer-motion";

const contacts = [
  {
    icon: "📞",
    label: "Phone",
    value: "+91 98941 41229",
    href: "tel:+919894141229",
    cta: "Call Now",
  },
  {
    icon: "📧",
    label: "Email",
    value: "ahamedsaiffullah91@gmail.com",
    href: "mailto:ahamedsaiffullah91@gmail.com",
    cta: "Send Email",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Chennai, Tamil Nadu, India" + " " + "Pondicherry, India",
    href: "https://maps.google.com/?q=Chennai,Tamil+Nadu",
    cta: "View Map",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: "https://wa.me/919894141229",
    cta: "Open Chat",
    accent: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-heading">
            Contact <span>Us</span>
          </h2>
          <div className="neon-divider mx-auto mt-4" />
          <p className="mt-6 text-base" style={{ color: "var(--text-muted)" }}>
            Ready to start something great? Reach out — we respond fast.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contacts.map((contact, i) => (
            <motion.a
              key={i}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-7 flex flex-col items-center text-center gap-4 hover:scale-[1.03] transition-all duration-300 group"
              style={{
                borderColor: contact.accent ? "rgba(37,211,102,0.35)" : undefined,
                cursor: "pointer",
              }}
            >
              <span className="text-4xl">{contact.icon}</span>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--text-dim)" }}>
                  {contact.label}
                </p>
                <p className="text-sm font-medium text-white leading-6">{contact.value}</p>
              </div>
              <span
                className="text-xs font-bold px-4 py-2 rounded-full mt-auto transition-all duration-250 group-hover:scale-105"
                style={{
                  background: contact.accent
                    ? "rgba(37,211,102,0.12)"
                    : "rgba(0,212,255,0.08)",
                  color: contact.accent ? "#25d366" : "#00d4ff",
                  border: `1px solid ${contact.accent ? "rgba(37,211,102,0.25)" : "rgba(0,212,255,0.2)"}`,
                }}
              >
                {contact.cta} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;