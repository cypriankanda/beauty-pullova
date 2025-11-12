import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Scissors, Palette, Hand, Sparkles, Droplet, Heart, ArrowRight } from "lucide-react";

interface ServicePricing {
  usd: string;
  ksh: string;
}

interface Service {
  icon: any;
  title: string;
  description: string;
  pricing: ServicePricing;
  gradient: string;
  iconGradient: string;
  popular: boolean;
}

const services: Service[] = [
  {
    icon: Scissors,
    title: "Hair Styling & Color",
    description: "Professional cuts, coloring, and styling treatments",
    pricing: {
      usd: "$35",
      ksh: "KSh 3,500"
    },
    gradient: "from-rose-500/10 via-pink-500/10 to-purple-500/10",
    iconGradient: "from-rose-500 to-pink-600",
    popular: false,
  },
  {
    icon: Palette,
    title: "Makeup & Glam",
    description: "Full makeup for any occasion, natural to glamorous",
    pricing: {
      usd: "$50",
      ksh: "KSh 5,000"
    },
    gradient: "from-purple-500/10 via-pink-500/10 to-orange-500/10",
    iconGradient: "from-purple-500 to-pink-600",
    popular: true,
  },
  {
    icon: Hand,
    title: "Nails & Manicure",
    description: "Complete nail care, manicures, and artistic designs",
    pricing: {
      usd: "$25",
      ksh: "KSh 2,500"
    },
    gradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
    iconGradient: "from-orange-500 to-amber-600",
    popular: false,
  },
  {
    icon: Hand,
    title: "Massage & Spa",
    description: "Relaxing massages and rejuvenating spa treatments",
    pricing: {
      usd: "$65",
      ksh: "KSh 6,500"
    },
    gradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
    iconGradient: "from-blue-500 to-cyan-600",
    popular: false,
  },
  {
    icon: Droplet,
    title: "Skincare Treatments",
    description: "Advanced facials and skincare therapy sessions",
    pricing: {
      usd: "$45",
      ksh: "KSh 4,500"
    },
    gradient: "from-teal-500/10 via-emerald-500/10 to-green-500/10",
    iconGradient: "from-teal-500 to-emerald-600",
    popular: false,
  },
  {
    icon: Heart,
    title: "Bridal & Events",
    description: "Complete beauty packages for your special day",
    pricing: {
      usd: "$200",
      ksh: "KSh 20,000"
    },
    gradient: "from-pink-500/10 via-rose-500/10 to-red-500/10",
    iconGradient: "from-pink-500 to-rose-600",
    popular: true,
  },
];

const ServiceCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [region, setRegion] = useState<'usa' | 'kenya'>('usa');

  useEffect(() => {
    const detectRegion = async () => {
      try {
        // Check URL parameter for testing
        const urlParams = new URLSearchParams(window.location.search);
        const testRegion = urlParams.get('region');
        
        if (testRegion === 'kenya' || testRegion === 'usa') {
          console.log('Using test region from URL:', testRegion);
          setRegion(testRegion as 'usa' | 'kenya');
          return;
        }

        // Detect region via geolocation API
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        
        console.log('Detected country code:', data.country_code);
        
        if (data.country_code === "KE") {
          setRegion('kenya');
        } else {
          setRegion('usa');
        }
      } catch (error) {
        console.error("Error detecting region:", error);
        setRegion('usa');
      }
    };

    detectRegion();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-5 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600 rounded-full text-sm font-semibold tracking-wide border border-pink-500/20">
              PREMIUM SERVICES
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Our <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium beauty services delivered by certified professionals, right to your doorstep
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl p-8 bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                  
                  {/* Popular Badge */}
                  {service.popular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -12 }}
                      animate={isInView ? { scale: 1, rotate: -12 } : {}}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                      className="absolute -top-3 -right-3 z-20"
                    >
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border-2 border-white">
                        ⭐ Popular
                      </div>
                    </motion.div>
                  )}

                  {/* Animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Radial glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon with enhanced animation */}
                    <div className="mb-6">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className={`relative w-20 h-20 bg-gradient-to-br ${service.iconGradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-500`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                        
                        {/* Animated ring */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover:scale-110 transition-transform duration-500" />
                      </motion.div>
                    </div>

                    {/* Service Info */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                      <div>
                        <span className="text-sm text-gray-500 block mb-1">Starting at</span>
                        <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                          {region === 'kenya' ? service.pricing.ksh : service.pricing.usd}
                        </span>
                      </div>
                      <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 rounded-xl px-6 h-12 font-semibold flex items-center gap-2 group/btn">
                        <span>Book Now</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl px-10 h-14 text-lg font-semibold flex items-center gap-2 mx-auto group">
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategories;