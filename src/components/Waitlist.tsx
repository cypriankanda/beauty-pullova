import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

const Waitlist = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      emailSchema.parse(email);
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast.success("You're on the waitlist!", {
        description: "We'll notify you when we launch in your area.",
      });
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error("Invalid email", {
          description: error.errors[0].message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" ref={ref} className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent rounded-full blur-3xl" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {!isSubmitted ? (
            <>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Be the First to Experience
                <br />
                <span className="text-accent">Premium Home Beauty</span>
              </h2>
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Join our exclusive waitlist and get early access when we launch in your area.
                Plus, receive a special welcome discount!
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 text-lg rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:border-white focus:bg-white/20"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="h-14 px-8 text-lg font-semibold rounded-full bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>

              <p className="text-white/70 text-sm mt-6">
                🎁 Early members get 20% off their first booking
              </p>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="py-12"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-success" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                You're In! 🎉
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Thank you for joining our waitlist. We'll send you an email as soon as we launch in your area.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 rounded-full px-8"
              >
                Add Another Email
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;