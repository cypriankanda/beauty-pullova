import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppDownload = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Download Our App
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get the best experience with our mobile app. Book services, track your beautician, and manage your appointments on the go.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-6 py-6 rounded-2xl font-semibold text-base flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  App Store
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-6 py-6 rounded-2xl font-semibold text-base flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Phone Mockup Placeholder */}
                <div className="relative w-64 h-full bg-white/10 backdrop-blur-md rounded-3xl border-4 border-white/20 shadow-2xl p-2">
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 rounded-2xl flex items-center justify-center">
                    <Download className="w-20 h-20 text-white/50 animate-pulse" />
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-float" />
                <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-white/20 rounded-full blur-2xl" style={{ animationDelay: "1s" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;