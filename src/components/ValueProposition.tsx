import { motion } from "framer-motion";
import { Shield, Clock, Star, DollarSign, Heart, Sparkles } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: Shield,
    title: "Certified Professionals",
    description: "All beauticians are verified, licensed, and background-checked for your safety",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book services at your convenience, from early morning to late evening",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Top-rated professionals using high-quality products and techniques",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees. See exact prices before booking any service",
  },
  {
    icon: Heart,
    title: "Comfort & Privacy",
    description: "Enjoy salon-quality services in the comfort and privacy of your home",
  },
  {
    icon: Sparkles,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll make it right with our satisfaction guarantee",
  },
];

const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">BeautyHome</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of luxury, convenience, and professional care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;