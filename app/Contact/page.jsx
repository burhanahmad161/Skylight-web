"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 px-8 py-24 max-w-5xl mx-auto rounded-lg shadow-xl mb-16">
      <h1 className="text-5xl font-extrabold text-blue-600 text-center mb-12 tracking-wide">
        Contact Us
      </h1>

      <p className="text-center max-w-3xl mx-auto mb-20 text-gray-400 text-lg leading-relaxed">
        We're here to listen and help you succeed. Whether you have questions, need a custom quote, or want to partner with us, your message is important.
        Reach out today and let’s start building something amazing together.
      </p>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Left: Contact Info */}
        <div className="flex-1 bg-gray-800 bg-opacity-50 rounded-xl p-10 shadow-lg flex flex-col justify-center space-y-10">
          <p className="text-lg text-gray-400 leading-relaxed">
            You can also connect with us on social media or visit our office during business hours. We're committed to responding promptly.
          </p>

          <div className="space-y-8">
            <ContactInfoItem icon={<FaEnvelope />} label="Email" value="contact@skylight.com" href="mailto:contact@skylight.com" />
            <ContactInfoItem icon={<FaPhone />} label="Phone" value="+1 (234) 567-890" href="tel:+1234567890" />
            <ContactInfoItem icon={<FaMapMarkerAlt />} label="Address" value="123 SkyLight Ave, Tech City, USA" />
          </div>

          <div className="pt-6 border-t border-gray-700">
            <p className="mb-4 font-semibold text-gray-300">Follow Us</p>
            <div className="flex space-x-6 text-gray-400">
              <SocialIcon href="https://facebook.com/skylight" icon={<FaFacebookF />} />
              <SocialIcon href="https://twitter.com/skylight" icon={<FaTwitter />} />
              <SocialIcon href="https://linkedin.com/company/skylight" icon={<FaLinkedinIn />} />
              <SocialIcon href="https://instagram.com/skylight" icon={<FaInstagram />} />
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 bg-gray-800 bg-opacity-50 rounded-xl p-10 shadow-lg">
          <form
            action="mailto:contact@skylight.com"
            method="POST"
            encType="text/plain"
            className="space-y-8"
          >
            <FloatingInput label="Full Name" id="name" name="Name" type="text" required />
            <FloatingInput label="Email Address" id="email" name="Email" type="email" required />
            <FloatingTextarea label="Message" id="message" name="Message" required />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition"
            >
              Send Message
            </button>

            <p className="mt-4 text-xs text-gray-500">
              We respect your privacy. Your information will be used solely to respond to your inquiry.
            </p>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-20 bg-gray-800 bg-opacity-40 rounded-xl p-10 shadow-inner">
        <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">Common Questions</h2>
        <ul className="space-y-6 max-w-3xl mx-auto text-gray-300">
          <li>
            <strong>How long does it take to get a response?</strong>
            <p className="mt-1 text-gray-400">
              We typically respond within 24-48 hours during business days.
            </p>
          </li>
          <li>
            <strong>Can I request a custom quote?</strong>
            <p className="mt-1 text-gray-400">
              Absolutely! Provide your project details in the message and we’ll get back with a tailored proposal.
            </p>
          </li>
          <li>
            <strong>What are your business hours?</strong>
            <p className="mt-1 text-gray-400">
              Monday to Friday, 9 AM to 6 PM (Tech City Time Zone).
            </p>
          </li>
        </ul>
      </section>

      {/* Map Placeholder */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Our Location</h2>
        <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-700">
          <iframe
            title="SkyLight Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019367068576!2d-122.41941518468156!3d37.77492977975957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d8917e5ed%3A0xa12f0e2f4e0c34e3!2s123%20Market%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2s!4v1696205469876!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
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
        className="peer block w-full appearance-none bg-gray-900 border border-gray-700 rounded-lg px-4 pt-6 pb-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm cursor-text select-none"
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
        className="peer block w-full resize-none appearance-none bg-gray-900 border border-gray-700 rounded-lg px-4 pt-6 pb-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm cursor-text select-none"
      >
        {label}
      </label>
    </div>
  );
}

function ContactInfoItem({ icon, label, value, href }) {
  return (
    <div className="flex items-center space-x-4 text-gray-300 hover:text-blue-600 transition cursor-default">
      <div className="text-blue-600 text-2xl">{icon}</div>
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
      className="hover:text-blue-500 transition text-2xl"
    >
      {icon}
    </a>
  );
}
