"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <section id="how-it-works" className="py-28 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            How Pullova Works
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Select your role below to explore tailored value propositions and experiences.
          </p>

          <p className="text-sm text-gray-500 mt-2">
             Click a tab to continue
          </p>
        </motion.div>

        {/* ROLE SELECTOR */}
        <Tabs defaultValue="customer" className="w-full">

          <TabsList className="flex justify-center gap-4 bg-transparent">

            {/* CUSTOMER */}
            <TabsTrigger
              value="customer"
              onClick={() => navigate("/client")}
              className="
                px-6 py-3 rounded-full
                bg-gradient-to-r from-pink-500 to-rose-500
                text-white font-semibold
                shadow-md hover:shadow-lg
                transition-all duration-300
                data-[state=active]:scale-105
              "
            >
              Customer
            </TabsTrigger>

            {/* BEAUTICIAN */}
            <TabsTrigger
              value="beautician"
              onClick={() => navigate("/beauticians")}
              className="
                px-6 py-3 rounded-full
                bg-gradient-to-r from-purple-500 to-indigo-500
                text-white font-semibold
                shadow-md hover:shadow-lg
                transition-all duration-300
                data-[state=active]:scale-105
              "
            >
              Beautician
            </TabsTrigger>

            {/* SALON */}
            <TabsTrigger
              value="salon"
              onClick={() => navigate("/salon")}
              className="
                px-6 py-3 rounded-full
                bg-gradient-to-r from-emerald-500 to-teal-500
                text-white font-semibold
                shadow-md hover:shadow-lg
                transition-all duration-300
                data-[state=active]:scale-105
              "
            >
              Salon Partner
            </TabsTrigger>

          </TabsList>

        </Tabs>

        {/* SMALL INFO SECTION */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Each section is designed to show you exactly how Pullova works for your role  from booking flow to revenue opportunities and platform benefits.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;