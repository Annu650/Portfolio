"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string; details?: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('API Error:', data);
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center min-h-screen py-20">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 flex items-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📬 Contact Me
      </motion.h2>

      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-5xl">
        
        {/* Contact Info */}
        <motion.div
          className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg shadow-lg border border-blue-500/30 w-full md:w-1/2 hover:shadow-blue-500/50 transition"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
          <p className="text-gray-300 mb-6">
            I’m always open to new opportunities, collaborations, or just a friendly chat about tech.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-blue-400 text-lg" />
              <a href="mailto:manikpuriannu644@gmail.com" className="hover:text-blue-400 transition">
                manikpuriannu644@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-blue-400 text-lg" />
              <span>Vadodara, Gujarat, India</span>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/annu-manikpuri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Annu1809"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://github.com/Annu650"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition text-xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg shadow-lg border border-blue-500/30 w-full md:w-1/2 hover:shadow-blue-500/50 transition"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
          {submitStatus && (
            <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
              <p className="font-medium">{submitStatus.message}</p>
              {!submitStatus.success && submitStatus.details && (
                <p className="mt-2 text-sm opacity-80">{submitStatus.details}</p>
              )}
            </div>
          )}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.name}
              onChange={handleChange}
              name="name"
              required
              minLength={2}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              value={formData.message}
              onChange={handleChange}
              name="message"
              required
              minLength={10}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition flex items-center justify-center space-x-2 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane className="text-sm" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
