import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Loader2 // Added for a loading state
} from "lucide-react";
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
  
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      // REPLACE THIS URL with your deployed Apps Script Web App URL
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby8I7radAoTxCRy7AZYowbf7nRgVOgVu5TgaNPT4-Bos1fRNlEXv7M4lfk1BOPgt_UD/exec";

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script cross-domain requests
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          password: form.password, // Be mindful of security when saving passwords to Sheets
        }),
      });

      // Because 'no-cors' is used, we won't get a standard response object back,
      // so we proceed to the success screen if no network error occurred.
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: "Failed to save data. Please check your connection." });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const inputBase =
    "w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200";

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center"
        >
          <CheckCircle2 className="w-10 h-10 mx-auto text-rose-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">You're in! 🎉</h2>
          <p className="text-gray-500 text-sm mb-6">
            Your Pullova account has been created and your details saved.
          </p>
          <Link to="/">
            <Button className="w-full">Go to Homepage</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-6">
        <Link to="/" className="font-bold text-xl">
          Pullova
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6">Create Account</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className={`${inputBase} ${errors.fullName ? "border-rose-400" : ""}`}
              />
              {errors.fullName && <p className="text-rose-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`${inputBase} ${errors.email ? "border-rose-400" : ""}`}
              />
              {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={`${inputBase} ${errors.phone ? "border-rose-400" : ""}`}
              />
              {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className={`${inputBase} ${errors.password ? "border-rose-400" : ""}`}
              />
              {errors.password && <p className="text-rose-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                className={`${inputBase} ${errors.confirmPassword ? "border-rose-400" : ""}`}
              />
              {errors.confirmPassword && <p className="text-rose-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1"
              />
              <span>
                I agree to the{" "}
                <Link to="/privacy-policy" target="_blank" className="text-pink-500 underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms" target="_blank" className="text-pink-500 underline">
                  Terms & Conditions
                </Link>
              </span>
            </label>
            {errors.agreed && <p className="text-rose-500 text-xs">{errors.agreed}</p>}
            {errors.submit && <p className="text-rose-500 text-sm text-center">{errors.submit}</p>}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <Link to="/login" className="text-sm text-gray-600">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;