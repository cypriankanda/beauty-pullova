import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Scissors, Palette, Hand, Sparkles, Droplet, Heart, ArrowRight } from "lucide-react";

// Optional pricing interface (kept for future use)
// interface ServicePricing {
//   usd: string;
//   ksh: string;
// }

interface Service {
  icon: any;
  title: string;
  description: string;
  // pricing?: ServicePricing;
  gradient: string;
  iconGradient: string;
  popular: boolean;
}

const services: Service[] = [
  {
    icon: Scissors,
    title: "Hair Styling & Color",
    description: "Professional cuts, coloring, and styling treatments",
    // pricing: { usd: "$35", ksh: "KSh 3,500" },
    gradient: "from-rose-500/10 via-pink-500/10 to-purple-500/10",
    iconGradient: "from-rose-500 to-pink-600",
    popular: false,
  },
  {
    icon: Palette,
    title: "Makeup & Glam",
    description: "Full makeup for any occasion, natural to glamorous",
    // pricing: { usd: "$50", ksh: "KSh 5,000" },
    gradient: "from-purple-500/10 via-pink-500/10 to-orange-500/10",
    iconGradient: "from-purple-500 to-pink-600",
    popular: true,
  },
  {
    icon: Hand,
    title: "Nails & Manicure",
    description: "Complete nail care, manicures, and artistic designs",
    // pricing: { usd: "$25", ksh: "KSh 2,500" },
    gradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
    iconGradient: "from-orange-500 to-amber-600",
    popular: false,
  },
  {
    icon: Hand,
    title: "Massage & Spa",
    description: "Relaxing massages and rejuvenating spa treatments",
    // pricing: { usd: "$65", ksh: "KSh 6,500" },
    gradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
    iconGradient: "from-blue-500 to-cyan-600",
    popular: false,
  },
  {
    icon: Droplet,
    title: "Skincare Treatments",
    description: "Advanced facials and skincare therapy sessions",
    // pricing: { usd: "$45", ksh: "KSh 4,500" },
    gradient: "from-teal-500/10 via-emerald-500/10 to-green-500/10",
    iconGradient: "from-teal-500 to-emerald-600",
    popular: false,
  },
  {
    icon: Heart,
    title: "Bridal & Events",
    description: "Complete beauty packages for your special day",
    // pricing: { usd: "$200", ksh: "KSh 20,000" },
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
        const urlParams = new URLSearchParams(window.location.search);
        const testRegion = urlParams.get('region');

        if (testRegion === 'kenya' || testRegion === 'usa') {
          setRegion(testRegion as 'usa' | 'kenya');
          return;
        }

        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        if (data.country_code === "KE") {
          setRegion('kenya');
        } else {
          setRegion('usa');
        }
      } catch (error) {
        setRegion('usa');
      }
    };

    detectRegion();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} className="group relative">
                <div className="rounded-3xl p-8 bg-white border shadow-lg h-full flex flex-col">

                  {/* Popular Badge (OPTIONAL REMOVE) */}
                  {/* 
                  {service.popular && (
                    <div className="absolute -top-3 -right-3">
                      ⭐ Popular
                    </div>
                  )}
                  */}

                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.iconGradient} rounded-2xl flex items-center justify-center`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA ONLY (pricing removed) */}
                  <div className="flex justify-end mt-auto pt-6 border-t">
                    
                    {/* 
                    <div>
                      <span>Starting at</span>
                      <span>
                        {region === 'kenya' ? service.pricing?.ksh : service.pricing?.usd}
                      </span>
                    </div>
                    */}

                    <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl px-6 h-12 flex items-center gap-2">
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA (OPTIONAL REMOVE) */}
        {/* 
        <div className="text-center mt-16">
          <button>
            Explore All Services
          </button>
        </div>
        */}

      </div>
    </section>
  );
};

export default ServiceCategories;