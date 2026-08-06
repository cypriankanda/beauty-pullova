"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Building2,
  Send,
  TrendingUp,
  MapPin,
  Clock,
  Users,
  Settings,
  Star,
  Shield,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Salon = () => {
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

    if (!formData.name.trim() || !formData.email.trim() || !formData.role.trim()) {
      alert("Please fill in all fields before submitting.");
      return;
    }

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
      <SEO
        title="Partner Your Salon with Pullova | Grow Your Beauty Business"
        description="Partner your salon with Pullova to attract more clients, increase revenue, offer mobile beauty services, and grow your salon business through our trusted beauty marketplace."
        canonical="https://pullova.com/salon"
      />
      <Navigation />

      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white pt-24 pb-20">

        {/* HERO */}
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Grow Your Salon Beyond Your Location
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Reach more clients, fill unused capacity, and expand your revenue through Pullova’s on-demand platform.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-gradient-to-r from-primary to-secondary px-8 py-4">
              Partner With Us
            </Button>
            <Button className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-4 font-semibold">
              How It Works
            </Button>
          </div>
        </div>

        {/* POSITIONING */}
        <div className="max-w-3xl mx-auto text-center px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Turn Your Salon Into a Scalable Business
          </h2>
          <p className="text-gray-400">
            Pullova helps salons go beyond walk-ins and location limits. Whether you want to send professionals for home services or attract new in-salon clients, our platform connects you to consistent demand—without disrupting your existing operations.
          </p>
        </div>

        {/* VALUE */}
        <div className="max-w-6xl mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Why Salons Partner With Pullova
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Increase Revenue", text: "Access new clients without additional marketing costs." },
              { icon: MapPin, title: "Expand Beyond Your Location", text: "Serve clients anywhere without opening new branches." },
              { icon: Clock, title: "Maximize Idle Capacity", text: "Fill slow hours with real bookings." },
              { icon: Users, title: "Get More Clients", text: "Pullova brings demand directly to your salon." },
              { icon: Settings, title: "Flexible Participation", text: "Choose in-salon, home service, or both." },
              { icon: Star, title: "Strengthen Your Brand", text: "Reach more clients and grow your reputation." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl">
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
            Simple. Flexible. Scalable.
          </h2>
          <div className="space-y-3 text-gray-400">
            <p>Apply & Get Approved</p>
            <p>List Services & Availability</p>
            <p>Receive Client Bookings</p>
            <p>Deliver Services (In-Salon or On-Demand)</p>
            <p>Get Paid Securely</p>
          </div>
        </div>

        {/* PARTNERSHIP MODELS */}
        <div className="max-w-5xl mx-auto text-center px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Choose How You Partner
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-400">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">In-Salon Model</h3>
              <p>Clients book and visit your salon</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Mobile Service Model</h3>
              <p>Your team serves clients at their location</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Hybrid Model</h3>
              <p>Combine both for maximum revenue</p>
            </div>
          </div>
        </div>

        {/* TRUST */}
        <div className="max-w-3xl mx-auto text-center px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            A Reliable Platform for Professionals
          </h2>
          <div className="space-y-2 text-gray-400">
            <p>✔ Verified clients</p>
            <p>✔ Structured booking system</p>
            <p>✔ Secure payments</p>
            <p>✔ Customer support</p>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="max-w-2xl mx-auto px-4">
          <motion.div className="text-center mb-6">
            <h2 className="text-2xl font-bold">
              Ready to Grow Your Salon?
            </h2>
            <p className="text-gray-400 mt-2">
              Partner with Pullova and unlock new revenue opportunities.
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
                placeholder="Salon Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Business Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
              />
              <input
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Type of Salon"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-secondary">
              Partner With Us <Send className="ml-2 w-4 h-4" />
            </Button>

            {status === "success" && (
              <p className="text-green-400 mt-4 text-sm text-center">
                Application submitted successfully
              </p>
            )}
          </motion.form>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Salon;