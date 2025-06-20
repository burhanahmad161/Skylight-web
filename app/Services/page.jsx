"use client";
import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaPaintBrush,
  FaLightbulb,
  FaShoppingCart,
} from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGoogle,
  FaGithub,
  FaDocker,
  FaDatabase,
  FaWordpress,
  FaShopify,
  FaFigma,
  FaGitAlt,
  FaLaravel,
  FaPhp,
  FaJava,
  FaPython,
  FaAndroid,
  FaApple,
  FaLinux,
  FaWindows,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web apps built with the latest technologies to ensure performance and scalability.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile solutions designed for engaging and smooth user experiences.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Cloud infrastructure setup, migration, and management to keep your data safe and accessible.",
      icon: <FaCloud />,
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design services that focus on aesthetics and usability to delight your customers.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Consulting",
      description:
        "Expert advice and strategies to help you optimize your technology stack and business processes.",
      icon: <FaLightbulb />,
    },
    {
      title: "Shopify Development",
      description:
        "Custom Shopify stores and e-commerce solutions tailored to your business needs for seamless online sales.",
      icon: <FaShoppingCart />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechNova",
      quote:
        "SkyLight transformed our digital presence with a stunning website and seamless app. Highly recommend!",
    },
    {
      name: "Michael Lee",
      role: "Product Manager, InnovateX",
      quote:
        "Their cloud migration expertise saved us time and cost while boosting security and performance.",
    },
    {
      name: "Anna Martinez",
      role: "Founder, Creativa Studio",
      quote:
        "The UI/UX design team truly understood our brand and crafted an engaging user experience.",
    },
  ];

  const technologies = [
    { name: "React", icon: <FaReact className="text-blue-400" size={40} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={40} /> },
    { name: "AWS", icon: <FaAws className="text-yellow-400" size={40} /> },
    { name: "Google Cloud", icon: <FaGoogle className="text-blue-600" size={40} /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-100" size={40} /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" size={40} /> },
    { name: "Database", icon: <FaDatabase className="text-purple-400" size={40} /> },
    { name: "WordPress", icon: <FaWordpress className="text-blue-500" size={40} /> },
    { name: "Shopify", icon: <FaShopify className="text-green-600" size={40} /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" size={40} /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" size={40} /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" size={40} /> },
    { name: "PHP", icon: <FaPhp className="text-purple-600" size={40} /> },
    { name: "Java", icon: <FaJava className="text-red-600" size={40} /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" size={40} /> },
    { name: "Android", icon: <FaAndroid className="text-green-700" size={40} /> },
    { name: "Apple", icon: <FaApple className="text-gray-300" size={40} /> },
    { name: "Linux", icon: <FaLinux className="text-white" size={40} /> },
    { name: "Windows", icon: <FaWindows className="text-blue-500" size={40} /> },
  ];

  return (
    <main className="bg-[#0F0F1A] text-gray-100 font-sans">
      <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-6 text-center overflow-hidden text-white bg-gradient-to-br from-[#1F0A3E] via-[#0B0B0F] to-[#1F0A3E]">
        <motion.div
          initial={{ scale: 3, y: 100, opacity: 0, filter: "blur(8px)" }}
          animate={{ scale: 1, y: -40, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="relative z-10 w-full px-4 sm:px-6 md:px-8"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-6 mt-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
              Our Services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
              We offer a broad range of digital solutions to help your business grow and succeed in today's competitive landscape.
            </p>
          </div>
        </motion.div>
      </section>
      {/* Services Section */}
      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-[#1A1A2E] border border-purple-700 rounded-xl p-8 shadow-md hover:shadow-purple-500/30 transition"
          >
            <div className="text-4xl text-purple-400 mb-4">{icon}</div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-400">{description}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-500 mb-6">Why Choose SkyLight?</h2>
        <p className="text-gray-400 text-lg mb-10 px-4">
          We combine technology, creativity, and strategy to build digital solutions that create real impact.
        </p>
        <div className="grid gap-8 md:grid-cols-3 text-left px-4">
          {[
            {
              title: "Client-Centered Approach",
              desc: "We listen, understand your goals, and tailor our solutions accordingly.",
            },
            {
              title: "Cutting-Edge Tech",
              desc: "We stay ahead of trends and implement modern tools to future-proof your business.",
            },
            {
              title: "Reliable Delivery",
              desc: "Timely, quality-focused project execution from start to finish.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-[#1A1A2E] p-6 rounded-xl border border-purple-700">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-24 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-500 mb-12">What Our Clients Say</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map(({ name, role, quote }) => (
            <blockquote
              key={name}
              className="bg-[#1A1A2E] p-8 rounded-xl border border-purple-700 shadow-lg"
            >
              <p className="text-gray-300 italic mb-6">"{quote}"</p>
              <footer className="text-purple-400 font-semibold">{name}</footer>
              <span className="text-gray-400 text-sm">{role}</span>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mt-24 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-purple-500 mb-10">Technologies We Use</h2>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
          {technologies.map(({ name, icon }) => (
            <div key={name} className="flex flex-col items-center space-y-2 w-24">
              {icon}
              <span className="text-gray-400 font-medium">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-28 bg-purple-800 rounded-xl max-w-5xl mx-auto p-12 text-center shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to start your project?</h2>
        <p className="text-purple-200 mb-8 max-w-xl mx-auto">
          Contact us today to get a free consultation and let’s build something amazing together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-800 font-semibold px-8 py-3 rounded-lg hover:bg-purple-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
