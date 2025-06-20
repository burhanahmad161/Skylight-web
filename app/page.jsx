"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCloud } from "react-icons/fa";
import CloudImage from "../Assets/Cloud.jpg";
import Ecommerce from "../Assets/Ecommerce.jpg";
import Healthcare from "../Assets/health.jpg";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../component/Navbar";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  const words = ["SkyLight", "Confidence", "Innovation", "Speed"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setShowButtons(true), 1800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="bg-[#0B0B0F] min-h-screen text-gray-200 font-sans">
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
              Build, Launch & Grow with
            </h1>
            <span className="relative flex justify-center h-14 w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWordIndex]}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-purple-500 absolute top-0 left-0 right-0 text-center text-5xl sm:text-6xl md:text-7xl font-bold"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>

            {/* Buttons */}
            <div className="h-[80px] flex flex-wrap justify-center items-center gap-4 mt-4">
              {showButtons && (
                <>
                  <motion.a
                    href="/Contact"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all font-semibold shadow-lg">
                      Get in Touch →
                    </button>
                  </motion.a>
                  <motion.a
                    href="/Career"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all font-semibold shadow-lg">
                      Visit Our Portfolio →
                    </button>
                  </motion.a>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-[#16121F] text-[#E5E5E5]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-purple-400 mb-4">Why Choose SkyLight?</h2>
          <p className="text-lg leading-relaxed">
            At SkyLight, we combine technical excellence with deep industry insight to build
            reliable, scalable, and user-centric digital products. Our team is committed to
            delivering high-quality solutions tailored specifically to your business goals.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#0B0B0F] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <FaLaptopCode size={40} className="text-purple-500" />,
                title: "Web Applications",
                desc: "Custom-built, scalable websites and platforms using modern web technologies.",
              },
              {
                icon: <FaMobileAlt size={40} className="text-purple-500" />,
                title: "Mobile Solutions",
                desc: "Intuitive mobile apps for iOS and Android with seamless user experience.",
              },
              {
                icon: <FaCloud size={40} className="text-purple-500" />,
                title: "Cloud Integration",
                desc: "Secure cloud infrastructure and DevOps practices tailored to your growth.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-[#1F1A2D] p-10 rounded-3xl shadow-lg border border-purple-700 flex flex-col items-center text-center hover:shadow-purple-500 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                {service.icon}
                <h3 className="mt-6 text-2xl font-semibold text-purple-500">{service.title}</h3>
                <p className="mt-4 text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience & Clients Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-purple-400 mb-6">Experience</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>10+ years in the software industry</li>
              <li>Delivered 100+ successful projects</li>
              <li>Expertise in React, Next.js, Node.js, AWS & more</li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-purple-400 mb-6">Our Clients</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {[
                "technova",
                "greenwave",
                "bytecraft",
                "nextgen",
                "finedge",
                "healthplus",
              ].map((client) => (
                <motion.div
                  key={client}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center p-4 bg-[#2A213F] rounded-lg shadow-md transition-all duration-300"
                >
                  <img
                    src={`/clients/${client}.png`}
                    alt={`${client} logo`}
                    className="max-h-12 object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-[#0F0C1A] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">Projects We've Delivered</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "E-Commerce Platform",
                desc: "Marketplace for real-time inventory & seamless checkout.",
                img: Ecommerce,
              },
              {
                title: "Healthcare App",
                desc: "Patient management, appointment booking & teleconsultation.",
                img: Healthcare,
              },
              {
                title: "Cloud Migration",
                desc: "Legacy to AWS cloud with automated CI/CD pipelines.",
                img: CloudImage,
              },
            ].map(({ title, desc, img }, i) => (
              <motion.div
                key={i}
                className="bg-[#1C1728] rounded-3xl shadow-lg overflow-hidden hover:shadow-purple-700 transition cursor-pointer"
                whileHover={{ scale: 1.04 }}
              >
                <Image
                  src={img}
                  alt={title}
                  className="w-full h-48 object-cover"
                  width={500}
                  height={500}
                  placeholder="blur"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-purple-500">{title}</h3>
                  <p className="mt-3 text-gray-300">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0B0B0F] py-14 px-6 sm:px-12 md:px-20 text-center text-white">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-4 text-purple-400">Partner with SkyLight Today</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
            Let’s turn your idea into a powerful, modern, and scalable solution. Start your journey with us now.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 font-semibold px-8 py-4 rounded-3xl shadow-xl transition-transform transform hover:scale-105"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
