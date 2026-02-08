// components/Hero.jsx
"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50 pt-24 pb-16">
      {/* PREMIUM BACKGROUND BLUR BLOBS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-medium mb-6 shadow-sm">
              🚀 Available for Freelance & Jobs
            </div>

            {/* heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-gray-900">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Musab Hassan
              </span>
            </h1>

            {/* typing role */}
            <div className="text-xl sm:text-2xl text-gray-600 mb-6 h-12 font-semibold">
              <TypeAnimation
                sequence={[
                  "Full Stack MERN Developer",
                  2000,
                  "Next.js & SaaS Specialist",
                  2000,
                  "AI + Web App Builder",
                  2000,
                  "High Converting Websites",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* description */}
            <p className="text-gray-600 text-lg mb-10 max-w-xl leading-relaxed">
              I build premium web applications, SaaS platforms and
              high-converting business websites that help companies grow fast.
              Clean code. Fast performance. Modern UI.
            </p>

            {/* buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition flex items-center gap-2"
              >
                View Projects
                <FaArrowRight />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-gray-300 text-gray-800 px-7 py-3 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center gap-2"
              >
                Hire Me
                <FaDownload />
              </motion.a>
            </div>

            {/* TRUST BADGES */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full border-2 border-white bg-gradient-to-r from-indigo-500 to-blue-500"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="font-semibold text-gray-800">5.0</span>
                </div>
                <p className="text-gray-500 text-sm">Trusted by clients</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE PREMIUM CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative">
              <div className="absolute -top-4 right-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow">
                Open to Work
              </div>

              {/* stats */}
              <div className="grid grid-cols-2 gap-5 mb-8">
                {[
                  { num: "20+", label: "Projects" },
                  { num: "2+", label: "Years Exp" },
                  { num: "25+", label: "Clients" },
                  { num: "100%", label: "Success" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-center bg-gray-50 rounded-xl py-5 shadow-sm"
                  >
                    <div className="text-2xl font-bold text-indigo-600">
                      {item.num}
                    </div>
                    <div className="text-gray-500 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* features */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4 text-lg">
                  What I Deliver
                </h3>
                <ul className="space-y-3">
                  {[
                    "High Converting Websites",
                    "Premium UI/UX Design",
                    "SEO Optimized",
                    "Fast Performance",
                    "Clean Code",
                    "Full Support",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* floating glow */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-indigo-400 rounded-full blur-2xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
