import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function EnquiryForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", project: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post("https://dolphine-api-m31w.onrender.com/api/enquiry", formData);
      setStatus("success");
      setFormData({ name: "", phone: "", project: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="enquiry" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="section-label">Ready to Begin?</span>
          <h2 className="section-heading">
            Start Your <span>Project</span>
          </h2>
          <div className="neon-divider mx-auto mt-4" />
          <p className="mt-6 text-base" style={{ color: "var(--text-muted)" }}>
            Tell us about your idea and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10"
        >
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Enquiry Sent!
              </h3>
              <p className="mb-8" style={{ color: "var(--text-muted)" }}>
                We'll reach out within 24 hours. Check WhatsApp too!
              </p>
              <button className="btn-outline" onClick={() => setStatus("idle")}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-muted)" }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Rahul Kumar"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-muted)" }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-muted)" }}>
                  Project Details *
                </label>
                <textarea
                  name="project"
                  placeholder="Describe your project idea, department, deadline..."
                  rows="5"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  style={{ resize: "vertical" }}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400 text-center">
                  ⚠️ Something went wrong. Please try WhatsApp instead.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full mt-2"
                style={{ opacity: status === "loading" ? 0.7 : 1 }}
              >
                {status === "loading" ? "Sending..." : "Submit Project Enquiry →"}
              </button>

              <p className="text-center text-xs" style={{ color: "var(--text-dim)" }}>
                Or reach us directly on{" "}
                <a href="https://wa.me/919894141229" className="text-green-400 hover:underline">
                  WhatsApp
                </a>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default EnquiryForm;