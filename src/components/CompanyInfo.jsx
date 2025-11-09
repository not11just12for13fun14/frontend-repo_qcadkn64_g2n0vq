import { Building2, Users, BadgeCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function CompanyInfo() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 sm:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 p-3 rounded-xl bg-slate-900 text-white">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">About Veridia.io</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Founded in 2025 by Aryan Kumar (CEO) and Rakesh Sharma (Founding Engineer), alumni of IIIT Hyderabad, Veridia.io set out to raise the bar for technology service firms in India.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We design, develop, and deliver end-to-end tech solutions with a focus on quality, innovation, and reliability. Beyond client projects, we invest in the future by running internships and training programs that prepare students for industry challenges.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Guided by our principle—“Your Dreams, Our Goal”—we align our expertise with client aspirations to drive lasting success.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <Globe className="h-5 w-5" />
                    <a
                      href="https://forms.gle/uCqCS7GvDf7bNinJ6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-slate-300 hover:decoration-slate-600"
                    >
                      Website
                    </a>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 break-all">
                    https://forms.gle/uCqCS7GvDf7bNinJ6
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <BadgeCheck className="h-5 w-5" />
                    Technology, Information and Internet
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <Users className="h-5 w-5" />
                    Company size: 51-200 employees
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <Users className="h-5 w-5" />
                    53 associated members
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
