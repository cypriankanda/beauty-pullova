"use client";

import { useState, useEffect } from "react";
import { Diamond, Crown, Zap, Mail, User, Smartphone, ChevronRight, Check, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const COLORS = {
  bgStart: "#1E0D33",
  bgEnd: "#3C1E5C",
  accentGold: "#FFD700",
  accentPurple: "#8A2BE2",
  accentButton: "#CC3366",
};

interface WaitlistProps {
  region?: string;
}

const Waitlist: React.FC<WaitlistProps> = ({ region }) => {
  const [form, setForm] = useState({ 
    fullName: "", 
    email: "", 
    platform: "",
    userType: "" 
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [memberCount, setMemberCount] = useState(10);

  useEffect(() => {
    const loadMemberCount = () => {
      try {
        const stored = localStorage.getItem('member-count');
        if (stored) {
          setMemberCount(parseInt(stored));
        }
      } catch (error) {
        console.log('Using default member count');
      }
    };
    loadMemberCount();
  }, []);

  const features = [
    {
      icon: Diamond,
      title: "$50 Welcome Credit",
      description: "Exclusive founding member bonus for your first service",
      iconColor: COLORS.accentGold,
    },
    {
      icon: Crown,
      title: "VIP Priority Access",
      description: "Book premium stylists before public launch",
      ringClass: "shadow-[0_0_40px_rgba(255,255,255,0.15)] border-white/40",
      iconColor: COLORS.accentPurple,
    },
    {
      icon: Zap,
      title: "Lifetime Benefits",
      description: "15% off all services, forever—lock in your rate now",
      iconColor: COLORS.accentButton,
    },
  ];

  const userTypes = [
    { value: "client", label: "Client" },
    { value: "student-client", label: "Student Client" },
    { value: "beautician", label: "Beautician" },
    { value: "intern-beautician", label: "Intern Beautician" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Fire-and-forget request to Google Sheets
      await fetch(
        "https://script.google.com/macros/s/AKfycbxsAaZwmVlalFyHw0agR5vRk2You9HkW5SalT2QnmnDpfrJGapDLWU8_xYMGQKhZuqeGA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: form.fullName,
            email: form.email,
            platform: form.platform,
            userType: form.userType,
          }),
        }
      );

      const newCount = memberCount + 1;
      localStorage.setItem('member-count', newCount.toString());
      setMemberCount(newCount);

      // Don't wait for GAS (instant UX)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage("✓ You've been added to the waitlist!");
      setForm({ fullName: "", email: "", platform: "", userType: "" });
    } catch (error) {
      console.error("Error submitting:", error);
      setMessage("⚠️ There was a problem. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className={`relative py-24 min-h-screen flex items-center justify-center bg-[${COLORS.bgStart}] overflow-hidden`}
    >
      {/* Add the keyframes animation using regular style tag */}
      <style>
        {`
          @keyframes drift {
            from { background-position: 0 0; }
            to { background-position: 100% 100%; }
          }
        `}
      </style>

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${COLORS.bgEnd} 10%, ${COLORS.bgStart} 100%)`,
          opacity: 0.9,
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "80px 80px",
          filter: "blur(0.2px)",
          animation: "drift 120s linear infinite",
        }}
      />
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div
            className={`inline-block px-3 py-1 bg-white/10 rounded-full mb-6 uppercase text-[10px] tracking-[3px] font-semibold text-white/80 border border-white/20 shadow-md`}
          >
            Pullova Beauty Founding Circle
          </div>

          <h1 className="text-6xl lg:text-8xl font-extrabold text-white mb-4 leading-tight">
            Unrivaled Luxury
            <span
              className={`block mt-3 text-[${COLORS.accentGold}] text-shadow-lg`}
            >
              Delivered to You
            </span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mt-6">
            <strong>Secure your place</strong> in our most exclusive membership
            tier. Experience five-star beauty services, brought directly to your
            home.
          </p>
        </div>



        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group text-center p-6 lg:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] cursor-pointer ${feature.ringClass || ""}`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 lg:mb-5 mx-auto relative`}
                style={{
                  backgroundColor: `${feature.iconColor}20`,
                  boxShadow: `0 0 15px ${feature.iconColor}80`,
                }}
              >
                <feature.icon
                  className={`w-8 h-8`}
                  strokeWidth={2}
                  style={{ color: feature.iconColor }}
                />
              </div>

              <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Waitlist Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12">
          <div className="flex flex-col items-center gap-4">
            {/* User Type Selection */}
            <div className="w-full">
              <label className="block text-white/80 text-sm font-semibold mb-3 text-center">
                I am joining as:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {userTypes.map((type) => (
                  <Button
                    key={type.value}
                    type="button"
                    variant={form.userType === type.value ? "default" : "outline"}
                    onClick={() => setForm({ ...form, userType: type.value })}
                    className={`flex items-center justify-center h-12 text-sm font-semibold rounded-xl transition-all ${
                      form.userType === type.value
                        ? "bg-purple-600 text-white border-none shadow-lg"
                        : "bg-white/90 text-gray-700 border-gray-300 hover:bg-white hover:scale-[1.02]"
                    }`}
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    {type.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Full Name Input */}
            <div className="relative w-full">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                type="text"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={(e) =>
                  setForm({ ...form, fullName: e.target.value })
                }
                required
                className="w-full bg-white text-lg text-gray-800 placeholder:text-gray-500 h-16 pl-12 pr-4 border-none focus-visible:ring-4 focus-visible:ring-offset-0 rounded-2xl"
              />
            </div>

            {/* Email Input */}
            <div className="relative w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
                className="w-full bg-white text-lg text-gray-800 placeholder:text-gray-500 h-16 pl-12 pr-4 border-none focus-visible:ring-4 focus-visible:ring-offset-0 rounded-2xl"
              />
            </div>

            {/* Platform Selection */}
            <div className="flex gap-4 w-full justify-center">
              {["iOS", "Android"].map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant={
                    form.platform === option ? "default" : "outline"
                  }
                  onClick={() => setForm({ ...form, platform: option })}
                  className={`flex items-center justify-center w-1/2 h-14 text-base font-semibold rounded-2xl ${
                    form.platform === option
                      ? "bg-pink-600 text-white border-none"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  {option}
                </Button>
              ))}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading || !form.userType}
              size="lg"
              style={{
                backgroundColor: COLORS.accentButton,
                boxShadow: `0 4px 20px 0 ${COLORS.accentButton}40`,
              }}
              className="w-full sm:w-auto h-16 px-8 lg:px-10 text-white font-bold text-base lg:text-lg transition-all duration-200 hover:scale-[1.03] hover:brightness-110 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Securing Spot..." : "Join the waitlist"}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Info & Message */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 text-sm font-medium text-white/60">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>
                  Only <strong className="text-white">247</strong> founding
                  spots remaining
                </span>
              </div>
              <span className="hidden sm:inline text-white/40">•</span>
              <div className="flex items-center gap-2">
                <span className="text-white/50">
                  No commitment or credit card needed
                </span>
              </div>
            </div>

            {message && (
              <p
                className={`text-center mt-5 text-base px-4 font-semibold ${
                  message.startsWith("✓")
                    ? "text-green-400"
                    : "text-yellow-400"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </form>

        {/* Trust Bar */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="text-xs uppercase tracking-[3px] text-white/40 mb-4">
            Trusted by a growing community of discerning clients
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-white/40 border border-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/40 border border-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/40 border border-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/40 border border-white/20"></div>
            </div>
            <span className="text-xl lg:text-2xl text-white font-extrabold ml-3 tracking-wider">
              {memberCount}<span className="text-white/70 font-semibold">+</span>{" "}
              members
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;