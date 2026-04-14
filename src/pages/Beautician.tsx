"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  User,
  Send,
  Star,
  Shield,
  Globe,
  Clock,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Beautician = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // 1. BASIC VALIDATION (BLOCK EMPTY INPUTS)
    if (!formData.name.trim() || !formData.email.trim() || !formData.role.trim()) {
      alert("Please fill in all fields before submitting.");
      return;
    }
  
    // 2. EMAIL FORMAT VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    setStatus("loading");
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycby9W06VSN7JyvzgrjjgV6qQUG7a5jcNpz6d9ogpGyEkRuREi02Vyi0kM22BN2PlT5JW/exe", {
        method: "POST",
        body: JSON.stringify(formData),
      });
  
      await response.json();
  
      setStatus("success");
      setFormData({ name: "", email: "", role: "" });
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <Navigation />

      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white pt-24 pb-20">

        {/* HERO */}
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Grow Your Beauty Business with{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pullova
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Get real clients, fill your calendar, and grow your income — while
            staying fully in control of your time and services.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-gradient-to-r from-primary to-secondary px-8 py-4">
              Apply Now
            </Button>
            <Button className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-4 font-semibold">
              Learn How It Works
            </Button>
          </div>

          <p className="text-xs text-gray-500">
            Takes less than 2 minutes to apply
          </p>
        </div>

        {/* VALUE PROPOSITION */}
        <div className="max-w-3xl mx-auto text-center px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            More Than a Platform — A Growth Partner
          </h2>
          <p className="text-gray-400">
            Pullova is built for beauty professionals who want consistent
            bookings, predictable income, and full control over their work.
            We don’t just connect you to clients — we help you grow a real
            business.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="max-w-6xl mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Why Top Beauty Professionals Choose Pullova
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "More Clients, Less Effort",
                text: "We match you with clients actively looking for your services.",
              },
              {
                icon: Clock,
                title: "Work on Your Terms",
                text: "Choose your availability and accept only the jobs you want.",
              },
              {
                icon: Star,
                title: "Increase Your Income",
                text: "Turn downtime into steady, predictable earnings.",
              },
              {
                icon: Shield,
                title: "Safe & Trusted System",
                text: "Verified clients and secure booking structure.",
              },
              {
                icon: Globe,
                title: "Expand Your Reach",
                text: "Access more clients beyond your current location.",
              },
              {
                icon: User,
                title: "Build Your Personal Brand",
                text: "Showcase your work and grow your reputation.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl"
                >
                  <Icon className="mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="max-w-4xl mx-auto text-center px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Simple. Transparent. Fast.
          </h2>
          <div className="space-y-3 text-gray-400">
            <p>Apply & Get Verified</p>
            <p>Set Your Services & Availability</p>
            <p>Receive Booking Requests</p>
            <p>Complete Services & Get Paid</p>
          </div>
        </div>

        {/* EARNINGS */}
        <div className="max-w-3xl mx-auto text-center px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your Earnings, Your Growth
          </h2>
          <p className="text-gray-400">
            The more you work, the more you earn. Pullova ensures a steady flow
            of clients so you can focus on delivering great service — not
            finding customers.
          </p>
        </div>

        {/* WHO SHOULD JOIN */}
        <div className="max-w-4xl mx-auto text-center px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Built for Professionals Who Want More
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-400">
            <p>Beauticians</p>
            <p>Barbers</p>
            <p>Makeup Artists</p>
            <p>Nail Technicians</p>
            <p>Salon Professionals</p>
            <p>Beauty Students</p>
          </div>
        </div>

        {/* TRUST */}
        <div className="max-w-3xl mx-auto text-center px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            A Platform You Can Trust
          </h2>
          <div className="space-y-2 text-gray-400">
            <p>✔ Verified clients</p>
            <p>✔ Secure payments</p>
            <p>✔ Structured booking system</p>
            <p>✔ Dedicated support team</p>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="max-w-2xl mx-auto px-4">
          <motion.div className="text-center mb-6">
            <h2 className="text-2xl font-bold">
              Ready to Build a Steady Beauty Income?
            </h2>
            <p className="text-gray-400 mt-2">
              Join Pullova and start receiving real client requests.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="space-y-4 mb-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
              />
              <input
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Your Specialty"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-secondary">
              Apply Now <Send className="ml-2 w-4 h-4" />
            </Button>

            {status === "success" && (
              <p className="text-green-400 mt-4 text-sm text-center">
                Application submitted successfully
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Beautician;