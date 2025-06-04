// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* Company Info */}
        <div className="mb-10 md:mb-0 md:w-1/3">
          <h2 className="text-3xl font-extrabold text-blue-600 tracking-wide">SkyLight</h2>
          <p className="mt-4 text-gray-400 max-w-sm leading-relaxed">
            Innovating your digital future with smart, scalable technology solutions.  
            We build meaningful connections through technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-10 md:w-2/3 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/" className="hover:text-blue-500 transition duration-300">Home</a>
              </li>
              <li>
                <a href="/About" className="hover:text-blue-500 transition duration-300">About Us</a>
              </li>
              <li>
                <a href="/Services" className="hover:text-blue-500 transition duration-300">Services</a>
              </li>
              <li>
                <a href="/Careers" className="hover:text-blue-500 transition duration-300">Careers</a>
              </li>
              <li>
                <a href="/Contact" className="hover:text-blue-500 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/faq" className="hover:text-blue-500 transition duration-300">FAQ</a>
              </li>
              <li>
                <a href="/Support" className="hover:text-blue-500 transition duration-300">Support</a>
              </li>
              <li>
                <a href="/Privacy" className="hover:text-blue-500 transition duration-300">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>123 SkyLight Ave, Tech City, USA</li>
              <li>
                <a href="mailto:contact@skylight.com" className="hover:text-blue-500 transition duration-300">
                  contact@skylight.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-blue-500 transition duration-300">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://twitter.com/skylight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/skylight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/skylight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} SkyLight. All rights reserved.
      </div>
    </footer>
  );
}
