import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Phone, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.identifier.trim())
      newErrors.identifier = "Phone number or email is required.";
    if (!form.password)
      newErrors.password = "Password is required.";
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
    // TODO: wire up your actual login API here
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const inputBase =
    "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200";
  const errorClass = "border-rose-400 focus:ring-rose-400";

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 flex flex-col font-sans">
      {/* Background Orbs */}
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
              Log In to Pullova
            </h1>
            <p className="text-gray-500 text-sm">
              Enter your details to securely access your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Phone or Email + SMS disclosure */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                Mobile Phone Number or Email
              </label>
              <div className="relative">
                {/* Show phone icon by default; could detect and swap */}
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="+1 (555) 000-0000 or jane@example.com"
                  value={form.identifier}
                  onChange={(e) => handleChange("identifier", e.target.value)}
                  className={`${inputBase} ${errors.identifier ? errorClass : ""}`}
                />
              </div>
              {errors.identifier && (
                <p className="text-xs text-rose-500 mt-1">{errors.identifier}</p>
              )}
              {/* ✅ SMS Disclosure — directly below phone field, per Telnyx/carrier requirement */}
              <div className="mt-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  By logging in with your mobile number, you agree to receive SMS messages from{" "}
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
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-xs text-pink-500 hover:text-pink-700 font-semibold transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
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

            {/* Privacy + Terms line */}
            <p className="text-[11px] text-gray-400 leading-relaxed">
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
            </p>

            {/* Submit Button */}
            <motion.div whileTap={{ scale: 0.98 }} className="pt-1">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full font-bold py-3 text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                Log In
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </form>

          {/* Divider + Sign Up link */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">Don't have an account?</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          <Link to="/register">
            <Button
              variant="outline"
              className="w-full rounded-full border-gray-200 text-gray-700 hover:border-pink-300 hover:text-pink-600 text-sm font-semibold transition-all"
            >
              Create an Account
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

export default Login;