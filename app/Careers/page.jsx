"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import FAQPage from "../faq/page";

export default function Career() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote / New York, NY",
      description:
        "We’re looking for a skilled Frontend Developer experienced in React and Next.js to build seamless user experiences.",
    },
    {
      id: 2,
      title: "Backend Engineer",
      location: "Remote / San Francisco, CA",
      description:
        "Join our backend team to design scalable APIs and work with Node.js, Express, and databases.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote / London, UK",
      description:
        "Creative designers wanted to craft intuitive, beautiful interfaces for our web and mobile apps.",
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (selectedJob && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedJob]);

  return (
    // <main className="bg-[#0F0F1A] text-gray-100 space-y-24 sm:px-6 md:px-12">
     <main className="bg-[#0F0F1A] text-gray-100 font-sans space-y-24">
        <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-6 text-center overflow-hidden text-white bg-gradient-to-br from-[#1F0A3E] via-[#0B0B0F] to-[#1F0A3E]">
          <motion.div
            initial={{ scale: 3, y: 100, opacity: 0, filter: "blur(8px)" }}
            animate={{ scale: 1, y: -40, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="relative z-10 w-full px-4 sm:px-6 md:px-8"
          >
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-6 mt-32">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
                Build the Future with SkyLight
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
                At SkyLight, we’re redefining what it means to work remotely and collaboratively. If you're passionate, curious, and love solving real-world problems — we want you on our team.

              </p>
            </div>
          </motion.div>
        </section>
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-8 text-center">
          {["Innovation", "Integrity", "Inclusivity"].map((title, index) => (
            <div key={index} className="p-6 border border-purple-700 rounded-xl bg-[#1A1A2E]">
              <h3 className="text-xl font-bold text-purple-400 mb-2">{title}</h3>
              <p className="text-gray-300">
                {title === "Innovation"
                  ? "We create cutting-edge solutions that transform industries."
                  : title === "Integrity"
                    ? "We operate with honesty and transparency in everything we do."
                    : "We value diverse perspectives and equal opportunity."}
              </p>
            </div>
          ))}
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-purple-500 mb-10 text-center">Open Positions</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {jobs.map((job) => (
              <motion.article
                key={job.id}
                tabIndex={0}
                role="button"
                aria-pressed={selectedJob?.id === job.id}
                onClick={() => setSelectedJob(job)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedJob(job);
                }}
                whileHover={{ scale: 1.02 }}
                className="border border-purple-700 bg-[#1A1A2E] rounded-xl p-6 shadow-md cursor-pointer hover:shadow-purple-500/40 transition focus:outline-none focus:ring-4 focus:ring-purple-600"
              >
                <h3 className="text-xl font-semibold text-gray-100 mb-1">{job.title}</h3>
                <p className="text-purple-400 font-medium mb-3">{job.location}</p>
                <p className="text-gray-300 text-sm">{job.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-4xl font-bold text-purple-500 mb-8">Perks & Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["100% Remote Work", "Flexible Hours", "Competitive Salary", "Learning Budget", "Health Insurance", "Annual Retreats"].map((perk, i) => (
              <div key={i} className="border border-purple-700 p-6 rounded-xl bg-[#1A1A2E]">
                <p className="text-gray-300 font-medium">{perk}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {selectedJob && (
          <motion.section ref={formRef} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-live="polite" className="max-w-3xl mx-auto p-10 border border-purple-700 rounded-xl shadow-lg bg-[#1A1A2E]">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Apply for {selectedJob.title}</h2>

            <form
              action="mailto:careers@skylight.com"
              method="POST"
              encType="text/plain"
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Application sent! We will be in touch.");
                setSelectedJob(null);
                e.target.reset();
              }}
            >
              <div>
                <label htmlFor="fullname" className="block mb-2 font-semibold text-gray-100">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input type="text" id="fullname" required placeholder="Your full name" className="w-full px-4 py-3 bg-[#0F0F1A] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-100">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input type="email" id="email" required placeholder="you@example.com" className="w-full px-4 py-3 bg-[#0F0F1A] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>

              <div>
                <label htmlFor="resumeLink" className="block mb-2 font-semibold text-gray-100">Resume Link</label>
                <input type="url" id="resumeLink" placeholder="Paste a link to your resume" className="w-full px-4 py-3 bg-[#0F0F1A] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>

              <div>
                <label htmlFor="resumeFile" className="block mb-2 font-semibold text-gray-100">Or Upload Resume (PDF, DOCX)</label>
                <input type="file" id="resumeFile" accept=".pdf,.doc,.docx" className="w-full text-gray-300 bg-[#0F0F1A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>

              <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400 transition">
                Submit Application
              </button>
            </form>

            <button onClick={() => setSelectedJob(null)} className="mt-8 text-purple-400 underline hover:text-purple-300 focus:outline-none">
              ← Back to job listings
            </button>
          </motion.section>
        )}

        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <FAQPage />
        </motion.section>
      </main>
      );
}