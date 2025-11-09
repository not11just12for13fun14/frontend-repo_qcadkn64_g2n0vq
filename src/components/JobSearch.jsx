import { useMemo, useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";

const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "Nova Labs",
    location: "Remote",
    type: "Full-time",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Atlas AI",
    location: "San Francisco, CA",
    type: "Hybrid",
    tags: ["Figma", "UX", "Prototyping"],
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Quanta Cloud",
    location: "New York, NY",
    type: "Full-time",
    tags: ["Python", "ML", "NLP"],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Orbit Systems",
    location: "Remote",
    type: "Contract",
    tags: ["AWS", "Kubernetes", "CI/CD"],
  },
];

export default function JobSearch() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    const l = location.toLowerCase();
    return MOCK_JOBS.filter((j) =>
      (j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q)) &&
      (l ? j.location.toLowerCase().includes(l) : true)
    );
  }, [query, location]);

  return (
    <section id="jobs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2">
              <Search className="h-5 w-5 text-slate-500" />
              <input
                aria-label="Search roles or companies"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search roles, companies..."
                className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-500"
              />
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2">
              <MapPin className="h-5 w-5 text-slate-500" />
              <input
                aria-label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-500"
              />
            </div>
            <button className="h-11 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-medium">Search</button>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((job) => (
            <li key={job.id} className="group border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                  <p className="text-slate-600">{job.company} • {job.location} • {job.type}</p>
                </div>
                <div className="shrink-0 h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 flex items-center justify-center text-white">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Apply</button>
                <button className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50">Save</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
