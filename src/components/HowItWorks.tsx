import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Search,
  Calendar,
  Home,
  CreditCard,
  Briefcase,
  Users,
  TrendingUp,
  UserCheck,
  Settings,
  MapPin,
  Star,
  Clock,
  Shield,
  Target,
  Check,
  CheckCircle2
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const customerSteps = [
  {
    icon: Search,
    title: "Browse Services",
    description: "Explore a curated list of beauty services tailored to your preferences.",
  },
  {
    icon: Calendar,
    title: "Book Your Slot",
    description: "Select a time and date that works best for you — we’ll handle the rest.",
  },
  {
    icon: Home,
    title: "Auto-Match",
    description: "Get paired with a trusted professional near you instantly.",
  },
  {
    icon: CreditCard,
    title: "Pay & Review",
    description: "Make secure payments and share your experience with others.",
  },
];

const beauticianSteps = [
  {
    icon: UserCheck,
    title: "Create Profile",
    description: "Showcase your expertise, portfolio, and certifications.",
  },
  {
    icon: Calendar,
    title: "Set Availability",
    description: "Manage your schedule with full flexibility.",
  },
  {
    icon: Users,
    title: "Accept Bookings",
    description: "Receive and confirm client requests in real time.",
  },
  {
    icon: Shield,
    title: "Join Our Membership",
    description: "Become part of our exclusive membership umbrella — unlocking premium perks and priority visibility.",
  },
  {
    icon: TrendingUp,
    title: "Grow & Earn More",
    description: "Build a loyal customer base, leverage membership benefits, and maximize your earnings.",
  },
];

const agentSteps = [
  {
    icon: Briefcase,
    title: "Join as a Saloon Shop",
    description: "Partner with Pullova and connect clients to trusted Saloons in your city.",
  },
  {
    icon: Users,
    title: "Grow Your Network",
    description: "Build a local team of professionals and earn from every successful booking.",
  },
  {
    icon: Settings,
    title: "Access Tools & Training",
    description: "Get onboarding, digital tools, and marketing support to help you thrive.",
  },
  {
    icon: TrendingUp,
    title: "Earn & Advance",
    description: "Unlock higher commissions and expand into partnership or franchise roles.",
  },
];

const AutoMatchInfo = ({ isInView }: { isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="mt-24 max-w-5xl mx-auto text-center bg-white p-12 rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] border border-gray-100"
  >
    <div className="flex items-center justify-center gap-3 mb-4">
      <h3 className="text-4xl font-bold text-gray-900 tracking-tight">
        Why Auto-Match?
      </h3>
    </div>

    <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
      We built Auto-Match to take the guesswork out of finding the right professional.
      It uses real data to connect you with people who fit your needs, your style, and your schedule.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
      {[
        {
          icon: Target,
          title: "Skill-Based Precision",
          text: "We pair you with beauticians who specialize in exactly what you’re looking for.",
        },
        {
          icon: Star,
          title: "Top-Rated Only",
          text: "Our algorithm favors the most trusted professionals, so quality is never a gamble.",
        },
        {
          icon: MapPin,
          title: "Smart Location Match",
          text: "We prioritize verified experts closest to you for faster, more reliable service.",
        },
        {
          icon: Clock,
          title: "Real-Time Availability",
          text: "Instantly see who’s ready to serve you when you actually need them.",
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
          className="flex items-start gap-5 group"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 text-primary group-hover:bg-primary/10 transition-all duration-300">
            <item.icon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-1 transition-colors duration-300">
              {item.title}
            </h4>
            <p className="text-gray-600 leading-relaxed text-base">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const WhyPullovaWorks = ({ isInView }: { isInView: boolean }) => {
  const points = [
    "On-demand convenience",
    "Verified professionals",
    "Consistent service quality",
    "Flexible scheduling",
    "Designed around your lifestyle",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-16 max-w-4xl mx-auto bg-gray-900 p-10 rounded-3xl border border-gray-800 shadow-xl"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-left">
          <h3 className="text-3xl font-bold text-white mb-4">
            Why Pullova Works
          </h3>
          <p className="text-gray-400 mb-8">
            Pullova is the professional bridge between your busy schedule and the high-quality care you deserve.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-gray-200 font-medium text-sm md:text-base">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="hidden md:flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10">
           <CheckCircle2 className="w-12 h-12 text-primary mb-3" />
           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Certified Platform</span>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("customer");

  const renderSteps = (steps: typeof customerSteps) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 relative">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group"
          >
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-900 text-white mb-6">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-28 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1.5 bg-gray-100 text-gray-900 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
            The Process
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A seamless experience designed for efficiency and reliability.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-16 h-14 bg-gray-100 p-1 rounded-2xl">
            <TabsTrigger value="customer" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Customers
            </TabsTrigger>
            <TabsTrigger value="beautician" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Beauticians
            </TabsTrigger>
            <TabsTrigger value="agent" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Saloons
            </TabsTrigger>
          </TabsList>

          <TabsContent value="customer" className="outline-none">
            {renderSteps(customerSteps)}
            <AutoMatchInfo isInView={isInView} />
            <WhyPullovaWorks isInView={isInView} />
          </TabsContent>

          <TabsContent value="beautician">{renderSteps(beauticianSteps)}</TabsContent>
          <TabsContent value="agent">{renderSteps(agentSteps)}</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorks;