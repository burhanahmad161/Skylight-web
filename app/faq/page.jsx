"use client";
import { useState } from "react";

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
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-cyan-400 mb-10 text-center">Frequently Asked Questions</h1>

      <section className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-5 bg-gray-800 transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <span className="text-cyan-400 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-4 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
