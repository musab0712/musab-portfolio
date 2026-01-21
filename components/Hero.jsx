// components/Hero.jsx
"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-gray-50 to-blue-50 py-20 md:py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-gray-900">Hi, I'm</span>
              <span className="block bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Musab Hassan
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-gray-600 mb-8 h-20">
              <TypeAnimation
                sequence={[
                  "Full Stack MERN Developer",
                  2000,
                  "CMS Platform Specialist",
                  2000,
                  "Web Application Expert",
                  2000,
                  "Business Growth Partner",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
              I build high-performance web applications, CMS platforms and
              business websites that help companies grow online. With 2+ years
              of professional experience, I transform ideas into
              production-ready digital solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                View Projects
                <FaArrowRight />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Hire Me
                <FaDownload />
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white bg-linear-to-r from-blue-400 to-indigo-500"
                  ></div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <span className="font-semibold">5.0/5.0</span>
                </div>
                <p className="text-gray-600">Rated by 25+ Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass-card rounded-2xl p-8 shadow-2xl">
              <div className="absolute -top-3 -right-3 bg-linear-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                Available for Hire
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 rounded-xl bg-linear-to-br from-indigo-50 to-blue-50">
                  <div className="text-3xl font-bold text-indigo-600">20+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-linear-to-br from-blue-50 to-cyan-50">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-linear-to-br from-purple-50 to-pink-50">
                  <div className="text-3xl font-bold text-purple-600">2+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-linear-to-br from-green-50 to-emerald-50">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  What I Deliver:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Production-Ready Code",
                    "SEO Optimized",
                    "Fast Performance",
                    "Mobile Responsive",
                    "Clean Architecture",
                    "Long Term Support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-linear-to-r from-indigo-400 to-blue-400 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
