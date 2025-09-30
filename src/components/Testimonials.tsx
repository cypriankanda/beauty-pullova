import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Customer",
    rating: 5,
    text: "BeautyHome has been a game-changer! The convenience of getting professional makeup done at home before my events is incredible. The beautician was skilled, professional, and punctual.",
    location: "New York, NY",
  },
  {
    name: "Emily Rodriguez",
    role: "Beautician",
    rating: 5,
    text: "As a beautician, this platform has helped me grow my business significantly. I love the flexibility to set my own schedule and the quality of clients I work with. Highly recommend!",
    location: "Los Angeles, CA",
  },
  {
    name: "Michael Chen",
    role: "Agent",
    rating: 5,
    text: "Managing my team of beauticians through BeautyHome has streamlined our operations. The commission structure is fair, and the support team is always responsive. Great platform for agents!",
    location: "Chicago, IL",
  },
  {
    name: "Jessica Williams",
    role: "Customer",
    rating: 5,
    text: "I book regular facials through BeautyHome and every experience has been fantastic. The quality is consistent, pricing is transparent, and I can enjoy spa treatments without leaving home!",
    location: "Miami, FL",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-muted relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Community</span> Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from customers, beauticians, and agents
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-border relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warning text-warning" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl text-foreground leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={prevTestimonial}
                  className="rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={nextTestimonial}
                  className="rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;