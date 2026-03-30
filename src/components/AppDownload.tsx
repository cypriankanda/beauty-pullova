import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Smartphone } from "lucide-react";

// ✅ IMPORT IMAGE PROPERLY
import signinImg from "@/assets/signin.png"; // adjust path if needed

const AppStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2a10 10 0 0 0-9.8 11.8A10 10 0 0 0 12 22a10 10 0 0 0 9.8-8.2A10 10 0 0 0 12 2z"/>
  </svg>
);

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M3.1 3.2L12 12 3.1 20.8z"/>
  </svg>
);

const AppDownload = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px 0px" });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="relative bg-gradient-to-br from-purple-700 to-indigo-800 rounded-[3rem] p-8 md:p-16 shadow-xl overflow-hidden">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-4xl font-bold text-white mb-4">
                Get Your Personalized Download
              </h2>

              <p className="text-indigo-200 mb-8">
                Check your email for your personalized download link.
              </p>

              <div className="flex gap-4">
                <a className="bg-white text-black px-6 py-3 rounded-lg font-bold">
                  App Store
                </a>
                <a className="border border-white text-white px-6 py-3 rounded-lg font-bold">
                  Google Play
                </a>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="hidden md:flex justify-center"
            >
              <div className="w-[280px] h-[480px] bg-gray-900 rounded-[40px] p-2 shadow-lg">
                <div className="w-full h-full rounded-[30px] overflow-hidden">

                  {/* ✅ USE IMPORTED IMAGE */}
                  <img
                    src={signinImg}
                    alt="App preview"
                    className="w-full h-full object-cover"
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