"use client";
import Image from "next/image";
import Foun from "../../Assets/Cloud.jpg";
import adham from "../../Assets/Team/adham.jpg";
import qallab from "../../Assets/Team/qalab.jpg";
import saima from "../../Assets/Team/saima.jpg";
import adil from "../../Assets/Team/adil.jpg";
import hasnain from "../../Assets/Team/hasnain.jpg";
import khaled from "../../Assets/Team/khaled.jpg";
import omar from "../../Assets/Team/omar.jpg";
import sidra from "../../Assets/Team/sidra.jpg";
import umar from "../../Assets/Team/umar.jpg";
import cargo from "../../Assets/Team/cargo.jpg";
import falcon from "../../Assets/Team/falconfly.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  return (
    <main className="bg-[#0F0F1A] text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-6 text-center overflow-hidden text-white bg-gradient-to-br from-[#1F0A3E] via-[#0B0B0F] to-[#1F0A3E]">
        <motion.div
          initial={{ scale: 3, y: 100, opacity: 0, filter: "blur(8px)" }}
          animate={{ scale: 1, y: -40, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="relative z-10 w-full px-4 sm:px-6 md:px-8"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-6 mt-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
              About SkyLight
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
              At SkyLight, we craft cutting-edge digital experiences that empower businesses to grow, scale, and connect with their audience in meaningful ways.
            </p>
          </div>
        </motion.div>
      </section>
      {/* What We Do */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-500 mb-8">What We Do</h2>
        <div className="grid gap-10 md:grid-cols-3 text-left">
          {[{ title: "Web Development", desc: "Responsive and scalable web solutions tailored to your business needs.", icon: "🧱" }, { title: "UI/UX Design", desc: "Beautiful, intuitive interfaces that put your users first.", icon: "🎨" }, { title: "Data Analytics", desc: "Insightful dashboards and reports to make data-driven decisions.", icon: "📊" }].map(({ title, desc, icon }) => (
            <div key={title} className="bg-[#1A1A2E] rounded-xl p-6 border border-purple-700 shadow-md hover:shadow-purple-500/30 transition duration-300">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-purple-500 mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-500 mb-12">Our Mission & Vision</h2>
        <div className="space-y-12 md:grid md:grid-cols-2 md:gap-16">
          {[{ title: "Our Mission", desc: "Deliver top-tier digital solutions that help businesses thrive in an ever-evolving tech world. We solve real problems through collaboration, creativity, and code." }, { title: "Our Vision", desc: "Enabling every business to harness modern technology to reach new heights, connect with audiences, and scale efficiently." }].map(({ title, desc }) => (
            <div key={title} className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-bold text-purple-300 mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#1A1A2E] py-20 px-6">
        <h2 className="text-3xl font-bold text-purple-500 text-center mb-12">Core Values</h2>
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto text-center">
          {[{ title: "Integrity", desc: "We uphold the highest standards in every project." }, { title: "Innovation", desc: "We embrace challenges and seek better solutions." }, { title: "Collaboration", desc: "We believe success is built on teamwork and trust." }].map(({ title, desc }) => (
            <div key={title} className="p-6 bg-[#0F0F1A] border border-purple-700 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-500 mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-500 text-center mb-12">Our Partners</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {[{ name: "Cargo Logistics", description: "Leading logistics provider with a global reach.", website: "https://zipboxcargologistics.com/", logo: Foun }, { name: "Falconfly Technologies", description: "Empowering businesses with cutting-edge technology solutions.", website: "https://www.falconflytechnology.com/", logo: falcon }, { name: "Skylight Glass", description: "Innovative glass solutions for modern architecture.", website: "https://skylight-ksa-svkh.vercel.app/", logo: cargo }].map(({ name, description, website, logo }) => (
            <div key={name} className="bg-[#1A1A2E] p-6 rounded-xl shadow-lg border border-purple-700 text-center hover:scale-[1.02] transition-transform">
              <div className="h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={logo} alt={name} width={76} height={76} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100">{name}</h3>
              <p className="text-gray-400 mt-2 mb-4 text-sm">{description}</p>
              <a href={website} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                Visit
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-500 text-center mb-12">Meet Our Leadership</h2>
        <div className="flex justify-center text-center mb-12">
          <div>
            <div className="bg-[#1A1A2E] p-6 rounded-xl shadow-lg border border-purple-700 hover:scale-[1.02] transition-transform">
              <div className="h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={adham} alt="Adham M Ibrahim Sindi" width={96} height={96} className="object-cover w-full h-full rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100">Adham M Ibrahim Sindi</h3>
              <p className="text-green-400 font-medium">Founder</p>
              <p className="mt-2 text-gray-400 text-sm">Visionary entrepreneur driving innovation and building lasting partnerships for business excellence.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {[{ name: "Qallab Abbas", role: "Founder and CEO", bio: "Leading vision and strategy with over 15 years of experience.", image: qallab }, { name: "Saima Tariq", role: "General Manager", bio: "Results-driven sales leader with a proven track record of driving revenue growth and building high-performing teams.", image: saima }, { name: "Qallab Abbas.", role: "Chief Operations Officer", bio: "Operations expert streamlining our processes for maximum efficiency.", image: qallab }].map(({ name, role, bio, image }) => (
            <div key={name} className="bg-[#1A1A2E] p-6 rounded-xl shadow-lg border border-purple-700 text-center hover:scale-[1.02] transition-transform">
              <div className="h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={image} alt={name} width={96} height={96} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100">{name}</h3>
              <p className="text-purple-400 font-medium">{role}</p>
              <p className="mt-2 text-gray-400 text-sm">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Development Team Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-500 text-center mb-12">Inside Skylight</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {[{ name: "Umar Javed", role: "Marketing Manager", bio: "Leading vision and strategy with over 15 years of experience.", image: umar }, { name: "Ar Hasnain Ashraf", role: "General Manager", bio: "Results-driven sales leader with a proven track record of driving revenue growth and building high-performing teams.", image: hasnain }, { name: "Khaled Saad", role: "Chief Operations Officer", bio: "Operations expert streamlining our processes for maximum efficiency.", image: khaled }, { name: "Omar Al Turk (Abu Ghazi)", role: "Site Engineer", bio: "Leading vision and strategy with over 15 years of experience.", image: omar }, { name: "Sidra Tabassum", role: "Architect Engineer", bio: "Results-driven sales leader with a proven track record of driving revenue growth and building high-performing teams.", image: sidra }, { name: "Adil Javed", role: "Civil Engineer", bio: "Operations expert streamlining our processes for maximum efficiency.", image: adil }].map(({ name, role, bio, image }) => (
            <div key={name} className="bg-[#1A1A2E] p-6 rounded-xl shadow-lg border border-purple-700 text-center hover:scale-[1.02] transition-transform">
              <div className="h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={image} alt={name} width={96} height={96} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100">{name}</h3>
              <p className="text-purple-400 font-medium">{role}</p>
              <p className="mt-2 text-gray-400 text-sm">{bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
