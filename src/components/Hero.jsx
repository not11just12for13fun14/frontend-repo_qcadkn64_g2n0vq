import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || '';
  const downloadHref = backendUrl ? `${backendUrl.replace(/\/$/, '')}/download/project-zip` : '';

  return (
    <section className="relative" id="cta">
      <div className="h-[72vh] md:h-[80vh] relative">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/4xYkH2c7s8h2Iy8k/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/60 to-slate-950 pointer-events-none" />

        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Hire talent with style.
              </h1>
              <p className="text-slate-300 max-w-xl">
                A modern, animated hiring experience powered by React, Tailwind, Spline 3D, and a FastAPI backend.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {downloadHref ? (
                  <a
                    href={downloadHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 px-4 py-2 font-semibold text-slate-900 shadow-lg shadow-cyan-500/20"
                  >
                    <Download className="h-5 w-5" /> Download Project ZIP
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-white/70">
                    <Download className="h-5 w-5" /> Set VITE_BACKEND_URL to enable download
                  </span>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hidden md:block"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <h3 className="text-lg font-semibold mb-2">What you get</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Responsive React UI with Tailwind</li>
                  <li>3D Spline hero with smooth animations</li>
                  <li>FastAPI backend with ZIP download endpoint</li>
                  <li>Clean component structure ready to extend</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
