// components/TechStack.jsx (Updated)
"use client";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiRedux,
  SiGit,
  SiDocker,
  SiFirebase,
  SiVercel,
  SiAwslambda,
  SiCloudflare,
} from "react-icons/si";
import { FaDatabase, FaServer, FaCode } from "react-icons/fa";
import { useState } from "react";

const technologies = [
  // Frontend Technologies
  {
    icon: <SiReact />,
    name: "React",
    color: "from-cyan-500 to-blue-500",
    category: "Frontend",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    color: "from-gray-900 to-gray-700",
    category: "Frontend",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    color: "from-yellow-500 to-yellow-600",
    category: "Frontend",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    color: "from-blue-600 to-blue-700",
    category: "Frontend",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    color: "from-cyan-400 to-blue-500",
    category: "Frontend",
  },
  {
    icon: <SiHtml5 />,
    name: "HTML5",
    color: "from-orange-500 to-red-500",
    category: "Frontend",
  },
  {
    icon: <SiCss3 />,
    name: "CSS3",
    color: "from-blue-500 to-blue-600",
    category: "Frontend",
  },
  {
    icon: <SiFramer />,
    name: "Framer Motion",
    color: "from-pink-500 to-purple-500",
    category: "Frontend",
  },
  {
    icon: <SiRedux />,
    name: "Redux",
    color: "from-purple-500 to-purple-700",
    category: "Frontend",
  },

  // Backend Technologies
  {
    icon: <SiNodedotjs />,
    name: "Node.js",
    color: "from-green-500 to-emerald-500",
    category: "Backend",
  },
  {
    icon: <SiExpress />,
    name: "Express.js",
    color: "from-gray-800 to-gray-600",
    category: "Backend",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    color: "from-green-600 to-emerald-600",
    category: "Backend",
  },
  //   {
  //     icon: <SiMysql />,
  //     name: "MySQL",
  //     color: "from-blue-500 to-blue-700",
  //     category: "Backend",
  //   },
  {
    icon: <SiPostgresql />,
    name: "PostgreSQL",
    color: "from-blue-600 to-blue-800",
    category: "Backend",
  },
  {
    icon: <FaDatabase />,
    name: "SQL",
    color: "from-indigo-500 to-indigo-700",
    category: "Backend",
  },
  {
    icon: <SiGraphql />,
    name: "GraphQL",
    color: "from-pink-600 to-purple-600",
    category: "Backend",
  },
  {
    icon: <FaServer />,
    name: "REST API",
    color: "from-teal-500 to-teal-700",
    category: "Backend",
  },

  // Tools & DevOps
  {
    icon: <SiGit />,
    name: "Git",
    color: "from-orange-600 to-red-600",
    category: "Tools",
  },
  {
    icon: <SiDocker />,
    name: "Docker",
    color: "from-blue-500 to-blue-600",
    category: "Tools",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    color: "from-yellow-500 to-orange-500",
    category: "Tools",
  },
  {
    icon: <SiAwslambda />,
    name: "AWS",
    color: "from-orange-400 to-yellow-600",
    category: "Tools",
  },
  {
    icon: <SiCloudflare />,
    name: "Cloudflare",
    color: "from-blue-400 to-indigo-600",
    category: "Tools",
  },
  {
    icon: <SiVercel />,
    name: "Vercel",
    color: "from-gray-900 to-black",
    category: "Tools",
  },
];

// Group by category for organized display
const groupedTechnologies = {
  Frontend: technologies.filter((tech) => tech.category === "Frontend"),
  Backend: technologies.filter((tech) => tech.category === "Backend"),
  Tools: technologies.filter((tech) => tech.category === "Tools"),
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">My</span>
            <span className="text-indigo-600 ml-2">Tech Stack</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Full spectrum of modern technologies I use to build production-ready
            applications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {["All", "Frontend", "Backend", "Tools"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-linear-to-r from-indigo-600 to-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* All Technologies Grid */}
        {activeTab === "All" && (
          <>
            {/* Frontend Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Frontend Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {groupedTechnologies.Frontend.map((tech, index) => (
                  <TechCard key={index} tech={tech} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Backend Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Backend Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {groupedTechnologies.Backend.map((tech, index) => (
                  <TechCard key={index} tech={tech} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Tools & DevOps
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {groupedTechnologies.Tools.map((tech, index) => (
                  <TechCard key={index} tech={tech} index={index} />
                ))}
              </div>
            </motion.div>
          </>
        )}

        {/* Filtered Technologies */}
        {activeTab !== "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
          >
            {technologies
              .filter(
                (tech) => activeTab === "All" || tech.category === activeTab,
              )
              .map((tech, index) => (
                <TechCard key={index} tech={tech} index={index} />
              ))}
          </motion.div>
        )}

        {/* MERN Stack Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-card rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Specialized in <span className="text-indigo-600">MERN Stack</span>
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {[
              { icon: <SiMongodb />, name: "MongoDB", desc: "NoSQL Database" },
              {
                icon: <SiExpress />,
                name: "Express.js",
                desc: "Backend Framework",
              },
              { icon: <SiReact />, name: "React", desc: "Frontend Library" },
              {
                icon: <SiNodedotjs />,
                name: "Node.js",
                desc: "Runtime Environment",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-2xl mx-auto mb-3">
                  {item.icon}
                </div>
                <div className="font-bold text-gray-900">{item.name}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Reusable Tech Card Component
function TechCard({ tech, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="relative">
        <div
          className={`absolute inset-0 bg-linear-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`}
        ></div>
        <div className="relative glass-card rounded-2xl p-4 md:p-6 text-center group-hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center">
          <div
            className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-linear-to-br ${tech.color} flex items-center justify-center text-white text-2xl md:text-3xl mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            {tech.icon}
          </div>
          <h3 className="font-semibold text-gray-900 text-sm md:text-base">
            {tech.name}
          </h3>
          <div className="mt-2 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i < 4 ? "bg-indigo-600" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
          <div className="mt-2">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {tech.category}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
