import { Rocket, Briefcase, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 flex items-center justify-center shadow-inner">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">HireFlow</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#jobs" className="hover:text-slate-900 transition-colors">Jobs</a>
          <a href="#how" className="hover:text-slate-900 transition-colors">How it works</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
            <Briefcase className="h-4 w-4" />
            Post a Job
          </button>
        </div>
      </div>
    </header>
  );
}
