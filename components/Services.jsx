// components/Services.jsx
"use client";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaShoppingCart,
  FaMobileAlt,
  FaSearch,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Application Development",
    description:
      "Custom web applications built with MERN stack for seamless user experiences and business growth.",
  },
  {
    icon: <FaDatabase />,
    title: "CMS Development",
    description:
      "Content Management Systems that empower businesses to manage their content efficiently.",
  },
  {
    icon: <FaChartLine />,
    title: "Admin Dashboard Development",
    description:
      "Powerful admin dashboards with analytics and management tools for business operations.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Business Website Development",
    description:
      "Professional business websites designed to convert visitors into customers.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimized Websites",
    description:
      "Websites built with SEO best practices to rank higher in search results.",
  },
  {
    icon: <FaCogs />,
    title: "API Integration",
    description:
      "Seamless integration of third-party APIs and payment gateways.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Responsive Design",
    description:
      "Websites that work perfectly on all devices and screen sizes.",
  },
];

export default function Services() {
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
            <span className="text-gray-900">Services I</span>
            <span className="text-indigo-600 ml-2">Provide</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive web development services tailored to your business
            needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  className="text-indigo-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Get Started
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
