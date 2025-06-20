"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What does Skylight do?",
      answer:
        "Skylight is a digital solutions company that helps businesses grow through innovative web, mobile, and AI-driven products.",
    },
    {
      question: "Where are you located?",
      answer:
        "We are a fully remote company with team members distributed across the globe. Our headquarters are in New York City.",
    },
    {
      question: "How can I apply for a job?",
      answer:
        "You can visit our Careers page, browse open positions, and submit your application through the provided form.",
    },
    {
      question: "Do you offer remote work opportunities?",
      answer:
        "Yes! All of our roles are remote-friendly with flexible working hours, making it easier to maintain work-life balance.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work across various sectors including e-commerce, healthcare, education, and financial services.",
    },
    {
      question: "How do I get in touch for a project?",
      answer:
        "You can contact us through our Contact page or email us at projects@skylight.com. We typically respond within 48 hours.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#0F0F1A] text-gray-100 py-20 w-full space-y-24 px-4 sm:px-6 md:px-12 mt-12">
      <h1 className="text-5xl font-extrabold text-purple-500 mb-12 text-center">
        Frequently Asked Questions
      </h1>

      <section className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-purple-700 rounded-xl p-5 bg-[#1A1A2E] transition-all hover:shadow-md hover:shadow-purple-800/30"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-semibold text-purple-300">
                {faq.question}
              </span>
              <span className="text-purple-500 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-400"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>
    </main>
  );
}
