"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Upload, User, Mail, FileText, Briefcase, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const CareerPage = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    resume: null as File | null,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API delay for now
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", role: "", resume: null });
    }, 1500);
  };

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Join Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Talent Community</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10"
        >
          We’re always on the lookout for passionate beauty professionals and creative minds. 
          Share your details and resume — we’ll reach out when a perfect opportunity opens up.
        </motion.p>

        {/* Talent Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-2">
                <User className="w-4 h-4 text-primary" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-2">
                <Mail className="w-4 h-4 text-primary" /> Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2 text-gray-300 mb-2">
              <Briefcase className="w-4 h-4 text-primary" /> Desired Role / Area of Interest
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g. Makeup Artist, UI Designer, Marketing"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
            />
          </div>

          <div className="mb-8">
            <label className="flex items-center gap-2 text-gray-300 mb-2">
              <FileText className="w-4 h-4 text-primary" /> Upload Resume (PDF or DOC)
            </label>
            <div className="relative group border border-dashed border-white/20 rounded-xl p-6 cursor-pointer bg-white/5 hover:bg-white/10 transition-all">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center">
                <Upload className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                {formData.resume ? (
                  <p className="text-sm text-gray-300">{formData.resume.name}</p>
                ) : (
                  <p className="text-gray-500">Click or drag to upload</p>
                )}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold w-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center"
          >
            {status === "loading" ? "Submitting..." : "Join Talent Community"}
            <Send className="ml-2 w-5 h-5" />
          </Button>

          {status === "success" && (
            <p className="mt-4 text-green-400 text-sm">Thanks! We’ve received your details.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-400 text-sm">Something went wrong. Try again later.</p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default CareerPage;
