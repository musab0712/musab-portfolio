// components/Education.jsx
"use client";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
} from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Dr. APJ Abdul Kalam Technical University",
    duration: "Aug 2020 - May 2023",
    location: "Lucknow, Uttar Pradesh",
    description:
      "Specialized in web technologies, software engineering, and database management systems. Completed multiple projects using modern web development stack.",
    achievements: [
      "Focus on Web Technologies & Software Engineering",
      "Database Management Systems",
      "Computer Networks & Security",
      "Object-Oriented Programming",
    ],
    icon: <FaUniversity />,
    color: "from-indigo-600 to-blue-600",
  },
  {
    degree: "Diploma in Computer Science and Engineering",
    institution: "Jamia Millia Islamia",
    duration: "Jun 2017 - May 2020",
    location: "New Delhi",
    description:
      "Foundation in computer science principles, programming fundamentals, and web development basics. Built strong problem-solving skills.",
    achievements: [
      "Programming Fundamentals",
      "Web Development Basics",
      "Data Structures & Algorithms",
      "Computer Fundamentals",
    ],
    icon: <FaGraduationCap />,
    color: "from-blue-600 to-cyan-600",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-linear-to-b from-white to-gray-50"
    >
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Educational</span>
            <span className="text-indigo-600 ml-2">Background</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Academic journey that built the foundation for my technical
            expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-indigo-200 to-blue-200 hidden lg:block"></div>

          {/* Education Cards */}
          <div className="space-y-12 relative">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"} ${index % 2 === 0 ? "lg:text-right" : ""}`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 rounded-full bg-linear-to-br from-indigo-500 to-blue-500 border-4 border-white shadow-lg hidden lg:block"></div>

                <div
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                    index % 2 === 0
                      ? "lg:mr-auto lg:w-5/12"
                      : "lg:ml-auto lg:w-5/12"
                  }`}
                >
                  {/* Header with gradient */}
                  <div className={`bg-linear-to-r ${edu.color} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-white/90 text-sm">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Duration and Location */}
                    <div
                      className={`flex flex-wrap gap-4 mb-6 ${index % 2 === 0 ? "lg:justify-end" : ""}`}
                    >
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaCalendarAlt className="text-indigo-600" />
                        <span className="font-medium">{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-indigo-600" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Key Focus Areas */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <FaAward className="text-indigo-600" />
                        Key Focus Areas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-linear-to-r from-indigo-50 to-blue-50 text-indigo-700 text-sm font-medium rounded-lg border border-indigo-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Total Experience",
              value: "2+ Years",
              description: "Professional development experience",
              color: "from-indigo-500 to-blue-500",
            },
            {
              title: "Projects Completed",
              value: "20+",
              description: "Production-ready applications",
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: "Education Level",
              value: "B.Tech + Diploma",
              description: "Dual qualification in CSE",
              color: "from-purple-500 to-pink-500",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center text-white text-xl mb-4`}
              >
                {index === 0 && "👨‍💻"}
                {index === 1 && "🚀"}
                {index === 2 && "🎓"}
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-900 mt-1">
                {stat.title}
              </div>
              <div className="text-gray-600 text-sm mt-2">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
