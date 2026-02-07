// components/Contact.jsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // success state
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // setIsSubmitting(true);

  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!res.ok) throw new Error("Failed");

  //     // setIsSubmitted(true);

  //     setTimeout(() => {
  //       setFormData({
  //         name: "",
  //         email: "",
  //         mobile: "",
  //         subject: "",
  //         message: "",
  //       });
  //     }, 3000);
  //   } catch (error) {
  //     alert("Something went wrong. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setIsSubmitted(true); // show success message

      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });

      // 5 sec baad form wapas
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-br from-gray-900 to-indigo-900 text-white"
    >
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Let's</span>
            <span className="text-cyan-400 ml-2">Work Together</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 bg-white/10 backdrop-blur-sm">
              {isSubmitted ? (
                // ✅ Success Message UI
                <div className="text-center py-16">
                  <h3 className="text-3xl font-bold text-green-400 mb-4">
                    🎉 Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thanks for contacting me. I will reply soon 🚀
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-200 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-200 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your Email Address"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-gray-200 mb-2"
                    >
                      Your Mobile
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your Mobile Number"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-200 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="subject"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-200 mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your project, timeline, and budget..."
                      required
                    ></textarea>
                  </div>

                  {/* <button
                  type="submit"
                  className="w-full bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </button> */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Work With Me?</h3>
              <ul className="space-y-4">
                {[
                  "✅ 2+ Years Professional Experience",
                  "✅ Production Level Projects",
                  "✅ Clean Code Architecture",
                  "✅ SEO Optimized Websites",
                  "✅ Mobile Responsive Design",
                  "✅ Long Term Support",
                  "✅ Fast Project Delivery",
                  "✅ 100% Client Satisfaction",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get In Touch</h3>

              <a
                href="https://wa.me/918235822089"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-linear-to-r from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-gray-300 text-sm">
                    Chat instantly for quick queries
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@techmusab.in"
                className="flex items-center gap-4 p-4 rounded-xl bg-linear-to-r from-blue-500/20 to-indigo-500/20 hover:from-blue-500/30 hover:to-indigo-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300 text-sm">info@techmusab.in</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/musab0712"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-linear-to-r from-blue-600/20 to-blue-700/20 hover:from-blue-600/30 hover:to-blue-700/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">
                  <FaLinkedin className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-gray-300 text-sm">
                    Connect professionally
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
