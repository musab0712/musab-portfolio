// components/WhyChooseMe.jsx
"use client";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaCode,
  FaSearch,
  FaMobileAlt,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaRocket />,
    title: "Fast Delivery",
    description: "Quick project turnaround without compromising quality",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaCode />,
    title: "Clean Code",
    description: "Well-structured, maintainable, and scalable codebase",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimized",
    description: "Websites built to rank higher in search results",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile First",
    description: "Perfect experience across all devices and screen sizes",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure",
    description: "Enterprise-grade security and best practices",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: <FaHeadset />,
    title: "Long-term Support",
    description: "Ongoing maintenance and support after delivery",
    color: "from-pink-500 to-rose-500",
  },
];

export default function WhyChooseMe() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Why</span>
            <span className="text-indigo-600 ml-2">Choose Me</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I deliver more than just code – I provide solutions that drive
            business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full">
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${benefit.color} flex items-center justify-center text-white text-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 mb-6">{benefit.description}</p>

                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">Experience</div>
                    <div className="font-semibold text-gray-900">2+ Years</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">Projects</div>
                    <div className="font-semibold text-gray-900">20+</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">Success Rate</div>
                    <div className="font-semibold text-gray-900">100%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "50+", label: "Happy Clients" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "2+", label: "Years Experience" },
            { value: "20+", label: "Projects Delivered" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-linear-to-br from-indigo-50 to-blue-50"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
