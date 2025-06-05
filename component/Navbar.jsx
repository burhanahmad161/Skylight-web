"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  // Handle outside click for menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Handle scroll to enlarge navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Careers", href: "/Careers" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <header
      className={`bg-gray-700 fixed top-0 w-[75%] mt-3 z-50 ml-[13%] rounded-full shadow-md transition-all duration-300 ${scrolled ? "py-6" : "py-3"
        }`}
    >
      <div className="max-w-7xl mx-auto px-0 md:px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SkyLight Technologies
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-blue-600 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="relative md:hidden" ref={menuButtonRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 animate-slide-in mr-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-white hover:bg-blue-600 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>

  );
};

export default Navbar;
