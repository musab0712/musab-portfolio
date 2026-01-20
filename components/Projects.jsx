// components/Projects.jsx
"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaGithub,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaSearch,
  FaLock,
  FaTimes,
} from "react-icons/fa";
import { projects } from "@/data/projects";

// Mock images for projects (in production, replace with actual project screenshots)
const projectImages = {
  "Socionomy Foundation": [
    "/sf.png",
    "/sf1.png",
    "/sf2.png",
    "/sf3.png",
    "/sf4.png",
    "/sf5.png",
    "/sf6.png",
    "/sf7.png",
    "/sf8.png",
    "/sf9.png",
    "/sf10.png",
    "/sf11.png",
    "/sf12.png",
    "/sf13.png",
    "/sf14.png",
    "/sf15.png",
    "/sf16.png",
    "/sf17.png",
    "/sf18.png",
    "/sf19.png",
    "/sf20.png",
  ],
  "Habibul Ummat": [
    "/hu1.png",
    "/hu.png",
    "/hu2.png",
    "/hu3.png",
    "/hu4.png",
    "/hu5.png",
    "/hu6.png",
    "/hu7.png",
    "/hu8.png",
    "/hu9.png",
    "/hu10.png",
    "/hu11.png",
    "/hu12.png",
  ],
  Inzovia: [
    "/inzovia.png",
    "/in1.png",
    "/in2.png",
    "/in3.png",
    "/in4.png",
    "/in5.png",
    "/in6.png",
    "/in7.png",
    "/in8.png",
    "/in9.png",
  ],
  SecureTax: [
    "/st.png",
    "/st2.png",
    "/st3.png",
    "/st4.png",
    "/st5.png",
    "/st6.png",
    "/st7.png",
  ],
  "Aayush Enterprises": [
    "/ae.png",
    "/ae1.png",
    "/ae2.png",
    "/ae3.png",
    "/ae4.png",
    "/ae5.png",
    "/ae6.png",
    "/ae7.png",
    "/ae8.png",
    "/ae9.png",
    "/ae10.png",
  ],
  "IoT AutoHub": [
    "/iot.png",
    "/iot1.png",
    "/iot2.png",
    "/iot3.png",
    "/iot4.png",
    "/iot5.png",
  ],
};

// Default placeholder images if actual images are not available
const getProjectImages = (projectTitle) => {
  const title = projectTitle.split(" — ")[0];
  return (
    projectImages[title] || [
      "/images/default-1.jpg",
      "/images/default-2.jpg",
      "/images/default-3.jpg",
    ]
  );
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Featured</span>
            <span className="text-indigo-600 ml-2">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best
            practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onExpand={() => {
                setActiveProject(project);
                setLightboxOpen(true);
              }}
            />
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && activeProject && (
          <ProjectLightbox
            project={activeProject}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onExpand }) {
  const images = getProjectImages(project.title);

  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const next = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // ---------- Auto Slide ----------
  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(next, 5000);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // ---------- Keyboard ----------
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // ---------- Touch Swipe ----------
  let startX = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) next();
    if (endX - startX > 50) prev();
  };
  if (!mounted) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      {/* ---------- SLIDER ---------- */}

      <div
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative h-64 md:h-72 overflow-hidden bg-gray-200"
      >
        {/* Loader */}
        {loading && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 z-30" />
        )}

        {/* Image Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0.4, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={project.title}
              fill
              priority={active === 0}
              onLoadingComplete={() => setLoading(false)}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Top Badge */}
        <div className="absolute top-4 left-4 z-20 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Project {index + 1}
        </div>

        {/* Expand */}
        <button
          onClick={onExpand}
          className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/30"
        >
          <FaExpand />
        </button>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ---------- CONTENT ---------- */}

      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-600 transition">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Key Features with Icons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {project.keyFeatures.slice(0, 4).map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">
                {i === 0 && <FaDatabase />}
                {i === 1 && <FaMobileAlt />}
                {i === 2 && <FaSearch />}
                {i === 3 && <FaLock />}
              </div>
              <span className="text-sm text-gray-600 line-clamp-2">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            className="flex-1 text-center py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
          >
            Live Demo
          </a>

          <button
            onClick={onExpand}
            className="px-4 py-2 border rounded-lg text-sm font-semibold hover:border-indigo-500 hover:text-indigo-600"
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectLightbox({ project, onClose }) {
  const images = getProjectImages(project.title);

  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const modalRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const next = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // ---------- Keyboard Controls ----------
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // ---------- Touch Swipe ----------
  let startX = 0;

  const onTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) next();
    if (endX - startX > 50) prev();
  };
  if (!mounted) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
      >
        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-6xl mx-4 rounded-xl overflow-hidden bg-black"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-40 bg-white/20 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/30"
          >
            <FaTimes />
          </button>

          {/* ---------- MAIN IMAGE ---------- */}

          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="relative h-[60vh] md:h-[75vh] bg-black"
          >
            {loading && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 z-30" />
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0.3, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.3 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[active]}
                  alt={project.title}
                  fill
                  onLoadingComplete={() => setLoading(false)}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-black/60"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-black/60"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* ---------- THUMBNAILS ---------- */}

          <div className="flex gap-3 p-4 overflow-x-auto bg-black">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative min-w-[80px] h-[60px] rounded-md overflow-hidden border-2 transition ${
                  active === i
                    ? "border-indigo-500 scale-105"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* ---------- INFO BAR ---------- */}

          <div className="px-6 py-4 bg-gray-900 text-white flex flex-col md:flex-row justify-between items-center gap-3">
            <div>
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400">
                {active + 1} / {images.length}
              </p>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg text-sm font-semibold"
            >
              Visit Live
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
