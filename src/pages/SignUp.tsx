import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, User, Mail, Phone, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email address.";
    if (!form.phone.match(/^\+?[\d\s\-().]{7,15}$/))
      newErrors.phone = "Enter a valid phone number.";
    if (form.password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!agreed)
      newErrors.agreed = "You must agree to the terms to continue.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // TODO: wire up your actual registration API here
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const inputBase =
    "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200";
  const errorClass = "border-rose-400 focus:ring-rose-400";

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-rose-500" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">You're in! 🎉</h2>
          <p className="text-gray-500 text-sm mb-6">
            Your Pullova account has been created. Check your phone for a verification SMS.
          </p>
          <Link to="/">
            <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full font-semibold py-3">
              Go to Homepage
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 flex flex-col font-sans">
      {/* Background Orbs — matches Hero section */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/25 rounded-full blur-3xl" />
      </div>

      {/* Header / Logo */}
      <div className="relative z-10 px-6 pt-8 pb-4">
        <Link to="/" className="inline-flex items-center gap-2 group">
          <img src="/PULLOVA1.svg" alt="Pullova logo" className="w-10 h-10" />
          <span className="text-xl font-extrabold text-gray-900 tracking-wide group-hover:text-pink-500 transition-colors">
            Pullova
          </span>
        </Link>
      </div>

      {/* Form Card */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 w-full max-w-md p-8"
        >
          {/* Title */}
          <div className="mb-7">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">
              Create Your Pullova Account
            </h1>
            <p className="text-gray-500 text-sm">
              Sign up to access Pullova services securely.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className={`${inputBase} ${errors.fullName ? errorClass : ""}`}
                />
              </div>
              {errors.fullName && (
                <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`${inputBase} ${errors.email ? errorClass : ""}`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone + SMS Consent directly below (Telnyx requirement) */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                Mobile Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`${inputBase} ${errors.phone ? errorClass : ""}`}
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>
              )}
              {/* ✅ SMS Consent — directly below phone field, fully visible, per Telnyx/carrier requirement */}
              <div className="mt-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  By providing your mobile phone number, you agree to receive SMS messages from{" "}
                  <span className="font-semibold text-gray-700">Pullova Technologies</span> for
                  account verification and security purposes only. Message frequency may vary. Msg
                  &amp; data rates may apply.{" "}
                  <span className="font-semibold text-gray-700">Reply STOP to opt out</span> and{" "}
                  <span className="font-semibold text-gray-700">HELP for help</span>.
                </p>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className={`${inputBase} pr-11 ${errors.password ? errorClass : ""}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-rose-500 mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  className={`${inputBase} pr-11 ${errors.confirmPassword ? errorClass : ""}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-rose-500 mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Privacy / Terms Checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    if (errors.agreed) setErrors((prev) => ({ ...prev, agreed: "" }));
                  }}
                  className="mt-0.5 w-4 h-4 accent-pink-500 rounded flex-shrink-0"
                />
                <span className="text-[12px] text-gray-500 leading-relaxed">
                  By continuing, you agree to our{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 font-semibold underline hover:text-pink-700 transition-colors"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 font-semibold underline hover:text-pink-700 transition-colors"
                  >
                    Terms &amp; Conditions
                  </a>
                  .
                </span>
              </label>
              {errors.agreed && (
                <p className="text-xs text-rose-500 mt-1">{errors.agreed}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.div whileTap={{ scale: 0.98 }} className="pt-1">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full font-bold py-3 text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                Create Account
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </form>

          {/* Divider + Login link */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">Already have an account?</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          <Link to="/login">
            <Button
              variant="outline"
              className="w-full rounded-full border-gray-200 text-gray-700 hover:border-pink-300 hover:text-pink-600 text-sm font-semibold transition-all"
            >
              Log In Instead
            </Button>
          </Link>
        </motion.div>
      </div>

      <p className="relative z-10 text-center text-xs text-gray-400 py-4 px-4">
        © {new Date().getFullYear()} Pullova Technologies. All rights reserved.
      </p>
    </div>
  );
};

export default SignUp;