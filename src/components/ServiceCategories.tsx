import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Palette, Hand, Sparkles, Droplet, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling & Color",
    description: "Professional cuts, coloring, and styling treatments",
    price: "From $45",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    icon: Palette,
    title: "Makeup & Glam",
    description: "Full makeup for any occasion, natural to glamorous",
    price: "From $60",
    gradient: "from-secondary/20 to-accent/30",
  },
  {
    icon: Hand,
    title: "Nails & Manicure",
    description: "Complete nail care, manicures, and artistic designs",
    price: "From $35",
    gradient: "from-accent/30 to-primary/20",
  },
  {
    icon: Sparkles,
    title: "Massage & Spa",
    description: "Relaxing massages and rejuvenating spa treatments",
    price: "From $70",
    gradient: "from-primary/20 to-accent/30",
  },
  {
    icon: Droplet,
    title: "Skincare Treatments",
    description: "Advanced facials and skincare therapy sessions",
    price: "From $55",
    gradient: "from-secondary/20 to-primary/20",
  },
  {
    icon: Heart,
    title: "Bridal & Events",
    description: "Complete beauty packages for your special day",
    price: "From $250",
    gradient: "from-accent/30 to-secondary/20",
  },
];

const ServiceCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium beauty services delivered by certified professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl p-8 bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Glassmorphism Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Info */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-secondary hover:bg-primary/5 font-semibold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Book Now →
                    </Button>
                  </div>
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;