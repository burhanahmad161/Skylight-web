"use client";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <main className="bg-gray-900 text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-sky-400">About SkyLight</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
          At SkyLight, we craft cutting-edge digital experiences that empower businesses to grow, scale, and connect with their audience in meaningful ways.
        </p>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-300 mb-8">What We Do</h2>
        <div className="grid gap-10 md:grid-cols-3 text-left">
          {[
            {
              title: "Web Development",
              desc: "Responsive and scalable web solutions tailored to your business needs.",
              icon: "🧱",
            },
            {
              title: "UI/UX Design",
              desc: "Beautiful, intuitive interfaces that put your users first.",
              icon: "🎨",
            },
            {
              title: "Data Analytics",
              desc: "Insightful dashboards and reports to make data-driven decisions.",
              icon: "📊",
            },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-sky-800/40 transition duration-300"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-sky-300 mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-sky-300 mb-12">Our Mission & Vision</h2>
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-16">
          <div className="relative border-l-4 border-sky-400 pl-6">
            <h3 className="text-2xl font-bold text-sky-200 mb-2">Our Mission</h3>
            <p className="text-gray-400">
              Deliver top-tier digital solutions that help businesses thrive in an ever-evolving tech world. We solve real problems through collaboration, creativity, and code.
            </p>
          </div>
          <div className="relative border-l-4 border-sky-400 pl-6">
            <h3 className="text-2xl font-bold text-sky-200 mb-2">Our Vision</h3>
            <p className="text-gray-400">
              Enabling every business to harness modern technology to reach new heights, connect with audiences, and scale efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-800 py-20 px-6">
        <h2 className="text-3xl font-bold text-sky-300 text-center mb-12">Core Values</h2>
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto text-center">
          {[
            { title: "Integrity", desc: "We uphold the highest standards in every project." },
            { title: "Innovation", desc: "We embrace challenges and seek better solutions." },
            { title: "Collaboration", desc: "We believe success is built on teamwork and trust." },
          ].map(({ title, desc }) => (
            <div key={title} className="p-6 bg-gray-900 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-300 mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-300 text-center mb-12">Meet Our Team</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              name: "Alice Johnson",
              role: "CEO",
              bio: "Leading vision and strategy with over 15 years of experience.",
              socials: [<FaLinkedin />, <FaTwitter />],
            },
            {
              name: "Michael Lee",
              role: "CTO",
              bio: "Tech innovator passionate about building scalable solutions.",
              socials: [<FaGithub />, <FaLinkedin />],
            },
            {
              name: "Sara Kim",
              role: "Head of Design",
              bio: "Crafting beautiful and user-friendly interfaces.",
              socials: [<FaLinkedin />],
            },
          ].map(({ name, role, bio, socials }) => (
            <div
              key={name}
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 text-center hover:scale-[1.02] transition-transform"
            >
              <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-sky-700 flex items-center justify-center text-white text-2xl font-bold">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-xl font-semibold text-gray-100">{name}</h3>
              <p className="text-sky-400 font-medium">{role}</p>
              <p className="mt-2 text-gray-400 text-sm">{bio}</p>
              <div className="flex justify-center gap-4 mt-4 text-sky-400 text-lg">
                {socials.map((icon, i) => (
                  <span key={i} className="hover:text-sky-300 transition">{icon}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
