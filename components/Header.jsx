// components/Header.jsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaCode, FaEnvelope, FaPhone } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-600 to-blue-600 flex items-center justify-center">
                <FaCode className="text-white text-lg" />
              </div>
              <div>
                <span className="font-bold text-xl bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Musab
                </span>
                <div className="text-xs text-gray-500 font-medium -mt-1">
                  MERN Developer
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 hover:text-indigo-600 font-medium text-sm uppercase tracking-wide relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                <FaEnvelope />
                Hire Me
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-10 h-10 rounded-lg bg-linear-to-r from-indigo-50 to-blue-50 flex items-center justify-center text-indigo-600"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-600 to-blue-600 flex items-center justify-center">
                    <FaCode className="text-white text-lg" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900">Musab</div>
                    <div className="text-xs text-gray-500">MERN Developer</div>
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="p-6">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 font-medium"
                      >
                        {item.label}
                        <FiChevronDown className="text-gray-400" />
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Contact Info in Mobile Menu */}
                <div className="mt-8 p-6 bg-linear-to-br from-indigo-50 to-blue-50 rounded-2xl">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Get in Touch
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:musab@example.com"
                      className="flex items-center gap-3 text-gray-600 hover:text-indigo-600"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                        <FaEnvelope className="text-indigo-600" />
                      </div>
                      <div>
                        <div className="text-sm">Email</div>
                        <div className="font-medium">musab@example.com</div>
                      </div>
                    </a>
                    <a
                      href="tel:+1234567890"
                      className="flex items-center gap-3 text-gray-600 hover:text-indigo-600"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                        <FaPhone className="text-indigo-600" />
                      </div>
                      <div>
                        <div className="text-sm">Call Now</div>
                        <div className="font-medium">+1 (234) 567-890</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* CTA in Mobile Menu */}
                <div className="mt-8">
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="btn-primary w-full text-center py-4"
                  >
                    Start a Project
                  </a>
                </div>
              </nav>

              {/* Footer in Mobile Menu */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
                <div className="text-center text-sm text-gray-500">
                  © {new Date().getFullYear()} Musab Hassan. All rights
                  reserved.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile floating CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 z-40 lg:hidden"
      >
        <a
          href="#contact"
          className="w-14 h-14 rounded-full bg-linear-to-br from-indigo-600 to-blue-600 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Contact"
        >
          <FaEnvelope className="text-white text-xl" />
        </a>
      </motion.div>
    </>
  );
}
