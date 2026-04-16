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

/* ------------------ FLOWS ------------------ */
const flows = {
  customer: {
    label: "Book a Service",
    steps: [
      {
        icon: ShoppingBag,
        title: "Choose Service",
        description: "Browse verified professionals.",
        details: {
          heading: "Find What You Need",
          body: "Explore services tailored to you.",
          points: ["Search", "Compare", "Ratings", "Availability"],
        },
      },
      {
        icon: Clock,
        title: "Book Time",
        description: "Schedule easily.",
        details: {
          heading: "Flexible Booking",
          body: "Choose time and place.",
          points: ["Home service", "Same-day", "Flexible", "Instant confirm"],
        },
      },
      {
        icon: Users,
        title: "Get Matched",
        description: "We find the best pro.",
        details: {
          heading: "Smart Matching",
          body: "Matched with top pros.",
          points: ["Nearby", "Verified", "Fast", "Reliable"],
        },
      },
      {
        icon: Star,
        title: "Enjoy Service",
        description: "Relax.",
        details: {
          heading: "Premium Experience",
          body: "Top-quality service.",
          points: ["Safe", "At home", "Rated pros", "Stress-free"],
        },
      },
    ],
  },

  beautician: {
    label: "Beautician",
    steps: [
      {
        icon: UserCheck,
        title: "Create Profile",
        description: "Showcase skills.",
        details: {
          heading: "Build Profile",
          body: "Stand out professionally.",
          points: ["Portfolio", "Certifications", "Bio", "Skills"],
        },
      },
      {
        icon: Calendar,
        title: "Set Availability",
        description: "Work freely.",
        details: {
          heading: "Control Your Time",
          body: "Flexible schedule.",
          points: ["Hours", "Sync", "Block time", "Flex"],
        },
      },
      {
        icon: Users,
        title: "Accept Bookings",
        description: "Manage clients.",
        details: {
          heading: "Manage Clients",
          body: "Handle bookings.",
          points: ["Alerts", "Accept", "Chat", "Manage"],
        },
      },
      {
        icon: TrendingUp,
        title: "Grow Income",
        description: "Earn more.",
        details: {
          heading: "Increase Earnings",
          body: "Scale income.",
          points: ["Repeat clients", "More bookings", "Stable income"],
        },
      },
    ],
  },

  salon: {
    label: "Grow Your Salon",
    steps: [
      {
        icon: UserCheck,
        title: "Join Platform",
        description: "Get onboarded.",
        details: {
          heading: "Become Partner",
          body: "Start fast.",
          points: ["Signup", "Verify", "Setup", "Approve"],
        },
      },
      {
        icon: Briefcase,
        title: "List Services",
        description: "Define offerings.",
        details: {
          heading: "Set Business",
          body: "Control services.",
          points: ["Add services", "Pricing", "Availability"],
        },
      },
      {
        icon: Users,
        title: "Receive Clients",
        description: "Get bookings.",
        details: {
          heading: "Real Demand",
          body: "We bring clients.",
          points: ["Bookings", "No ads", "Alerts"],
        },
      },
      {
        icon: MapPin,
        title: "Deliver Services",
        description: "Flexible.",
        details: {
          heading: "Work Your Way",
          body: "Full control.",
          points: ["In-salon", "Home", "Hybrid"],
        },
      },
    ],
  },
};

/* ------------------ COMPONENT ------------------ */
const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof flows>("customer");
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = flows[activeTab].steps;
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
  }, [isPlaying, steps.length]);

  /* RESET */
  useEffect(() => {
    setActiveStep(0);
  }, [activeTab]);

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">How It Works</h2>
          <p className="text-gray-600 mt-3">
            One platform. Three powerful experiences.
          </p>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-full"
          >
            {isPlaying ? "Pause Demo" : "Play Demo"}
          </button>
        </div>

        {/* CTA TABS */}
        <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as any)}>
          <TabsList className="flex justify-center gap-4 mb-12 bg-transparent">

            {Object.entries(flows).map(([key, flow]) => {
              const isActive = activeTab === key;

              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className={`px-6 py-2 rounded-full border transition-all text-sm font-medium
                    ${
                      isActive
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }
                  `}
                >
                  {flow.label}
                </TabsTrigger>
              );
            })}

          </TabsList>

          {/* CONTENT */}
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
                        isActive
                          ? "bg-gray-900 text-white"
                          : "bg-white hover:bg-gray-50"
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
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
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
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
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