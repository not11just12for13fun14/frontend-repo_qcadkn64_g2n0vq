import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Delightful UX',
    desc: 'Framer Motion driven micro-interactions keep candidates engaged.',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Backend-first architecture with CORS and typed schemas.',
  },
  {
    icon: Globe,
    title: 'Scalable',
    desc: 'Ready for cloud deploys and environment-based configuration.',
  },
];

const InteractiveCards = () => {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <f.icon className="h-6 w-6 text-cyan-400" />
              <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
              <p className="mt-1 text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveCards;
