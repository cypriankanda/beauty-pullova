import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  UserCheck,
  Calendar,
  Users,
  Shield,
  TrendingUp,
  CheckCircle2,
  ShoppingBag,
  Clock,
  Star,
  MapPin,
  Briefcase,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ------------------ BEAUTICIANS ------------------ */
const beauticianSteps = [
  {
    icon: UserCheck,
    title: "Create Profile",
    description: "Showcase your expertise and certifications.",
    details: {
      heading: "Build Your Profile",
      body: "Stand out with a professional portfolio.",
      points: ["Upload photos", "Add certifications", "Write bio", "Show skills"],
    },
  },
  {
    icon: Calendar,
    title: "Set Availability",
    description: "Manage your schedule freely.",
    details: {
      heading: "Control Your Time",
      body: "Work when you want.",
      points: ["Set hours", "Sync calendar", "Block time", "Flex schedule"],
    },
  },
  {
    icon: Users,
    title: "Accept Bookings",
    description: "Receive client requests instantly.",
    details: {
      heading: "Manage Clients",
      body: "Handle bookings in real time.",
      points: ["Instant alerts", "Accept/decline", "Chat", "Manage bookings"],
    },
  },
  {
    icon: Shield,
    title: "Membership Access",
    description: "Unlock growth tools.",
    details: {
      heading: "Grow Faster",
      body: "Boost visibility and reach.",
      points: ["Priority listing", "Analytics", "Support", "Boost tools"],
    },
  },
  {
    icon: TrendingUp,
    title: "Grow & Earn More",
    description: "Increase your income.",
    details: {
      heading: "Scale Income",
      body: "Turn skills into earnings.",
      points: ["Repeat clients", "More bookings", "Stable income", "Brand growth"],
    },
  },
];

/* ------------------ CUSTOMERS ------------------ */
const customerSteps = [
  {
    icon: ShoppingBag,
    title: "Choose Service",
    description: "Pick from verified professionals.",
    details: {
      heading: "Browse Services",
      body: "Select what you need instantly.",
      points: ["Search services", "Compare pros", "View ratings", "Check availability"],
    },
  },
  {
    icon: Clock,
    title: "Book Time & Location",
    description: "Schedule at your convenience.",
    details: {
      heading: "Flexible Booking",
      body: "Choose when and where.",
      points: ["Home service", "Same-day booking", "Flexible time", "Instant confirm"],
    },
  },
  {
    icon: Users,
    title: "Get Matched",
    description: "We assign the best professional.",
    details: {
      heading: "Smart Matching",
      body: "AI matches you with experts.",
      points: ["Verified pros", "Nearby match", "Fast assignment", "Reliable service"],
    },
  },
  {
    icon: Star,
    title: "Enjoy Service",
    description: "Relax and get serviced.",
    details: {
      heading: "Premium Experience",
      body: "Quality service at your location.",
      points: ["At home/office", "Safe service", "Rated pros", "Stress-free"],
    },
  },
];

/* ------------------ SALONS ------------------ */
const salonSteps = [
  {
    icon: UserCheck,
    title: "Apply & Join",
    description: "Become a partner salon.",
    details: {
      heading: "Join Pullova",
      body: "Get verified and onboarded.",
      points: ["Easy signup", "Verification", "Profile setup", "Approval"],
    },
  },
  {
    icon: Briefcase,
    title: "List Services",
    description: "Set offerings and pricing.",
    details: {
      heading: "Define Business",
      body: "Control your services.",
      points: ["Add services", "Set prices", "Choose model", "Set availability"],
    },
  },
  {
    icon: Users,
    title: "Receive Bookings",
    description: "Get real clients.",
    details: {
      heading: "Incoming Demand",
      body: "We bring clients to you.",
      points: ["Real bookings", "No marketing cost", "High intent clients", "Instant alerts"],
    },
  },
  {
    icon: MapPin,
    title: "Deliver Services",
    description: "In-salon or mobile.",
    details: {
      heading: "Flexible Delivery",
      body: "Work your way.",
      points: ["In-salon", "Home service", "Hybrid model", "Full control"],
    },
  },
];

/* ------------------ FLOW MAP ------------------ */
const flows: Record<string, any[]> = {
  beautician: beauticianSteps,
  customer: customerSteps,
  salon: salonSteps,
};

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("beautician");
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = flows[activeTab];
  const current = steps[activeStep];
  const Icon = current.icon;

  /* AUTO PLAY */
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) =>
        prev === steps.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, activeTab]);

  /* RESET ON TAB CHANGE */
  useEffect(() => {
    setActiveStep(0);
  }, [activeTab]);

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">How It Works</h2>
          <p className="text-gray-600 mt-3">
            Three experiences in one ecosystem
          </p>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mt-6 px-5 py-2 bg-gray-900 text-white rounded-full"
          >
            {isPlaying ? "Pause Demo" : "Play Demo"}
          </button>
        </div>

        {/* TABS */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="customer">Customers</TabsTrigger>
            <TabsTrigger value="beautician">Beauticians</TabsTrigger>
            <TabsTrigger value="salon">Salons</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* LEFT */}
              <div className="space-y-3">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = activeStep === index;

                  return (
                    <motion.div
                      key={step.title}
                      onClick={() => setActiveStep(index)}
                      onMouseEnter={() => setIsPlaying(false)}
                      onMouseLeave={() => setIsPlaying(true)}
                      className={`p-5 rounded-2xl flex gap-4 cursor-pointer border ${
                        isActive ? "bg-gray-900 text-white" : "bg-white"
                      }`}
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-xl">
                        <StepIcon className="w-6 h-6" />
                      </div>

                      <div>
                        <h3 className="font-semibold">{step.title}</h3>
                        <p className="text-sm opacity-80">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* RIGHT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white border rounded-3xl p-10"
                >
                  <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    {current.details.heading}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {current.details.body}
                  </p>

                  <ul className="space-y-3">
                    {current.details.points.map((p, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorks;