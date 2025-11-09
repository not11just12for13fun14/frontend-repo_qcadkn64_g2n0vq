import React from 'react';
import { Building2, Mail } from 'lucide-react';

const CompanyInfo = () => {
  return (
    <section id="companies" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
            <Building2 className="h-6 w-6 text-cyan-400" /> Why HireSphere
          </h2>
          <p className="text-slate-300">
            Showcase roles with motion, highlight culture visually, and give candidates a delightful application flow. Built with modern tooling so your team can move fast.
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>Production-ready React + Tailwind foundation</li>
            <li>3D hero that feels premium without being heavy</li>
            <li>Backend wired for file delivery and future APIs</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="font-semibold">Questions?</h3>
          <p className="text-slate-300 mt-1">We can adapt this starter into a full ATS, integrate auth, dashboards, and more.</p>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 mt-4 rounded-md bg-white/10 hover:bg-white/20 px-4 py-2">
            <Mail className="h-4 w-4" /> Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
