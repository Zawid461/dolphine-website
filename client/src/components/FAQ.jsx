import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you provide final year projects?",
    answer: "Yes — we provide complete final year projects for ECE, CSE, EEE, Mechanical, and IT departments. Everything is included: hardware setup, working model, code, documentation, and presentation support.",
  },
  {
    question: "Do you develop IoT projects?",
    answer: "Absolutely. IoT and embedded systems are our core strength. We work with Arduino, ESP32, Raspberry Pi, NodeMCU, and custom PCBs to build robust, real-world solutions.",
  },
  {
    question: "Can you customise projects to my requirements?",
    answer: "Yes, every project we build is fully customised. We don't sell off-the-shelf kits. Share your requirements and we'll design and build exactly what you need.",
  },
  {
    question: "How long does a project take to complete?",
    answer: "Timelines vary by complexity. Simple projects take 3–7 days; complex multi-module systems may take 2–4 weeks. We'll give you a clear timeline upfront before starting.",
  },
  {
    question: "Do you provide support after delivery?",
    answer: "Yes. We offer post-delivery support for debugging, viva preparation, and any required modifications. WhatsApp support is available throughout.",
  },
  {
    question: "What are your payment terms?",
    answer: "We typically work with 50% upfront and 50% on delivery. For larger projects, milestone-based payments can be arranged. Contact us to discuss your needs.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className="glass rounded-2xl overflow-hidden transition-all duration-300"
      style={{ borderColor: isOpen ? "rgba(0,212,255,0.4)" : undefined }}
    >
      <button
        className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
        onClick={onClick}
      >
        <span className="font-semibold text-base text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {question}
        </span>
        <span
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300"
          style={{
            background: isOpen ? "linear-gradient(135deg,#00d4ff,#0090ff)" : "rgba(0,212,255,0.08)",
            color: isOpen ? "#000" : "#00d4ff",
            border: "1px solid rgba(0,212,255,0.25)",
          }}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-8 pb-7 text-sm leading-7" style={{ color: "var(--text-muted)" }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Got Questions?</span>
          <h2 className="section-heading">
            Frequently <span>Asked</span>
          </h2>
          <div className="neon-divider mx-auto mt-4" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;