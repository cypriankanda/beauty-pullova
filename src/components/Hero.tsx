import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  Scissors,
  Briefcase,
  Star,
  Clock,
  Shield,
  MapPin,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const USER_HERO_IMAGES = [
  "https://res.cloudinary.com/djkqh6uhr/image/upload/v1760955407/hero-beautyy_pmruqi.jpg",
  "https://res.cloudinary.com/djkqh6uhr/image/upload/v1760955277/Gemini_Generated_Image_mdr1psmdr1psmdr1_zgvctm.png",
  "https://res.cloudinary.com/djkqh6uhr/image/upload/v1760955118/gurpreet-singh-YL4xphQzZrw-unsplash_r6mbut.jpg",
  "https://res.cloudinary.com/djkqh6uhr/image/upload/v1761399405/2_fipgb3.jpg",
  "https://res.cloudinary.com/djkqh6uhr/image/upload/v1761399405/3_snnfgu.jpg",
  "https://res.cloudinary.com/djkqh6uhr/image/upload/v1761399404/1_syqwyd.jpg",
  "https://res.cloudinary.com/djkqh6uhr/image/upload/v1760955118/allison-christine-n4MHxHD1dKI-unsplash_ti0yhb.jpg",
];

const INITIAL_STATS = [
  { country: "USA", flag: "" },
  { country: "Kenya", flag: "" },
  { country: "Nigeria", flag: "" },
  { country: "South Africa", flag: "" },
];

interface HeroProps {
  headline: string;
  subtext: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subtext }) => {
  const [images, setImages] = useState(USER_HERO_IMAGES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState<string[]>([]);

  useEffect(() => {
    if (images.length < 2) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  // Preload images and check for errors
  useEffect(() => {
    const errors: string[] = [];
    USER_HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.onload = () => console.log(`Loaded: ${src}`);
      img.onerror = () => {
        console.error(`Failed to load: ${src}`);
        errors.push(src);
      };
      img.src = src;
    });
    
    setTimeout(() => {
      if (errors.length > 0) {
        setImageError(errors);
      }
    }, 3000);
  }, []);

  const STARTING_STATS = [
    { value: "100+", label: "Beauty Sessions Completed" },
    { value: "4.9★", label: "Average Rating" },
    { value: "10+", label: "Licensed Professionals" },
  ];

  const TRUST_TEXT = "Trusted by 100+ Initial Customers";

  if (images.length === 0) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <p className="text-xl text-gray-500">
          Loading amazing visuals... <span className="animate-pulse">✨</span>
        </p>
      </section>
    );
  }

  const handleImageError = () => {
    console.error(`Image failed to load: ${images[currentIndex]}`);
    // Skip to next image if current one fails
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-purple-50 font-sans pt-24 md:pt-32">
      {/* Background Orbs and Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column: Headline and CTAs */}
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
              <span className="text-gray-800 text-sm font-semibold">
                {TRUST_TEXT}
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-gray-900">
                Pullova Beauty
              </span>
              <br />
              <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Services Delivered to You
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
                  <p className="font-semibold text-gray-900 text-sm">
                    Verified Pros
                  </p>
                  <p className="text-xs text-gray-500">Background checked</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Same Day
                  </p>
                  <p className="text-xs text-gray-500">Available 7am–10pm</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Guaranteed
                  </p>
                  <p className="text-xs text-gray-500">100% satisfaction</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Your Place
                  </p>
                  <p className="text-xs text-gray-500">No travel needed</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
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
                className="text-gray-700 px-8 py-6 font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                View Services & Pricing
              </Button>
            </motion.div>

            {/* Global Markets Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 pt-8 border-t border-gray-200"
            >
              <p className="text-gray-500 text-xs mb-3 uppercase tracking-wide font-medium flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-500" />
                Currently Serving Initial Global Markets
              </p>
              <div className="flex gap-x-6 gap-y-3 items-center flex-wrap">
                {INITIAL_STATS.map((item) => (
                  <div key={item.country} className="text-gray-700 font-semibold text-lg flex items-center gap-2">
                    <span className="text-2xl">{item.flag}</span>
                    <span className="text-base text-gray-900">{item.country}</span>
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

              {/* Decorative Blur Effects */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full blur-2xl opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-2xl opacity-50" />
            </div>

            {/* Debug Info - Remove after testing */}
            {imageError.length > 0 && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600">
                <p className="font-semibold mb-1">Failed to load images:</p>
                {imageError.map((url, idx) => (
                  <p key={idx} className="truncate">{url}</p>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;