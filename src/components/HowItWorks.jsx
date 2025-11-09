import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Post your role",
    desc: "Describe your ideal candidate. Our AI-ready structure helps you craft clear, inclusive listings in minutes.",
  },
  {
    title: "Get matched fast",
    desc: "Candidates discover your job with beautiful search and smart filters designed for relevance.",
  },
  {
    title: "Hire with confidence",
    desc: "Track applicants, review profiles, and move to offer with a clean, collaborative workflow.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">How it works</h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          A simple, modern flow for both teams and candidates—no clutter, just clarity.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
