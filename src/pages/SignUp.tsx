import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
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

    if (!form.fullName.trim())
      newErrors.fullName = "Full name is required.";

    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email.";

    if (!form.phone.match(/^\+?[\d\s\-().]{7,15}$/))
      newErrors.phone = "Enter a valid phone number.";

    if (form.password.length < 8)
      newErrors.password = "Minimum 8 characters required.";

    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (!agreed)
      newErrors.agreed = "You must accept the terms.";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      await fetch("https://script.google.com/macros/s/AKfycby9W06VSN7JyvzgrjjgV6qQUG7a5jcNpz6d9ogpGyEkRuREi02Vyi0kM22BN2PlT5JW/exec", {
        method: "POST",
        mode: "no-cors", // IMPORTANT for Apps Script
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "pullova-2026-secret" // 🔐 add this
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone
        }),
      });

      setSubmitted(true);
    } catch {
      setErrors({ submit: "Failed to create account." });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400";

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div className="bg-white p-8 rounded-xl text-center shadow">
          <CheckCircle2 className="mx-auto text-pink-500 mb-3" />
          <h2 className="text-xl font-bold">Account Created 🎉</h2>
          <p className="text-sm text-gray-500 mb-4">
            Your account has been successfully created.
          </p>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow max-w-md w-full">
        
        {/* ✅ Title + Intro */}
        <h1 className="text-2xl font-bold mb-2">
          Create Your Pullova Account
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Sign up to access Pullova services securely.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="text-xs font-semibold text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              className={inputBase}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              className={inputBase}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs font-semibold text-gray-600">
              Mobile Phone Number
            </label>
            <input
              type="tel"
              className={inputBase}
              onChange={(e) => handleChange("phone", e.target.value)}
            />

            {/* ✅ CRITICAL SMS CONSENT TEXT */}
            <p className="mt-2 text-[11px] text-gray-500 leading-relaxed bg-gray-50 border border-gray-200 rounded-lg p-3">
              By entering your phone number, you consent to receive SMS messages
              from <span className="font-semibold">Pullova Technologies</span>{" "}
              for account verification (OTP). Message frequency may vary. Msg &amp;
              data rates may apply. Reply STOP to opt out, HELP for help.
            </p>
          </div>

          {/* Password */}
          <div>
            <label className="text-xs font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              className={inputBase}
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-xs font-semibold text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              className={inputBase}
              onChange={(e) =>
                handleChange("confirmPassword", e.target.value)
              }
            />
          </div>

          {/* ✅ Privacy / Terms */}
          <p className="text-[11px] text-gray-500 leading-relaxed">
            By continuing, you agree to our{" "}
            <Link
              to="/privacy-policy"
              target="_blank"
              className="text-pink-500 font-semibold underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              to="/terms"
              target="_blank"
              className="text-pink-500 font-semibold underline"
            >
              Terms &amp; Conditions
            </Link>
            .
          </p>

          {/* Checkbox */}
          <label className="flex gap-2 text-xs">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            I agree to the terms
          </label>

          {errors.submit && (
            <p className="text-red-500 text-sm">{errors.submit}</p>
          )}

          {/* Button */}
          <Button className="w-full" disabled={loading}>
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Create Account"
            )}
          </Button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;