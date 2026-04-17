import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Star, Shield, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Constants ---
const USER_HERO_IMAGES = [
  "https://res.cloudinary.com/djkqh6uhr/image/upload/f_auto,q_auto,w_1200,c_fill/v1760955407/hero-beautyy_pmruqi.jpg",
  "https://res.cloudinary.com/djicliqf5/image/upload/v1773683753/eze-joseph-YxJraqxH3aQ-unsplash_tuwlnu.jpg",
  "https://res.cloudinary.com/djicliqf5/image/upload/v1773683754/faustina-okeke-JHbu-eg1rnE-unsplash_x3omug.jpg",
  "https://res.cloudinary.com/djicliqf5/image/upload/v1773683760/chidy-young-_9cuaC6Y4iA-unsplash_fnww8j.jpg",
  "https://res.cloudinary.com/djkqh6uhr/image/upload/f_auto,q_auto,w_1200,c_fill/v1760955277/Gemini_Generated_Image_mdr1psmdr1psmdr1_zgvctm.png",
  "https://res.cloudinary.com/djicliqf5/image/upload/v1773683113/beauty1_luhgoc.jpg",
];

// ✅ CHANGED: replaced emoji flags with ISO country codes for flagcdn.com
const INITIAL_STATS = [
  { country: "USA", code: "us" },
  { country: "Kenya", code: "ke" },
  { country: "Nigeria", code: "ng" },
  { country: "South Africa", code: "za" },
];

const STARTING_STATS = [
  { value: "1,000+", label: "Beauty Sessions Completed" },
  { value: "4.9★", label: "Average Rating" },
  { value: "800+", label: "Licensed Professionals" },
];

const TRUST_TEXT = "Trusted beauty. Delivered on your terms.";

interface HeroProps {
  headline: string;
  subtext: string;
}

// --- Component ---
const Hero: React.FC<HeroProps> = ({ headline, subtext }) => {
  const [images, setImages] = useState(USER_HERO_IMAGES);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  const handleImageError = () => {
    setImages((prev) => prev.filter((_, i) => i !== currentIndex));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-purple-50 font-sans pt-24 md:pt-32">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-purple-100 px-4 py-2 rounded-full mb-6 border border-rose-200/50 shadow-sm"
            >
              <span className="text-gray-800 text-sm font-semibold">{TRUST_TEXT}</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-gray-900">Pullova Beauty</span>
              <br />
              <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Look Good. Feel Unstoppable.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              {subtext}
            </p>

            {/* Feature Blocks */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Verified Professionals</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Guaranteed</p>
                  <p className="text-xs text-gray-500">100% satisfaction</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">At Your Location</p>
                  <p className="text-xs text-gray-500">No travel needed</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group"
              >
                <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Your Service Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const section = document.getElementById("services");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 px-8 py-6 font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                View Services
              </Button>
            </motion.div>

            {/* Added Text Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <p className="text-gray-900 font-medium text-base mb-1">
                Beauty and grooming, designed around your life.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                Book verified professionals for safe, on-demand services anytime, anywhere.
              </p>
            </motion.div>

            {/* Global Markets Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 pt-8 border-t border-gray-200"
            >
              <p className="text-gray-500 text-xs mb-3 uppercase tracking-wide font-medium flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-500" />
                Currently Serving Initial Global Markets
              </p>

              {/* ✅ CHANGED: replaced emoji spans with <img> tags from flagcdn.com */}
              <div className="flex gap-x-6 gap-y-3 items-center flex-wrap">
                {INITIAL_STATS.map((item) => (
                  <div
                    key={item.country}
                    className="flex items-center gap-2"
                  >
                    <img
                      src={`https://flagcdn.com/w40/${item.code}.png`}
                      srcSet={`https://flagcdn.com/w80/${item.code}.png 2x`}
                      width={28}
                      height={20}
                      alt={`${item.country} flag`}
                      className="rounded-sm object-cover shadow-sm"
                    />
                    <span className="text-base font-semibold text-gray-900">
                      {item.country}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-rose-200 via-purple-200 to-pink-200 flex items-center justify-center">
                <motion.img
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  src={images[currentIndex]}
                  alt="Professional beauty service at home"
                  className="w-full h-full object-cover absolute inset-0"
                  onError={handleImageError}
                  loading="eager"
                />
              </div>

              {/* Stats Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  {STARTING_STATS.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-extrabold text-rose-600/90 leading-none mb-1">
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-700 uppercase font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;