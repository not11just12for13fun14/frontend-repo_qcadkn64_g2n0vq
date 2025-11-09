import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const Card = ({ title, desc, img, y }) => (
    <motion.div style={{ y }} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <img src={img} alt={title} className="h-56 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-slate-600">{desc}</p>
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Parallax Scenes</h2>
          <p className="mt-3 text-slate-600">Soft layered motion adds depth as you scroll.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Interactive listings"
            desc="Hover, expand, and glide through roles with ease."
            img="https://images.unsplash.com/photo-1551817958-20204d6ab150?q=80&w=1200&auto=format&fit=crop"
            y={y1}
          />
          <Card
            title="Visual pipelines"
            desc="Track candidates with satisfying motion cues."
            img="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop"
            y={y2}
          />
          <Card
            title="Insightful profiles"
            desc="Media, skills, and timelines — clearly presented."
            img="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
            y={y3}
          />
        </div>
      </div>
    </section>
  );
}
