// components/AboutMe.jsx (Fixed Version)
"use client";
import { motion } from "framer-motion";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaTools,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaCertificate,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRocket,
  FaGraduationCap,
  FaDatabase,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";

const skills = {
  languages: ["JavaScript", "TypeScript", "Java", "HTML5", "CSS3"],
  frontend: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
  backend: ["Node.js", "Express", "REST APIs"],
  database: ["MongoDB", "Mongoose", "SQL", "PostgreSQL"],
  tools: ["Git", "VS Code", "Postman", "Vercel", "Cloudflare"],
  methodologies: ["CI/CD", "Responsive Design"],
};

const experience = [
  {
    company: "Inzovia Web Solutions",
    role: "Software Developer",
    duration: "Oct 2025 – Present",
    location: "Remote",
    achievements: [
      "Developed scalable web applications using React, Next.js, TypeScript",
      "Achieved 95+ Google Lighthouse scores",
      "Integrated secure authentication & payment systems",
      "Optimized applications for performance and SEO",
      "Used modern tools like Vercel and Cloudflare for hosting and CDN",
      "Built responsive designs for seamless experience across devices",
      "Maintained high code quality with best practices and code reviews",
    ],
    icon: <FaRocket />,
    color: "from-indigo-500 to-blue-500",
  },
  {
    company: "Digital Sketch And Technology",
    role: "Software Developer",
    duration: "Jan 2024 – May 2025",
    location: "New Delhi, Delhi",
    achievements: [
      "Built dynamic web apps with modern stack",
      "Implemented state management with Redux",
      "Integrated authentication & payment gateways",
      "Optimized for performance and SEO",
      "Deployed on Vercel with Cloudflare CDN",
      "Ensured responsive design for all devices",
    ],
    icon: <FaLaptopCode />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    company: "AK Digital World",
    role: "Web Developer - Intern",
    duration: "Jul 2023 – Dec 2023",
    location: "Sec-62, Noida, UP",
    achievements: [
      "Collaborated on responsive websites",
      "Worked with HTML5, CSS3, JavaScript, React.js",
      "Gained professional development experience",
    ],
    icon: <FaGraduationCap />,
    color: "from-purple-500 to-pink-500",
  },
];

// Helper function for SVG pattern
const getPatternBackground = () => {
  // Base64 encoded SVG pattern to avoid quote issues
  const svgBase64 = btoa(`
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" 
            fill="#ffffff" fill-opacity="0.1" fill-rule="evenodd"/>
    </svg>
  `);
  return `url("data:image/svg+xml;base64,${svgBase64}")`;
};

export default function About() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/MusabHassanResume.pdf";
    link.download = "Musab_Hassan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Simple gradient background instead of complex SVG */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_99%,rgba(99,102,241,0.02)_100%),linear-gradient(transparent_99%,rgba(99,102,241,0.02)_100%)] bg-[size:20px_20px]"></div>

        {/* Floating code elements */}
        {["</>", "{", "}", "<>"].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl text-indigo-200/20 font-mono"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + Math.sin(i) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Corner accent elements */}
      <div className="absolute top-10 left-10 w-20 h-20 opacity-10">
        <div className="w-full h-full border-2 border-indigo-300/30 rounded-lg rotate-45"></div>
      </div>
      <div className="absolute bottom-10 right-10 w-16 h-16 opacity-10">
        <div className="w-full h-full border-2 border-blue-300/30 rounded-full"></div>
      </div>

      <div className="section-padding relative z-10">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="text-gray-900">About</span>
            <span className="text-indigo-600 ml-2">Me</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto relative">
            Passionate developer with 2+ years of experience building
            production-ready web applications
            <motion.span
              className="absolute -right-4 top-1/2 w-2 h-2 rounded-full bg-indigo-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Personal Info & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Premium Profile Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-premium rounded-3xl overflow-hidden shadow-2xl border border-gray-100/50"
            >
              {/* Profile Header with Gradient */}
              <div className="relative h-32 bg-gradient-to-r from-indigo-600 to-blue-600">
                {/* Simple pattern overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: "100px",
                  }}
                ></div>

                {/* Profile Image Placeholder */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white to-gray-100 p-1 shadow-xl">
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                      <FaUser className="text-white text-3xl" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-16 px-8 pb-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Musab Hassan
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-gray-600">Full Stack MERN Developer</p>
                  </div>
                </div>

                <p className="text-gray-600  leading-relaxed mb-8 text-justify">
                  I am a passionate Full Stack Developer specializing in the
                  MERN stack with 2+ years of professional experience. I build
                  scalable, high-performance web applications, CMS platforms,
                  and business websites that help companies grow online. My
                  expertise includes modern technologies like React, Next.js,
                  Node.js, and MongoDB. I am dedicated to writing clean,
                  maintainable code and delivering exceptional user experiences.
                  Let's connect and create something amazing together!
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: "2+", label: "Years", color: "text-indigo-600" },
                    { value: "20+", label: "Projects", color: "text-blue-600" },
                    {
                      value: "100%",
                      label: "Success",
                      color: "text-green-600",
                    },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleDownloadResume}
                  className="w-full btn-primary flex items-center justify-center gap-3 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <FaDownload />
                  Download Resume (PDF)
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ↓
                  </motion.span>
                </button>
              </div>
            </motion.div>

            {/* Contact Card with Animation */}
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-premium rounded-3xl p-8 shadow-xl border border-gray-100/50"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white">
                  <FaPhone />
                </div>
                Contact Information
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: <FaPhone />,
                    label: "Phone",
                    value: "+91 8235822089",
                    color: "bg-indigo-100 text-indigo-600",
                  },
                  {
                    icon: <FaEnvelope />,
                    label: "Email",
                    value: "info@techmusab.in",
                    color: "bg-blue-100 text-blue-600",
                  },
                  {
                    icon: <FaLinkedin />,
                    label: "LinkedIn",
                    value: "linkedin.com/in/musab0712",
                    color: "bg-blue-600 text-white",
                  },
                  {
                    icon: <FaGithub />,
                    label: "GitHub",
                    value: "github.com/musab0712",
                    color: "bg-gray-900 text-white",
                  },
                ].map((contact, i) => (
                  <motion.a
                    key={i}
                    href={
                      contact.label === "Email"
                        ? `mailto:${contact.value}`
                        : contact.label === "Phone"
                          ? `tel:${contact.value}`
                          : `https://${contact.value}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 hover:from-indigo-50 hover:to-blue-50 transition-all group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${contact.color} flex items-center justify-center text-lg flex-shrink-0`}
                    >
                      {contact.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-500">
                        {contact.label}
                      </div>
                      <div className="font-medium text-gray-900 truncate group-hover:text-indigo-600 transition-colors">
                        {contact.value}
                      </div>
                    </div>
                    <div className="text-gray-400 group-hover:text-indigo-500 transition-colors">
                      →
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Skills Card */}
            {/* <motion.div
              whileHover={{ y: -3 }}
              className="glass-premium rounded-3xl p-8 shadow-xl border border-gray-100/50"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                  <FaTools />
                </div>
                Technical Expertise
              </h3>

              <div className="space-y-6">
                {Object.entries(skills).map(([category, items], index) => (
                  <div key={category} className="space-y-3">
                    <h4 className="font-semibold text-gray-900 capitalize text-sm tracking-wide">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 font-medium rounded-xl text-sm border border-gray-200 hover:border-indigo-300 hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-700 transition-all shadow-sm hover:shadow"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div> */}

            {/* Experience Timeline */}
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-premium rounded-3xl p-8 shadow-xl border border-gray-100/50"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                  <FaBriefcase />
                </div>
                Professional Journey
              </h3>

              <div className="space-y-8 relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-blue-200 to-cyan-200"></div>

                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Timeline node */}
                    <div
                      className={`absolute left-6 top-1 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} border-2 border-white shadow-lg`}
                    ></div>

                    <div className="space-y-3 p-4 rounded-xl bg-gradient-to-r from-gray-50/50 to-gray-100/30 hover:from-indigo-50/50 hover:to-blue-50/30 transition-all">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center text-white`}
                          >
                            {exp.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">
                              {exp.role}
                            </h4>
                            <p className="text-indigo-600 font-semibold">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full">
                          <FaCalendarAlt
                            className="text-indigo-600"
                            size={12}
                          />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                          <FaMapMarkerAlt className="text-blue-600" size={12} />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Highlights */}
            {/* <motion.div
              whileHover={{ y: -3 }}
              className="glass-premium rounded-3xl p-8 shadow-xl border border-gray-100/50"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                  <FaCertificate />
                </div>
                Project Highlights
              </h3>

              <div className="grid gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Dev Tinder
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Real-time matchmaking platform for developers with chat
                    system
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs rounded-full font-medium">
                      React.js
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">
                      MongoDB
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    QuickThreads
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Social media platform with user authentication and real-time
                    features
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs rounded-full font-medium">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs rounded-full font-medium">
                      Tailwind
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
