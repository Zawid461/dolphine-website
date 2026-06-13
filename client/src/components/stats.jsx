import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
}

function StatCard({ number, suffix, title, icon }) {
  const numericValue = parseInt(number);
  const [count, ref] = useCountUp(numericValue);

  return (
    <div
      ref={ref}
      className="glass text-center p-10 rounded-2xl transition-all duration-300 group cursor-default"
      style={{ borderRadius: "20px" }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h2
        className="text-6xl font-extrabold mb-3"
        style={{ fontFamily: "'Space Grotesk', sans-serif", background: "linear-gradient(135deg, #00d4ff, #0090ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        {count}{suffix}
      </h2>
      <p className="font-medium text-lg" style={{ color: "var(--text-muted)" }}>{title}</p>
    </div>
  );
}

function Stats() {
  const stats = [
    { number: "500", suffix: "+", title: "Projects Delivered", icon: "🚀" },
    { number: "200", suffix: "+", title: "Happy Clients", icon: "🤝" },
    { number: "5",   suffix: "+", title: "Years Experience", icon: "⚡" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {stats.map((item, i) => (
          <StatCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Stats;