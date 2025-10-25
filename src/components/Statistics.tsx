import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Award, Globe } from "lucide-react";

// Mock CountUp component (since we cannot import 'react-countup' in this single file environment)
// This implements a simple text display fallback or can be replaced with the actual library if available.
const CountUp = ({ end, duration, separator }) => {
  // In a real environment, this would render the counting animation.
  // For this self-contained file, we'll return the formatted end value.
  return (
    <span className="font-extrabold text-4xl sm:text-5xl">
      {end.toLocaleString()}
    </span>
  );
};


// Updated statistics based on the request to significantly reduce numbers for a starting app
const stats = [
  {
    icon: CheckCircle,
    value: 250, // Reduced significantly from 12,500
    suffix: "+",
    label: "Beauty Sessions Completed",
    color: "text-rose-600",
    bg: "bg-rose-100/50",
    iconBg: "from-rose-500 to-pink-500",
  },
  {
    icon: Award,
    value: 15, // Reduced significantly from 625
    suffix: "+",
    label: "Licensed Professionals",
    color: "text-purple-600",
    bg: "bg-purple-100/50",
    iconBg: "from-purple-500 to-indigo-500",
  },
  {
    icon: Globe,
    value: 4, // Reduced significantly from 35 (reflecting the 4 initial markets)
    suffix: "+",
    label: "Cities Globally Served",
    color: "text-pink-600",
    bg: "bg-pink-100/50",
    iconBg: "from-pink-500 to-rose-500",
  },
];

const Statistics = () => {
  const ref = useRef(null);
  // Trigger animation when 50px of the component is visible
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-28 bg-white border-b border-gray-100"
    >
      <div className="container mx-auto px-4">
        {/* Title for Context */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900">
            Our Global Reach and Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                // Animate when the component is in view
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`text-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${stat.bg}`}
              >
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.iconBg} rounded-full flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Animated Value (CountUp) */}
                <div className={`mb-3 ${stat.color} leading-none`}>
                  {isInView ? (
                    <>
                      {/* Using CountUp for animation */}
                      <CountUp end={stat.value} duration={2.5} separator="," />
                      <span className="text-4xl md:text-5xl font-extrabold">{stat.suffix}</span>
                    </>
                  ) : (
                    // Display 0 while waiting for view
                    <span className="text-4xl md:text-5xl font-extrabold">0</span>
                  )}
                </div>
                
                {/* Label */}
                <p className="text-lg text-gray-700 font-semibold uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
