"use client";
import { useState } from "react";

export default function Support() {
  const topics = [
    "Technical Issue",
    "Billing & Payments",
    "Partnerships",
    "Career Queries",
    "Project Requests",
    "General Inquiry",
  ];

  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-blue-600 mb-8 text-center">Support</h1>
      <p className="text-center text-gray-400 max-w-xl mx-auto mb-10">
        Need help? We’re here for you. Browse common topics or send us a direct message below.
      </p>

      {/* Help Topics */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Common Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topics.map((topic, i) => (
            <button
              key={i}
              onClick={() => setSelectedTopic(topic)}
              className={`px-4 py-3 rounded-lg border border-cyan-600 text-sm font-medium transition ${
                selectedTopic === topic
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-800 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Contact Support</h2>
        <form
          action="mailto:support@skylight.com"
          method="POST"
          encType="text/plain"
          onSubmit={() => alert("Your message has been sent!")}
          className="space-y-6"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-300">Your Name</label>
            <input
              type="text"
              name="Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              name="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-300">
              Message {selectedTopic && `(Related to ${selectedTopic})`}
            </label>
            <textarea
              name="Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-cyan-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer Note */}
      <p className="text-sm text-center text-gray-500 mt-10">
        Or email us directly at{" "}
        <a href="mailto:support@skylight.com" className="text-blue-600 underline">
          support@skylight.com
        </a>{" "}
        — we usually respond within 24–48 hours.
      </p>
    </main>
  );
}
