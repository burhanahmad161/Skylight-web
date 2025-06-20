"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0F0F1A] text-gray-300 px-6 md:px-10 py-24 w-full space-y-24 mt-12">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-extrabold text-purple-500 text-center mb-6 tracking-wide">
        Contact Us
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-center max-w-3xl mx-auto mb-16 text-gray-400 text-lg leading-relaxed">
        We’re here to listen and help you succeed. Whether you have questions, need a custom quote, or want to partner with us — your message is important.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-[#1A1A2E] rounded-xl p-10 shadow-lg"
        >
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            You can also connect with us on social media or visit our office during business hours. We're committed to responding promptly.
          </p>

          <div className="space-y-8">
            <ContactInfoItem icon={<FaEnvelope />} label="Email" value="contact@skylight.com" href="mailto:contact@skylight.com" />
            <ContactInfoItem icon={<FaPhone />} label="Phone" value="+1 (234) 567-890" href="tel:+1234567890" />
            <ContactInfoItem icon={<FaMapMarkerAlt />} label="Address" value="169B Architect Engineering housing society, Lahore Pakistan" />
          </div>

          <div className="pt-8 border-t border-purple-700 mt-8">
            <p className="mb-4 font-semibold text-gray-300">Follow Us</p>
            <div className="flex space-x-6 text-gray-400">
              <SocialIcon href="https://facebook.com/skylight" icon={<FaFacebookF />} />
              <SocialIcon href="https://twitter.com/skylight" icon={<FaTwitter />} />
              <SocialIcon href="https://linkedin.com/company/skylight" icon={<FaLinkedinIn />} />
              <SocialIcon href="https://instagram.com/skylight" icon={<FaInstagram />} />
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-[#1A1A2E] rounded-xl p-10 shadow-lg"
        >
          <form
            action="mailto:contact@skylight.com"
            method="POST"
            encType="text/plain"
            className="space-y-8"
          >
            <FloatingInput label="Full Name" id="name" name="Name" type="text" required />
            <FloatingInput label="Email Address" id="email" name="Email" type="email" required />
            <FloatingTextarea label="Message" id="message" name="Message" required />

            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-lg transition">
              Send Message
            </button>

            <p className="mt-4 text-xs text-gray-500">
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
          </form>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1A1A2E] rounded-xl p-10 shadow-inner"
      >
        <h2 className="text-3xl font-semibold text-purple-500 mb-8 text-center">Common Questions</h2>
        <ul className="space-y-6 max-w-3xl mx-auto text-gray-300">
          <li>
            <strong>How long does it take to get a response?</strong>
            <p className="mt-1 text-gray-400">We typically respond within 24-48 hours during business days.</p>
          </li>
          <li>
            <strong>Can I request a custom quote?</strong>
            <p className="mt-1 text-gray-400">Absolutely! Provide your project details and we’ll reply with a proposal.</p>
          </li>
          <li>
            <strong>What are your business hours?</strong>
            <p className="mt-1 text-gray-400">Monday to Friday, 9 AM to 6 PM (Tech City Time Zone).</p>
          </li>
        </ul>
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-purple-500 mb-6 text-center">Our Location</h2>
        <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-purple-700">
          <iframe
            title="SkyLight Location"
            src="https://www.google.com/maps?q=169B%20Architect%20Engineering%20housing%20society,%20Lahore%20Pakistan&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </motion.section>
    </main>
  );
}

function FloatingInput({ label, id, name, type, required }) {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder=" "
        className="peer block w-full appearance-none bg-[#0F0F1A] border border-gray-700 rounded-lg px-4 pt-6 pb-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500"
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ label, id, name, required }) {
  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        rows="5"
        required={required}
        placeholder=" "
        className="peer block w-full resize-none appearance-none bg-[#0F0F1A] border border-gray-700 rounded-lg px-4 pt-6 pb-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500"
      >
        {label}
      </label>
    </div>
  );
}

function ContactInfoItem({ icon, label, value, href }) {
  return (
    <div className="flex items-center space-x-4 text-gray-300 hover:text-purple-400 transition cursor-default">
      <div className="text-purple-500 text-2xl">{icon}</div>
      <div>
        <p className="text-sm font-semibold">{label}</p>
        {href ? (
          <a href={href} className="text-base hover:underline break-all">
            {value}
          </a>
        ) : (
          <p className="text-base">{value}</p>
        )}
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-purple-500 transition text-2xl"
    >
      {icon}
    </a>
  );
}
