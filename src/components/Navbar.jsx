import React from 'react';
import { Rocket, Briefcase, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <Rocket className="h-5 w-5 text-cyan-400" />
          <span className="font-semibold tracking-tight">HireSphere</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white transition" href="#features">Features</a>
          <a className="hover:text-white transition" href="#companies">Companies</a>
          <a className="hover:text-white transition" href="#cta">Get the Project</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 px-3 py-1.5 text-sm">
            <Briefcase className="h-4 w-4" /> Jobs
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 px-3 py-1.5 text-sm text-slate-900 font-semibold">
            <User className="h-4 w-4" /> Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
