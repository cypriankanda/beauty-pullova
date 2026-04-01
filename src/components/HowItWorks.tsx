import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
  Sparkles,
  MapPin,
  Star,
  Clock,
  Shield,
  Target,
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
    description:
      "Become part of our exclusive membership umbrella — unlocking premium perks, priority visibility, and a stronger professional network.",
  },
  {
    icon: TrendingUp,
    title: "Grow & Earn More",
    description:
      "Build a loyal customer base, leverage membership benefits, and maximize your earnings.",
  },
];

const agentSteps = [
  {
    icon: Briefcase,
    title: "Join as a Saloon Shop",
    description:
      "Partner with Pullova and connect clients to trusted Saloons in your city.",
  },
  {
    icon: Users,
    title: "Grow Your Network",
    description:
      "Build a local team of professionals and earn from every successful booking.",
  },
  {
    icon: Settings,
    title: "Access Tools & Training",
    description:
      "Get onboarding, digital tools, and marketing support to help you thrive.",
  },
  {
    icon: TrendingUp,
    title: "Earn & Advance",
    description:
      "Unlock higher commissions and expand into partnership or franchise roles.",
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
      {/* <Sparkles className="w-7 h-7 text-primary" /> */}
      <h3 className="text-4xl font-bold text-gray-900 tracking-tight">
        Why Auto-Match?
      </h3>
    </div>

    <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
      We built Auto-Match to take the guesswork out of finding the right professional.
      It uses real data — not random suggestions — to connect you with people who
      actually fit your needs, your style, and your schedule.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
      {[
        {
          icon: Target,
          title: "Skill-Based Precision",
          text: "We pair you with beauticians who specialize in exactly what you’re looking for — no more trial and error.",
        },
        {
          icon: Star,
          title: "Top-Rated Only",
          text: "Our algorithm favors the most trusted and well-reviewed professionals, so quality is never a gamble.",
        },
        {
          icon: MapPin,
          title: "Smart Location Match",
          text: "We prioritize verified experts closest to you, ensuring faster, more reliable service.",
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
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
            <item.icon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-primary transition-colors duration-300">
              {item.title}
            </h4>
            <p className="text-gray-600 leading-relaxed text-base">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <p className="text-gray-700 mt-12 font-medium italic text-lg">
      Auto-Match isn’t just smart — it’s built to save you time and deliver results that feel personal.
    </p>
  </motion.div>
);

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
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_32px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white mb-6 shadow-lg">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
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
      className="py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
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
            A clean, simple process built for clients, beauticians, and Saloon alike.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
  <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-1 sm:grid-cols-3 gap-3 mb-16 h-auto sm:h-16 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-gray-200">
    <TabsTrigger
      value="customer"
      className="text-center text-base font-semibold rounded-xl py-3 sm:py-0 data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300"
    >
      For Customers
    </TabsTrigger>
    <TabsTrigger
      value="beautician"
      className="text-center text-base font-semibold rounded-xl py-3 sm:py-0 data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300"
    >
      For Beauticians
    </TabsTrigger>
    <TabsTrigger
      value="agent"
      className="text-center text-base font-semibold rounded-xl py-3 sm:py-0 data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300"
    >
      For Saloons
    </TabsTrigger>
  </TabsList>

  <TabsContent value="customer">
    {renderSteps(customerSteps)}
    <AutoMatchInfo isInView={isInView} />
  </TabsContent>

  <TabsContent value="beautician">{renderSteps(beauticianSteps)}</TabsContent>

  <TabsContent value="agent">{renderSteps(agentSteps)}</TabsContent>
</Tabs>
      </div>
    </section>
  );
};

export default HowItWorks;
