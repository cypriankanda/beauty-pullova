import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Calendar, Home, CreditCard, Briefcase, Users, TrendingUp, UserCheck, Settings } from "lucide-react";
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
    icon: UserCheck,
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
    icon: Settings,
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mt-16 relative">
      {/* Animated connecting line */}
      <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 origin-left"
        />
      </div>
      
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: [0.25, 0.4, 0.25, 1]
            }}
            className="relative group"
          >
            {/* Step Card with enhanced hover */}
            <div className="relative bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 h-full transition-all duration-500 border border-gray-100 group-hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
              
              {/* Animated icon container */}
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-16 h-16 bg-gradient-to-br from-primary via-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-xl group-hover:shadow-primary/40 transition-shadow duration-500"
                >
                  <Icon className="w-8 h-8 text-white" />
                  
                  {/* Pulse effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-primary opacity-0 group-hover:opacity-20 group-hover:animate-ping" />
                </motion.div>
                
                {/* Step number badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 200 }}
                  className="absolute -top-2 -right-2 w-9 h-9 bg-gradient-to-br from-accent to-amber-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                >
                  <span className="text-sm font-bold text-gray-900">{index + 1}</span>
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Connecting arrow (only between steps) */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.6 }}
                className="hidden lg:flex absolute top-16 -right-2 z-10 items-center justify-center w-8 h-8 bg-white rounded-full border-2 border-primary/30 shadow-md"
              >
                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-primary/60 border-b-4 border-b-transparent" />
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide">
              SIMPLE & INTUITIVE
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            How It <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started in minutes with our streamlined process designed for everyone
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-16 h-16 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-gray-200">
              <TabsTrigger 
                value="customer" 
                className="text-base font-semibold rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300 data-[state=active]:shadow-lg"
              >
                For Customers
              </TabsTrigger>
              <TabsTrigger 
                value="beautician" 
                className="text-base font-semibold rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300 data-[state=active]:shadow-lg"
              >
                For Beauticians
              </TabsTrigger>
              <TabsTrigger 
                value="agent" 
                className="text-base font-semibold rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300 data-[state=active]:shadow-lg"
              >
                For Agents
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="customer" className="mt-0">
            {renderSteps(customerSteps)}
          </TabsContent>

          <TabsContent value="beautician" className="mt-0">
            {renderSteps(beauticianSteps)}
          </TabsContent>

          <TabsContent value="agent" className="mt-0">
            {renderSteps(agentSteps)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorks;