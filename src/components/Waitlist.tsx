"use client";

import { useState } from "react";
import { Diamond, Crown, Zap, Mail, ChevronRight, Check } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const COLORS = {
  bgStart: "#1E0D33", 
  bgEnd: "#3C1E5C",
  accentGold: "#FFD700", 
  accentPurple: "#8A2BE2", 
  accentButton: "#CC3366", 
};

const Waitlist = () => {
  const [form, setForm] = useState({ email: "" }); 
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    setTimeout(() => {
        setMessage("You've been granted Priority Access! Check your email.");
        setForm({ email: "" }); 
        setLoading(false);
    }, 1500);

    /* --- REAL API CALL (COMMENTED OUT FOR DEMO) ---
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxZmXwLIvbKKAMk8gVo_NBdH4hAIWwoS4ywld2IgZUAJJwpTNun5rO5IL6ngXH-Axb7/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form), 
        }
      );
      const result = await response.json();
      if (result.success) {
        setMessage("✅ You've been added to the waitlist!");
        setForm({ email: "" }); 
      } else {
        setMessage(` ${result.error || "Something went wrong. Try again."}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage(" Failed to connect. Please try again.");
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <section 
      id="waitlist"
      className={`relative py-24 min-h-screen flex items-center justify-center bg-[${COLORS.bgStart}] overflow-hidden`}
    >
      
      {/* Dynamic Background Effect: Soft, glowing spheres and cosmic dust */}
      <div className="absolute inset-0 z-0" 
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${COLORS.bgEnd} 10%, ${COLORS.bgStart} 100%)`,
          opacity: 0.9,
        }}
      />
      {/* Subtle Star/Particle Effect */}
      <div className="absolute inset-0 z-0 opacity-20"
         style={{
           backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
           backgroundSize: "80px 80px",
           filter: "blur(0.2px)",
           animation: "drift 120s linear infinite",
         }}
      />
      <style jsx global>{`
        @keyframes drift {
          from { background-position: 0 0; }
          to { background-position: 100% 100%; }
        }
      `}</style>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className={`inline-block px-3 py-1 bg-white/10 rounded-full mb-6 uppercase text-[10px] tracking-[3px] font-semibold text-white/80 border border-white/20 shadow-md`}>
              The Founding Circle
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-extrabold text-white mb-4 leading-tight">
              Unrivaled Luxury
              <span className={`block mt-3 text-[${COLORS.accentGold}] text-shadow-lg`}>Delivered to You</span> 
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mt-6">
              <strong>Secure your place</strong> in our most exclusive membership tier. Experience five-star beauty services, brought directly to the sanctuary of your home.
            </p>
          </div>

          {/* Feature Cards - Enhanced Luxury Design and Interactivity */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group text-center p-6 lg:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] cursor-pointer ${feature.ringClass || ''}`}
              >
                {/* Icon Container - Glowing, transparent background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 lg:mb-5 mx-auto relative`}
                     style={{ 
                         backgroundColor: `${feature.iconColor}20`,
                         boxShadow: `0 0 15px ${feature.iconColor}80`
                     }}>
                  <feature.icon 
                    className={`w-8 h-8`} 
                    strokeWidth={2}
                    style={{ color: feature.iconColor }} 
                  />
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Waitlist Form - The Call to Action Block */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="flex flex-col items-center">
              
              {/* Integrated Input and Button (Focus Area) */}
              <div className="flex flex-col sm:flex-row w-full rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-2 border-white/30">
                
                <div className="relative flex-grow">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="w-full bg-white text-lg text-gray-800 placeholder:text-gray-500 h-16 pl-12 pr-4 border-none focus-visible:ring-4 focus-visible:ring-offset-0 rounded-none"
                    />
                </div>
                
                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  onClick={handleSubmit}
                  style={{ 
                    backgroundColor: COLORS.accentButton, 
                    boxShadow: `0 4px 20px 0 ${COLORS.accentButton}40` 
                  }}
                  className={`group w-full sm:w-auto flex-shrink-0 h-16 px-8 lg:px-10 text-white font-bold text-base lg:text-lg transition-all duration-200 hover:scale-[1.03] hover:brightness-110 rounded-none whitespace-nowrap`}
                >
                  {loading ? "Securing Spot..." : "Claim Your Spot"}
                  <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Form Info and Status */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 text-sm font-medium text-white/60">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Only <strong className="text-white">247</strong> founding spots remaining</span> 
                </div>
                <span className="hidden sm:inline text-white/40">•</span>
                <div className="flex items-center gap-2">
                  <span className="text-white/50">No commitment or credit card needed</span>
                </div>
              </div>

              {message && (
                <p className={`text-center mt-5 text-base px-4 font-semibold ${message.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>{message}</p>
              )}
            </div>
            
            {/* Trust Bar - Stronger Visual Trust */}
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
                    <span className={`text-xl lg:text-2xl text-white font-extrabold ml-3 tracking-wider`}>
                        1,247<span className="text-white/70 font-semibold">+</span> members
                    </span>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;