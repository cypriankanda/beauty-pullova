"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema, ClientFormData } from "@/validations/clientSchema";
import { submitClientLead } from "@/services/clientService";
import { useState } from "react";
import {
  Clock,
  Home,
  Calendar,
  Shield,
  Star,
  CheckCircle,
  Send,
} from "lucide-react";

import SEO from "@/components/SEO";

/* -------------------- ANIMATIONS -------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

/* -------------------- HERO -------------------- */

const Hero = () => (
  <section className="text-center max-w-4xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-bold"
    >
      Beauty & Grooming <br /> Delivered to You
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-gray-400 mt-4"
    >
      Book trusted professionals at home, work, or anywhere on your schedule.
    </motion.p>

    <div className="flex flex-wrap justify-center gap-3 mt-6 text-xs text-gray-300">
      {[
        "Verified Professionals",
        "Future Booking",
        "Transparent Pricing",
        "Top-notch Security",
        "Same-Day Availability",
        "Secure Payments",
        "Trusted Platform",
      ].map((t) => (
        <span
          key={t}
          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur"
        >
          {t}
        </span>
      ))}
    </div>

    <div className="flex gap-4 justify-center mt-8">
      <Button className="bg-gradient-to-r from-primary to-secondary text-white">
        Download App
      </Button>

      {/* <Button className="bg-white text-gray-900 hover:bg-gray-100 border border-white/20">
        Book Service
      </Button> */}
    </div>
  </section>
);

/* -------------------- FEATURES -------------------- */

const features = [
  { icon: Clock, title: "Save Time", text: "No queues or travel." },
  { icon: Home, title: "At Your Location", text: "We come to you." },
  { icon: Calendar, title: "Flexible", text: "Book anytime." },
  { icon: Shield, title: "Trusted", text: "Verified pros." },
  { icon: Star, title: "Quality", text: "Consistent results." },
  { icon: CheckCircle, title: "Stress-Free", text: "Relax & enjoy." },
];

const Features = () => (
  <section className="mt-24 max-w-6xl mx-auto">
    <h2 className="text-center text-3xl font-bold mb-10">
      Why Choose Pullova
    </h2>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-6"
    >
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <motion.div
            key={f.title}
            variants={fadeUp}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
          >
            <Icon className="text-primary mb-3" />
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.text}</p>
          </motion.div>
        );
      })}
    </motion.div>
  </section>
);

/* -------------------- TIMELINE -------------------- */

const steps = [
  "Choose Your Service",
  "Select Time & Location",
  "Get Matched Instantly",
  "Enjoy Your Service",
];

const Timeline = () => (
  <section className="mt-24 text-center">
    <h2 className="text-3xl font-bold mb-8">Simple. Fast. Reliable.</h2>

    <div className="space-y-4">
      {steps.map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center justify-center gap-3 text-gray-300"
        >
          <span className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40" />
          {s}
        </motion.div>
      ))}
    </div>
  </section>
);

/* -------------------- FORM -------------------- */

const BookingForm = () => {
  const [status, setStatus] =
    useState<"idle" | "loading" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClientFormData>({
    resolver: zodResolver(clientSchema),
  });

  const onSubmit = async (data: ClientFormData) => {
    try {
      setStatus("loading");
      await submitClientLead(data);
      setStatus("success");
      reset();
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section className="mt-24 max-w-xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Book in Minutes</h2>
        <p className="text-gray-400">Start your beauty journey today</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4"
      >
        <input
          {...register("name")}
          placeholder="Full Name"
          className="w-full p-3 rounded-xl bg-black/20 border border-white/10"
        />
        <p className="text-red-400 text-xs">{errors.name?.message}</p>

        <input
          {...register("email")}
          placeholder="Email"
          className="w-full p-3 rounded-xl bg-black/20 border border-white/10"
        />
        <p className="text-red-400 text-xs">{errors.email?.message}</p>

        <input
          {...register("service")}
          placeholder="Service"
          className="w-full p-3 rounded-xl bg-black/20 border border-white/10"
        />
        <p className="text-red-400 text-xs">{errors.service?.message}</p>

        <Button disabled={status === "loading"} className="w-full">
          {status === "loading" ? "Submitting..." : "Get Started"}
          <Send className="ml-2 w-4 h-4" />
        </Button>

        {status === "success" && (
          <p className="text-green-400 text-center text-sm">
            Submitted successfully 🎉
          </p>
        )}
      </form>
    </section>
  );
};

/* -------------------- PAGE -------------------- */

const Client = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
       <SEO
        title="Book Beauty & Grooming Services | Pullova"
        description="Book trusted beauty professionals for hair, makeup, nails, barbering, spa and wellness services at your home, office or preferred location with Pullova."
        canonical="https://pullova.com/client"
      />
      <Navigation />

      <div className="pt-28 px-4 space-y-24">
        <Hero />
        <Features />
        <Timeline />
        <BookingForm />

        {/* ✅ FIXED FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default Client;