import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiLoader } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [send, setSend] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields before sending!");
      return;
    }

    setSend(true);

    try {
      const rawApiUrl =
        import.meta.env.VITE_BASE_URL ||
        import.meta.env.VITE_API_URL ||
        "http://localhost:5000";

      // Normalize URL (strip trailing slashes)
      const cleanUrl = rawApiUrl.replace(/\/+$/, "");

      // Handle both cases: with or without /api/v1 in VITE_BASE_URL
      const targetUrl = cleanUrl.endsWith("/api/v1")
        ? `${cleanUrl}/user/send-email`
        : `${cleanUrl}/api/v1/user/send-email`;

      const result = await axios.post(targetUrl, formData);

      if (result.data.success) {
        toast.success(result.data.message || "Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(result.data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      const serverMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message;
      toast.error(serverMessage || "Unable to connect to the server. Please check your backend!");
    } finally {
      setSend(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="contact"
      className="py-24 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Get In <span className="text-purple-500">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let’s build something
          amazing together.
        </p>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white/8 backdrop-blur-lg border border-gray-700/80 rounded-2xl p-8 sm:p-10 shadow-xl">
          <form className="space-y-6 relative" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Your Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 rounded-lg shadow-lg shadow-purple-600/30 transition flex items-center justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={send}
            >
              {send ? <FiLoader className="animate-spin text-xl" /> : "Send Message"}
            </motion.button>

            {/* Toast Container */}
            <ToastContainer
              position={typeof window !== "undefined" && window.innerWidth < 640 ? "top-center" : "top-right"}
              autoClose={3000}
              style={{ zIndex: 9999 }}
            />
          </form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
