import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Upload, User, Mail, FileText, Briefcase, Send, CheckCircle2, AlertCircle, Phone, Linkedin, Globe, X } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "@/components/SEO";

const CareerPage = () => {
  const ref = useRef(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    linkedin: "",
    portfolio: "",
    experience: "",
    resume: null as File | null,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dragActive, setDragActive] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\+?[\d\s\-()]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: "File must be under 5MB" }));
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
      setErrors(prev => ({ ...prev, resume: "" }));
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: "File must be under 5MB" }));
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, resume: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name required";
    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Valid email required";
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Valid phone required";
    }
    if (!formData.resume) {
      newErrors.resume = "Resume required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          role: "", 
          linkedin: "", 
          portfolio: "", 
          experience: "",
          resume: null 
        });
        setStatus("idle");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }, 3000);
    }, 1500);
  };

  const experienceLevels = [
    { value: "", label: "Select experience" },
    { value: "entry", label: "Entry (0-2 years)" },
    { value: "mid", label: "Mid (2-5 years)" },
    { value: "senior", label: "Senior (5+ years)" },
    { value: "expert", label: "Lead (10+ years)" },
  ];

  const roles = [
    "Makeup Artist",
    "Hair Stylist",
    "Designer",
    "Marketing",
    "Engineer",
    "Support",
  ];

  return (
    <>
    <SEO
        title="Careers at Pullova | Join Our Talent Community"
        description="Join the Pullova Talent Community. Explore opportunities for beauty professionals, designers, marketers, developers and other talented individuals passionate about transforming the beauty industry."
        canonical="https://pullova.com/careers"
      />
      <Navigation />
      <div ref={ref} className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white pt-24 pb-16">
        
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Join Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Submit your application below and we'll get back to you when there's a match.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
            >
              {[
                { icon: "💼", title: "Flexible Work", desc: "Remote & on-site options" },
                { icon: "🚀", title: "Growth", desc: "Learn and advance" },
                { icon: "🌟", title: "Benefits", desc: "Competitive packages" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Info
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Remi Omoyayi"
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm">
                    <Phone className="w-4 h-4" /> Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-8900"
                    className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="linkedin.com/in/yourname"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Professional
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm">
                    Role Interest
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="e.g. Makeup Artist, Designer"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {roles.map(role => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, role }))}
                        className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-gray-300 hover:text-white transition-colors"
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm">
                    Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    {experienceLevels.map(level => (
                      <option key={level.value} value={level.value} className="bg-gray-800">
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm">
                    <Globe className="w-4 h-4" /> Portfolio
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="yourportfolio.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm">
                <FileText className="w-4 h-4" /> Resume <span className="text-red-400">*</span>
              </label>
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative group border-2 border-dashed ${
                  dragActive ? 'border-primary bg-primary/10' : errors.resume ? 'border-red-500' : 'border-white/20'
                } rounded-xl p-8 cursor-pointer bg-white/5 hover:bg-white/10 transition-all`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                
                {formData.resume ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-medium">{formData.resume.name}</p>
                        <p className="text-gray-400 text-sm">
                          {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="w-8 h-8 bg-red-500/20 hover:bg-red-500/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <X className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="w-12 h-12 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-white font-medium mb-1">
                      {dragActive ? 'Drop here' : 'Upload or drag file'}
                    </p>
                    <p className="text-gray-500 text-sm">PDF, DOC, DOCX (max 5MB)</p>
                  </div>
                )}
              </div>
              {errors.resume && <p className="text-red-400 text-xs mt-1">{errors.resume}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`w-full px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                status === "success"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30"
              } text-white disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {status === "loading" && (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Submitted!
                </>
              )}
              {status === "idle" && (
                <>
                  Submit Application
                  <Send className="w-5 h-5" />
                </>
              )}
              {status === "error" && (
                <>
                  <AlertCircle className="w-5 h-5" />
                  Try Again
                </>
              )}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                >
                  <p className="text-green-400 font-medium">Got it! We'll be in touch.</p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                >
                  <p className="text-red-400">Something broke. Try again.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;