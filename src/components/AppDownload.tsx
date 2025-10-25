import React, { useRef } from 'react';
// Assuming Framer Motion hooks and components are available in the environment
import { motion, useInView } from "framer-motion";
import { Smartphone, Download, ArrowRight } from "lucide-react";

// Mock Icons to replace the complex SVG definitions, using inline SVGs from Lucide for simplicity
const AppStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6">
    <path d="M12 2a10 10 0 0 0-9.8 11.8A10 10 0 0 0 12 22a10 10 0 0 0 9.8-8.2A10 10 0 0 0 12 2zM12 4a8 8 0 0 1 7.7 5.7L12 12V4zm-7.7 5.7A8 8 0 0 1 12 20a8 8 0 0 1-7.7-5.7z"/>
    <path d="M15 15.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" fill="#fff" />
  </svg>
);

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6">
    <path d="M3.1 3.2L12 12 3.1 20.8A.5.5 0 0 1 3 20.5V3.5a.5.5 0 0 1 .1-.3z"/>
    <path d="M12.5 13.7l6.5-3.7L12.5 6.3v7.4z" fill="#fff" />
    <path d="M19.3 12.5L12 21.6 4.7 12.5h14.6z" fill="#fff" opacity=".5" />
    <path d="M19.3 11.5L12 2.4 4.7 11.5h14.6z" fill="#fff" opacity=".7" />
  </svg>
);


// NOTE ON ASSETS: We are using the local path as requested. This path will resolve correctly 
// when the component is placed inside your React project's asset pipeline.
// ----------------------------------------------------------------------
const MOCKUP_IMAGE_URL = 'src/assets/signin.png';


// Main component
const AppDownload = () => {
  const ref = useRef(null);
  // Trigger animation slightly sooner for a smoother look
  const isInView = useInView(ref, { once: true, margin: "-150px 0px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    // Outer section: Dark background for high contrast
    <section ref={ref} className="py-24 sm:py-32 bg-gray-900 font-inter">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* CTA Card: Modern, angled layout with a subtle, deep gradient */}
        <div className="relative bg-gradient-to-br from-purple-700 to-indigo-800 rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">

          {/* Decorative Background Shapes (abstract circles) */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px] opacity-70 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/30 rounded-full blur-[100px] opacity-70 animate-pulse delay-1000" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">

            {/* Left Column: Text Content and Buttons */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-white/30 shadow-inner">
                <Smartphone className="w-8 h-8 text-white" strokeWidth={2.5} />
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
                Get Your Personalized Download
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-xl text-indigo-200 mb-10 leading-relaxed max-w-lg">
                <strong>Great news!</strong> If you joined our waitlist, check your email for a personalized download link to get instant access to exclusive features and seamless booking.
              </motion.p>

              {/* Download Buttons: Enhanced design for clickability and visual hierarchy */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                {/* Primary Button - Solid Fill */}
                <a href="#" className="flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-[1.03] hover:shadow-white/40 focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-purple-700">
                  <AppStoreIcon />
                  App Store
                </a>
                {/* Secondary Button - Outline for hierarchy */}
                <a href="#" className="flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white/50 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-[1.03] hover:border-white focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-purple-700">
                  <GooglePlayIcon />
                  Google Play
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: High-Fidelity Mockup with subtle 3D effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative hidden md:flex justify-center h-[500px] group perspective-[1000px]"
            >
              {/* Phone Mockup Frame - High detail with 3D tilt */}
              <div 
                className="absolute w-[280px] h-[480px] bg-gray-900 rounded-[40px] p-2 shadow-[0_15px_40px_rgba(0,0,0,0.8),_0_0_0_4px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out transform rotate-x-6 rotate-z-[-2deg] group-hover:rotate-x-0 group-hover:rotate-z-0"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isInView ? 'rotateX(0deg) rotateZ(0deg)' : 'rotateX(10deg) rotateZ(-5deg)',
                    transition: 'transform 1.0s ease-out 0.5s'
                }}
              >
                {/* Screen Content: The local image will load here in your project */}
                <div className="w-full h-full rounded-[30px] overflow-hidden shadow-inner-[0_0_10px_rgba(0,0,0,0.5)]">
                  <img
                    src={MOCKUP_IMAGE_URL}
                    alt="App screen preview showing a sign in screen"
                    className="w-full h-full object-cover"
                    // Fallback visual if the local path cannot be resolved (only visible in environments without assets)
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      // clear the onerror handler to avoid loops (use any to bypass strict typing on the DOM handler)
                      (img as any).onerror = null;
                      img.style.display = 'none'; // Hide broken image icon
                      // Use parentElement which is typed as HTMLElement | null
                      const parent = img.parentElement as HTMLElement | null;
                      if (parent) {
                        parent.style.backgroundColor = '#3730a3';
                        parent.innerHTML = '<div class="flex items-center justify-center h-full text-white/50 text-sm font-bold p-4">Asset: src/assets/signin.png (Local Asset Not Loaded in Preview)</div>';
                      }
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
