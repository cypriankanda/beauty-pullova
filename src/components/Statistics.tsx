import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { CheckCircle, Award, MapPin } from "lucide-react";

const stats = [
  {
    icon: CheckCircle,
    value: 50000,
    suffix: "+",
    label: "Beauty Sessions Completed",
  },
  {
    icon: Award,
    value: 2500,
    suffix: "+",
    label: "Licensed Professionals",
  },
  {
    icon: MapPin,
    value: 150,
    suffix: "+",
    label: "Cities Nationwide",
  },
];

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {isInView ? (
                    <>
                      <CountUp end={stat.value} duration={2.5} separator="," />
                      {stat.suffix}
                    </>
                  ) : (
                    "0"
                  )}
                </div>
                <p className="text-muted-foreground font-medium">
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