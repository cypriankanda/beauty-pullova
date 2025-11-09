import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Placeholder images - replace with your actual imports
const makeupImage = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop";
const hairImage = "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop";
const nailsImage = "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop";
const skincareImage = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop";

interface ServicePricing {
  usd: string;
  ksh: string;
}

interface Service {
  title: string;
  description: string;
  image: string;
  pricing: ServicePricing;
}

const services: Service[] = [
  {
    title: "Makeup & Styling",
    description:
      "Professional makeup for any occasion, from natural looks to glamorous events",
    image: makeupImage,
    pricing: {
      usd: "Starting at $60",
      ksh: "Starting at KSh 6,800"
    }
  },
  {
    title: "Hair Services",
    description:
      "Cuts, coloring, styling, treatments - all performed by certified stylists",
    image: hairImage,
    pricing: {
      usd: "Starting at $45",
      ksh: "Starting at KSh 4,850"
    }
  },
  {
    title: "Nail Care",
    description:
      "Manicures, pedicures, nail art, and extensions with premium products",
    image: nailsImage,
    pricing: {
      usd: "Starting at $35",
      ksh: "Starting at KSh 3,550"
    }
  },
  {
    title: "Skincare & Spa",
    description:
      "Facials, treatments, and relaxing spa services for glowing skin",
    image: skincareImage,
    pricing: {
      usd: "Starting at $20",
      ksh: "Starting at KSh 2,000"
    }
  },
];

interface ServicesProps {
  region?: string;
}

const Services: React.FC<ServicesProps> = ({ region }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [detectedRegion, setDetectedRegion] = useState<'usa' | 'kenya'>('usa');

  useEffect(() => {
    const detectRegion = async () => {
      try {
        // Check URL parameter for testing
        const urlParams = new URLSearchParams(window.location.search);
        const testRegion = urlParams.get('region');
        
        if (testRegion === 'kenya' || testRegion === 'usa') {
          console.log('Using test region from URL:', testRegion);
          setDetectedRegion(testRegion as 'usa' | 'kenya');
          return;
        }

        // Detect region via geolocation API
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        
        console.log('Detected country code:', data.country_code);
        
        if (data.country_code === "KE") {
          setDetectedRegion('kenya');
        } else {
          setDetectedRegion('usa');
        }
      } catch (error) {
        console.error("Error detecting region:", error);
        setDetectedRegion('usa'); // Default fallback
      }
    };

    detectRegion();
  }, []);

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium beauty services delivered by certified professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200"
            >
              {/* Image Container with Glassmorphism Overlay */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/90 via-pink-500/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-lg mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-300 font-bold text-xl">
                        {region === 'kenya' ? service.pricing.ksh : service.pricing.usd}
                      </span>
                      <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
                        Book Now
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;