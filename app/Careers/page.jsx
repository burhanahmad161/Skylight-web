"use client";
import { useState, useRef, useEffect } from "react";
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
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-20 max-w-6xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">
          Build the Future with Us
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          At SkyLight, we’re redefining what it means to work remotely and
          collaboratively. If you're passionate, curious, and love solving
          real-world problems — we want you on our team.
        </p>
      </section>

      {/* Values Section */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        {[
          { title: "Innovation", desc: "We create cutting-edge solutions that transform industries." },
          { title: "Integrity", desc: "We operate with honesty and transparency in everything we do." },
          { title: "Inclusivity", desc: "We value diverse perspectives and equal opportunity." },
        ].map((item, index) => (
          <div key={index} className="p-6 border border-gray-700 rounded-xl bg-gray-800">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Open Positions */}
      <section>
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          Open Positions
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.id}
              tabIndex={0}
              role="button"
              aria-pressed={selectedJob?.id === job.id}
              onClick={() => setSelectedJob(job)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedJob(job);
              }}
              className="border border-gray-700 rounded-xl p-6 shadow-md cursor-pointer hover:shadow-cyan-500/50 transition focus:outline-none focus:ring-4 focus:ring-cyan-500"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-1">{job.title}</h3>
              <p className="text-cyan-400 font-medium mb-3">{job.location}</p>
              <p className="text-gray-300 text-sm">{job.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">Perks & Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "100% Remote Work",
            "Flexible Hours",
            "Competitive Salary",
            "Learning Budget",
            "Health Insurance",
            "Annual Retreats",
          ].map((perk, i) => (
            <div key={i} className="border border-gray-700 p-6 rounded-xl bg-gray-800">
              <p className="text-gray-300 font-medium">{perk}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      {selectedJob && (
        <section
          ref={formRef}
          aria-live="polite"
          className="max-w-3xl mx-auto p-10 border border-gray-700 rounded-xl shadow-lg bg-gray-800"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Apply for {selectedJob.title}
          </h2>

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
              <input
                type="text"
                id="fullname"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-100">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="resumeLink" className="block mb-2 font-semibold text-gray-100">
                Resume Link
              </label>
              <input
                type="url"
                id="resumeLink"
                placeholder="Paste a link to your resume"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="resumeFile" className="block mb-2 font-semibold text-gray-100">
                Or Upload Resume (PDF, DOCX)
              </label>
              <input
                type="file"
                id="resumeFile"
                accept=".pdf,.doc,.docx"
                className="w-full text-gray-300 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 text-gray-100 font-semibold py-3 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-400 transition"
            >
              Submit Application
            </button>
          </form>

          <button
            onClick={() => setSelectedJob(null)}
            className="mt-8 text-cyan-400 underline hover:text-cyan-600 focus:outline-none"
          >
            ← Back to job listings
          </button>
        </section>
      )}

      {/* FAQs */}
      <section>
        <FAQPage />
      </section>
    </main>
  );
}
