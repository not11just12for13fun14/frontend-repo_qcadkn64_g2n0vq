import { motion } from "framer-motion";

const items = [
  {
    title: "Role Cards",
    desc: "3D tilt on hover with subtle shine for depth.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Candidate Cards",
    desc: "Glassy surfaces and dynamic shadows.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Recruiter Insights",
    desc: "Peek metrics and actions with motion.",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
  },
];

function TiltCard({ item, idx }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: idx * 0.06, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-40 rounded-xl overflow-hidden">
        <img src={item.img} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-1 text-slate-600">{item.desc}</p>
      </div>
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </motion.div>
  );
}

export default function InteractiveCards() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Interactive 3D Hover</h2>
          <p className="mt-3 text-slate-600">Cards gently tilt and scale to feel tactile and modern.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <TiltCard key={item.title} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
