import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Phone, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/Seo"

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
    // TODO: Connect to backend (JWT login)
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const inputBase =
    "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200";

  const errorClass = "border-rose-400 focus:ring-rose-400";

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 flex flex-col">
      <SEO
        title="Login to Your Pullova Account"
        description="Sign in to your Pullova account to book beauty services, manage appointments, and access your profile."
        canonical="https://pullova.com/login"
        noIndex
      />
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/25 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 pt-8">
        <Link to="/" className="flex items-center gap-2">
          <img src="/PULLOVA1.svg" className="w-10 h-10" />
          <span className="font-bold text-xl">Pullova</span>
        </Link>
      </div>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md"
        >
          <h1 className="text-3xl font-bold mb-2">Log In</h1>
          <p className="text-sm text-gray-500 mb-6">
            Access your account securely.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Identifier */}
            <div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Phone or Email"
                  value={form.identifier}
                  onChange={(e) =>
                    handleChange("identifier", e.target.value)
                  }
                  className={`${inputBase} ${
                    errors.identifier ? errorClass : ""
                  }`}
                />
              </div>
              {errors.identifier && (
                <p className="text-xs text-rose-500 mt-1">
                  {errors.identifier}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) =>
                    handleChange("password", e.target.value)
                  }
                  className={`${inputBase} pr-10 ${
                    errors.password ? errorClass : ""
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-xs text-rose-500 mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Button */}
<Button className="w-full flex items-center justify-center gap-2">
  Log In <ArrowRight className="w-4 h-4" />
</Button>

{/* SMS Consent Message */}
<p className="text-xs text-gray-500 text-center mt-3 leading-relaxed">
  By logging in with your mobile number, you agree to receive SMS messages from Pullova Technologies.
</p>
          </form>

          {/* Footer */}
          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-pink-500 font-semibold">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;