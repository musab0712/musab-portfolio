// components/AboutMeBackground.jsx
"use client";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaServer, FaNetworkWired } from "react-icons/fa";

export default function AboutMeBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/20"></div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Floating code elements */}
      <motion.div
        className="absolute text-6xl text-indigo-200/20 font-mono font-bold"
        style={{ left: "10%", top: "20%" }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {"<>"}
      </motion.div>

      <motion.div
        className="absolute text-4xl text-blue-200/15 font-mono"
        style={{ right: "15%", top: "30%" }}
        animate={{
          y: [0, -30, 0],
          rotate: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {"{"}
      </motion.div>

      <motion.div
        className="absolute text-4xl text-purple-200/15 font-mono"
        style={{ left: "20%", bottom: "40%" }}
        animate={{
          y: [0, 30, 0],
          rotate: [10, -10, 10],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        {"}"}
      </motion.div>

      {/* Tech icons floating */}
      {[
        { icon: <FaCode />, color: "text-indigo-300/15", delay: 0 },
        { icon: <FaDatabase />, color: "text-blue-300/15", delay: 2 },
        { icon: <FaServer />, color: "text-cyan-300/15", delay: 4 },
        { icon: <FaNetworkWired />, color: "text-purple-300/15", delay: 6 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className={`absolute text-5xl ${item.color}`}
          style={{
            left: `${15 + i * 20}%`,
            top: `${60 + Math.sin(i) * 20}%`,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M20,20 L80,20 L80,80 L20,80 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
            <path
              d="M120,120 L180,120 L180,180 L120,180 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
            <path
              d="M20,120 L80,120 L80,180 L20,180 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
            <path
              d="M120,20 L180,20 L180,80 L120,80 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
            <path
              d="M20,100 L180,100"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
            <path
              d="M100,20 L100,180"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-200/10 to-blue-200/5 blur-[60px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200/5 to-cyan-200/3 blur-[80px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Binary code rain effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs text-indigo-300/10 font-mono"
            style={{
              left: `${(i * 5) % 100}%`,
              top: "-20px",
            }}
            animate={{
              y: ["0%", "120%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
            {Math.random() > 0.5 ? "1" : "0"}
            {Math.random() > 0.5 ? "1" : "0"}
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
