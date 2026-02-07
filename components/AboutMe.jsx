// components/AboutMe.jsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
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
  FaCalendarAlt, // Add this
  FaMapMarkerAlt, // Add this
  FaAward, // Add this if needed elsewhere
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
    ],
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
  },
];

export default function AboutMe() {
  const handleDownloadResume = () => {
    // In production, use your actual resume file
    const link = document.createElement("a");
    link.href = "/MusabHassanResume.pdf";
    link.download = "Musab_Hassan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">About</span>
            <span className="text-indigo-600 ml-2">Me</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate developer with 2+ years of experience building
            production-ready web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Personal Introduction */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-2xl">
                  <FaUser />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Musab Hassan
                  </h3>
                  <p className="text-gray-600">Full Stack MERN Developer</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                I am a passionate Full Stack Developer specializing in the MERN
                stack with 2+ years of professional experience. I build
                scalable, high-performance web applications, CMS platforms, and
                business websites that help companies grow online. My expertise
                includes modern technologies like React, Next.js, Node.js, and
                MongoDB.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-linear-to-br from-indigo-50 to-blue-50">
                  <div className="text-2xl font-bold text-indigo-600">2+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-linear-to-br from-blue-50 to-cyan-50">
                  <div className="text-2xl font-bold text-blue-600">20+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
              </div>

              <button
                onClick={handleDownloadResume}
                className="w-full btn-primary flex items-center justify-center gap-3 py-3"
              >
                <FaDownload />
                Download Resume (PDF)
              </button>
            </div>

            {/* Contact Information */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaPhone className="text-indigo-600" />
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <FaPhone className="text-indigo-600" />
                  </div>
                  <div>
                    <Link href="tel:+918235822089">
                      <div className="text-sm text-gray-500">Phone</div>
                      <div className="font-medium text-gray-900">
                        +91 8235822089
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                  <div>
                    <Link href="mailto:info@techmusab.in">
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-medium text-gray-900">
                        info@techmusab.in
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <FaLinkedin className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">LinkedIn</div>
                    <a
                      href="https://linkedin.com/in/musab0712"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900 hover:text-indigo-600"
                    >
                      linkedin.com/in/musab0712
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center">
                    <FaGithub className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">GitHub</div>
                    <a
                      href="https://github.com/musab0712"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900 hover:text-indigo-600"
                    >
                      github.com/musab0712
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Skills Overview */}
            {/* <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaTools className="text-indigo-600" />
                Technical Skills
              </h3>

              <div className="space-y-6">
                {Object.entries(skills).map(([category, items], index) => (
                  <div key={category} className="space-y-3">
                    <h4 className="font-semibold text-gray-900 capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 font-medium rounded-lg text-sm border border-gray-200 hover:border-indigo-300 hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-700 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Work Experience */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaBriefcase className="text-indigo-600" />
                Work Experience
              </h3>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 pb-6 border-l border-indigo-200 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-linear-to-br from-indigo-500 to-blue-500 border-2 border-white"></div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          {exp.role}
                        </h4>
                        <p className="text-indigo-600 font-semibold">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt
                            className="text-indigo-600"
                            size={12}
                          />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt
                            className="text-indigo-600"
                            size={12}
                          />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            {/* <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaCertificate className="text-indigo-600" />
                Notable Projects
              </h3>

              <div className="grid gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50/50 to-blue-50/50 border border-indigo-100">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Dev Tinder
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Real-time matchmaking platform for developers with chat
                    system
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-600 text-xs rounded">
                      React.js
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">
                      MongoDB
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-cyan-50/50 border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    QuickThreads
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Social media platform with user authentication and real-time
                    features
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-600 text-xs rounded">
                      Next.js
                    </span>
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-600 text-xs rounded">
                      Tailwind CSS
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
