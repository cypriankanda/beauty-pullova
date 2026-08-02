"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/Seo"

const COLORS = {
  bgStart: "#1E0D33",
  bgEnd: "#3C1E5C",
  accentGold: "#FFD700",
  accentPurple: "#8A2BE2",
};

const AboutUs = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <SEO
        title="About Pullova | On-Demand Beauty & Grooming Platform"
        description="Learn about Pullova, our mission, vision, and how we connect clients with trusted beauty and grooming professionals for safe, convenient on-demand services."
        canonical="https://pullova.com/about"
      />

      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 20%, ${COLORS.bgEnd} 0%, ${COLORS.bgStart} 70%)`,
        }}
      />

      {/* GLOW BLOBS */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-pink-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-yellow-400/10 blur-3xl rounded-full animate-pulse" />

      <Navigation />

      <div className="relative z-10 pt-28 pb-20 px-4 max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            About{" "}
            <span className="text-yellow-300">Pullova Beauty</span>
          </h1>

          <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Beauty and grooming designed around your life.
            We connect individuals, families, students, corporate clients and seniors
            with verified professionals for safe, convenient, on-demand services anytime, anywhere.
          </p>
        </motion.div>

        {/* GRID CARDS */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* WHO WE ARE */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 border-t border-l border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:border-white/40 transition-all"
          >
            <h2 className="text-2xl font-extrabold tracking-tight mb-4">
              Who We Are
            </h2>

            <div className="space-y-4 text-white/70 leading-relaxed text-sm">
              <p>
                Pullova Beauty is a trusted on-demand platform delivering professional beauty and grooming services to your doorstep designed for real life, real schedules, and real people.
              </p>

              <p>
                We serve individuals, professionals, families, students, corporate teams and seniors making access to quality services simple without travel or uncertainty.
              </p>

              <p>
                Our intelligent matching system connects clients with verified professionals based on location, availability and service needs ensuring consistency and reliability every time.
              </p>

              <p>
                From same day bookings to corporate wellness and home care services we deliver convenience, flexibility and peace of mind.
              </p>
            </div>
          </motion.div>

          {/* MISSION + VISION STACK */}
          <div className="space-y-6">

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 border-t border-l border-white/20 hover:border-white/40 transition-all"
            >
              <h2 className="text-xl font-extrabold tracking-tight mb-2">
                Our Mission
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                To make beauty and grooming services accessible, reliable and convenient while creating sustainable income opportunities for professionals.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 border-t border-l border-white/20 hover:border-white/40 transition-all"
            >
              <h2 className="text-xl font-extrabold tracking-tight mb-2">
                Our Vision
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                To become a globally trusted platform for on-demand personal services where convenience safety and empowerment define everyday experience.
              </p>
            </motion.div>

          </div>
        </div>

        {/* BOTTOM VALUE STATEMENT */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="mt-10 p-8 rounded-2xl text-center bg-white/5 backdrop-blur-md border border-white/10 border-t border-l border-white/20 hover:border-white/40 transition-all"
        >
          <h3 className="text-2xl font-extrabold tracking-tight mb-3">
            Built for real life
          </h3>

          <p className="text-white/70 max-w-2xl mx-auto text-sm leading-relaxed">
            Quality beauty services should be accessible reliable and designed around how people actually live.
          </p>
        </motion.div>

      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;