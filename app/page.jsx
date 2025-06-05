"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCloud } from "react-icons/fa";
import CloudImage from "../Assets/Cloud.jpg";
import Ecommerce from "../Assets/Ecommerce.jpg";
import Healthcare from "../Assets/health.jpg";
import IMG1 from "../Assets/IMG1.jpg";
import IMG2 from "../Assets/IMG2.jpg";
import IMG3 from "../Assets/IMG3.jpg";
import { useState, useEffect } from "react";
import Image from "next/image";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [IMG1, IMG2, IMG3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gray-900 min-h-screen text-gray-200">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 text-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0 transition-opacity duration-1000">
          <Image
            src={images[currentImageIndex]}
            alt="Background"
            className="object-cover blur-sm"
            priority
            fill
            quality={90}   // increase quality if needed
          />
          <div className="absolute inset-0 blur-2xl" />
        </div>

        {/* Foreground Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Empowering Innovation with{" "}
            <span className="text-blue-600">SkyLight</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We craft cutting-edge digital solutions that elevate your business and
            transform your vision into reality.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block px-8 py-4 rounded-3xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-xl transition-transform transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>


      {/* About Section */}
      <section className="py-20 px-6 bg-gray-800">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose SkyLight?</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At SkyLight, we combine technical excellence with deep industry insight to build
            reliable, scalable, and user-centric digital products. Our team is committed to
            delivering high-quality solutions tailored specifically to your business goals.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <FaLaptopCode size={40} className="text-blue-600" />,
                title: "Web Applications",
                desc: "Custom-built, scalable websites and platforms using modern web technologies.",
              },
              {
                icon: <FaMobileAlt size={40} className="text-blue-600" />,
                title: "Mobile Solutions",
                desc: "Intuitive mobile apps for iOS and Android with seamless user experience.",
              },
              {
                icon: <FaCloud size={40} className="text-blue-600" />,
                title: "Cloud Integration",
                desc: "Secure cloud infrastructure and DevOps practices tailored to your growth.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-gray-800 p-10 rounded-3xl shadow-lg border border-indigo-700 flex flex-col items-center text-center hover:shadow-indigo-600 transition cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #7c3aed" }}
              >
                {service.icon}
                <h3 className="mt-6 text-2xl font-semibold text-blue-600">{service.title}</h3>
                <p className="mt-4 text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience & Clients */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Experience</h2>
            <p className="text-lg mb-4">
              Over 10+ years of industry experience delivering robust software solutions for startups to enterprises.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Delivered 100+ successful projects across various domains</li>
              <li>Expertise in modern tech stacks including React, Next.js, Node.js, and cloud platforms</li>
              <li>Proven track record of scalable, maintainable, and secure software architecture</li>
            </ul>
          </div>

          {/* Clients Column */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Clients</h2>
            <p className="text-lg mb-8">
              Proudly partnered with industry leaders and innovative startups worldwide.
            </p>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {[
                { name: "TechNova", logo: "/clients/technova.png" },
                { name: "GreenWave", logo: "/clients/greenwave.png" },
                { name: "ByteCraft", logo: "/clients/bytecraft.png" },
                { name: "NextGen", logo: "/clients/nextgen.png" },
                { name: "FinEdge", logo: "/clients/finedge.png" },
                { name: "HealthPlus", logo: "/clients/healthplus.png" },
              ].map(({ name, logo }) => (
                <motion.div
                  key={name}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`${name} logo`}
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
      <section className="py-20 bg-gray-800 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">Projects We've Delivered</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "E-Commerce Platform",
                desc: "A scalable marketplace supporting thousands of users with real-time inventory and seamless checkout.",
                img: Ecommerce,
              },
              {
                title: "Healthcare App",
                desc: "Mobile solution for patient management with appointment scheduling and teleconsultation.",
                img: Healthcare,
              },
              {
                title: "Cloud Migration",
                desc: "Migrated legacy infrastructure to AWS cloud with automated CI/CD pipelines.",
                img: CloudImage,
              },
            ].map(({ title, desc, img }, i) => (
              <motion.div
                key={i}
                className="bg-gray-900 rounded-3xl shadow-lg overflow-hidden hover:shadow-indigo-700 transition cursor-pointer"
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
                  <h3 className="text-2xl font-semibold text-blue-600">{title}</h3>
                  <p className="mt-3 text-gray-300">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 py-10 px-6 sm:px-12 md:px-20 text-center text-white">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-4">Partner with SkyLight Today</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Let’s turn your idea into a powerful, modern, and scalable solution. Start your journey with us now.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 font-semibold px-8 py-4 rounded-3xl shadow-xl transition-transform transform hover:scale-105"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
