import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[560px] sm:h-[680px] md:h-[760px]">
        {/* Full-width cover background with Spline */}
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white/90" />

        {/* Centered animated headline */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-6 max-w-3xl"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white/60 text-xs font-medium text-slate-700 mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Dynamic, illustrated hiring experiences
            </motion.div>
            <motion.h1
              className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl text-slate-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              Attract top talent with fluid visuals and a modern workflow
            </motion.h1>
            <motion.p
              className="mt-4 text-slate-700 text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              A full-width animated background sets the tone—sleek, vibrant, and engaging—while you recruit with clarity.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
            >
              <button className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Explore Jobs</button>
              <button className="px-5 py-3 rounded-lg border border-slate-300 bg-white/80 backdrop-blur hover:bg-white">Start Hiring</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
