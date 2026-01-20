// components/Footer.jsx
"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "Services", href: "#services" },
      { label: "Tech Stack", href: "#tech-stack" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "CMS Development", href: "#services" },
      { label: "API Integration", href: "#services" },
      { label: "SEO Optimization", href: "#services" },
      { label: "Business Websites", href: "#services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/musab", label: "GitHub" },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/musab",
    label: "LinkedIn",
  },
  { icon: <FaTwitter />, href: "https://twitter.com/musab", label: "Twitter" },
];

const techStack = [
  { icon: <SiNextdotjs />, label: "Next.js", color: "text-gray-900" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "text-cyan-500" },
  { icon: <SiMongodb />, label: "MongoDB", color: "text-green-500" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-linear-to-b from-white to-gray-50 border-t border-gray-200">
      {/* Main Footer */}

      {/* Bottom Bar */}
      <div className="bg-linear-to-r from-gray-900 to-indigo-900 text-white">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
            <div className="text-sm text-gray-300 flex items-center gap-2">
              <span>© {new Date().getFullYear()} Musab Hassan.</span>
              <span className="hidden md:inline">•</span>
              <span>All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>By</span>
              <span className="font-semibold text-white">Musab Hassan</span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-30">
        <div className="flex items-center justify-around py-3">
          {["Home", "Projects", "Services", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="flex flex-col items-center gap-1 text-xs text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                {index === 0 && <FaCode />}
                {index === 1 && <FaCode />}
                {index === 2 && <FaCode />}
                {index === 3 && <FaCode />}
              </div>
              <span className="font-medium">{item}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
