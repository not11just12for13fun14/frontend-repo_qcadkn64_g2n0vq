import { motion } from "framer-motion";

const illustrations = [
  {
    title: "Smart job cards",
    desc: "Clean, visual-first listings that highlight what matters.",
    image:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Candidate profiles",
    desc: "Rich, media-friendly profiles with instant insights.",
    image:
      "https://images.unsplash.com/photo-1551281044-8d8c5aa0a88f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Team collaboration",
    desc: "Comments, ratings, and stages—kept beautifully simple.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
];

function MarqueeRow({ speed = 40, reverse = false }) {
  const duration = gallery.length * speed; // seconds
  const duplicated = [...gallery, ...gallery];
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-4"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        style={{ width: "200%" }}
      >
        {duplicated.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="gallery"
            className="h-40 sm:h-48 md:h-56 w-auto rounded-xl object-cover select-none"
            draggable={false}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Illustrated experiences that feel alive
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Smooth animations, continuous visuals, and delightful micro-interactions keep candidates engaged.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {illustrations.map((card) => (
            <motion.div
              key={card.title}
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-44">
                <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-1 text-slate-600">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 space-y-4">
          <MarqueeRow speed={8} />
          <MarqueeRow speed={10} reverse />
        </div>
      </div>
    </section>
  );
}
