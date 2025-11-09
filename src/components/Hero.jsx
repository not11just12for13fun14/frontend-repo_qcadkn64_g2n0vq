import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[540px] sm:h-[640px] md:h-[720px]">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-6 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white/60 text-xs font-medium text-slate-700 mb-5">
              Next-gen hiring platform
            </div>
            <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl text-slate-900">
              Find top talent faster with an interactive, AI-ready hiring platform
            </h1>
            <p className="mt-4 text-slate-700 text-base sm:text-lg">
              Engage candidates with immersive visuals and streamline recruiting—from job posting to offer—on one sleek, modern interface.
            </p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
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
