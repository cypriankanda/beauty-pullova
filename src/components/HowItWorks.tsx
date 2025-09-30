import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Calendar, Home, CreditCard, Briefcase, Users, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const customerSteps = [
  {
    icon: Search,
    title: "Browse Services",
    description: "Explore our wide range of beauty services and select what you need",
  },
  {
    icon: Calendar,
    title: "Book Your Slot",
    description: "Choose your preferred date, time, and beautician",
  },
  {
    icon: Home,
    title: "Relax at Home",
    description: "Your professional arrives at your doorstep with all equipment",
  },
  {
    icon: CreditCard,
    title: "Pay & Review",
    description: "Secure payment and rate your experience",
  },
];

const beauticianSteps = [
  {
    icon: Briefcase,
    title: "Create Profile",
    description: "Sign up and showcase your skills, certifications, and portfolio",
  },
  {
    icon: Calendar,
    title: "Set Availability",
    description: "Control your schedule and set your service areas",
  },
  {
    icon: Users,
    title: "Accept Bookings",
    description: "Receive and accept booking requests from clients",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Build your reputation and increase your earnings",
  },
];

const agentSteps = [
  {
    icon: Users,
    title: "Build Your Team",
    description: "Recruit and manage a team of beauticians",
  },
  {
    icon: Briefcase,
    title: "Manage Operations",
    description: "Oversee bookings, schedules, and quality control",
  },
  {
    icon: TrendingUp,
    title: "Track Performance",
    description: "Monitor team metrics and customer satisfaction",
  },
  {
    icon: CreditCard,
    title: "Earn Commission",
    description: "Receive commission on all bookings your team completes",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("customer");

  const renderSteps = (steps: typeof customerSteps) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4" />
            )}

            {/* Step Card */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover:border-primary/50">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-foreground">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section id="how-it-works" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to get started, whether you're booking or providing services
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-14">
            <TabsTrigger value="customer" className="text-base font-semibold">
              For Customers
            </TabsTrigger>
            <TabsTrigger value="beautician" className="text-base font-semibold">
              For Beauticians
            </TabsTrigger>
            <TabsTrigger value="agent" className="text-base font-semibold">
              For Agents
            </TabsTrigger>
          </TabsList>

          <TabsContent value="customer">
            {renderSteps(customerSteps)}
          </TabsContent>

          <TabsContent value="beautician">
            {renderSteps(beauticianSteps)}
          </TabsContent>

          <TabsContent value="agent">
            {renderSteps(agentSteps)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorks;