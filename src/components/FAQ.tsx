import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ_DATA = [
  {
    question: "What is Pullova?",
    answer:
      "Pullova Beauty is a mobile beauty platform that connects clients with qualified beauty professionals who travel to your preferred location to provide beauty and grooming services. Services are performed inside your home or another approved indoor location, so you can enjoy professional beauty services without traveling to a salon.",
  },
  {
    question: "Where can I receive a Pullova Beauty service?",
    answer:
      "Pullova Beauty services can be provided at approved indoor locations such as private homes, apartments, hotels, vacation rentals, offices, student residences, bridal suites, event venues, assisted living communities, and other approved locations. You must have permission to receive services at the selected location.",
  },
  {
    question: "How does Pullova work?",
    answer:
      "Simply choose the service you need, select a professional, choose a convenient time and location, and confirm your booking. Your beauty professional will take care of the rest.",
  },
  {
    question: "Are Pullova professionals verified?",
    answer:
      "Yes. Pullova is designed to work with verified and qualified beauty professionals so customers can book their services with greater confidence.",
  },
  {
    question: "Can a beauty professional come to my location?",
    answer:
      "Yes. Pullova is built around convenience, allowing you to enjoy selected beauty and grooming services at your home, workplace, hotel, or another convenient location.",
  },
  {
    question: "Which countries is Pullova available in?",
    answer:
      "Pullova is expanding across multiple markets. Availability may vary by location, so check your region to see which services are currently available.",
  },
  {
    question: "Can I book a service for the same day?",
    answer:
      "Same-day bookings may be available depending on the service, professional availability, and your location. You will see available options when making your booking.",
  },
  {
    question: "How much do Pullova services cost?",
    answer:
      "Pricing depends on the service, professional, location, and other booking details. The applicable price will be displayed before you confirm your booking.",
  },
  {
    question: "What happens if I am not satisfied with my service?",
    answer:
      "Your experience matters to us. If you are unhappy with a service, you can contact Pullova support so the issue can be reviewed and the appropriate next steps can be determined.",
  },
  {
    question: "How can I become a Pullova beauty professional?",
    answer:
      "Beauty professionals can join the Pullova platform by completing the professional registration process. More information about eligibility and onboarding will be available as Pullova expands.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-purple-50 py-20 md:py-28"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-purple-100 px-4 py-2 rounded-full mb-5 border border-rose-200/50 shadow-sm">
            <HelpCircle className="w-4 h-4 text-rose-600" />

            <span className="text-sm font-semibold text-gray-800">
              Got Questions?
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            <span className="text-gray-900">Frequently Asked </span>

            <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about Pullova, our beauty
            professionals, and how our on-demand beauty experience works.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className={`rounded-2xl border bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 ${
                  isOpen
                    ? "border-rose-200 shadow-lg shadow-rose-100/40"
                    : "border-gray-100 hover:border-rose-100 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 py-5 md:px-7 md:py-6"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white"
                          : "bg-rose-50 text-rose-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span
                      className={`text-base md:text-lg font-semibold transition-colors duration-300 ${
                        isOpen ? "text-rose-600" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${
                      isOpen
                        ? "bg-rose-100 text-rose-600"
                        : "bg-gray-50 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-7 md:pb-7 md:pl-[84px]">
                        <div className="h-px bg-gradient-to-r from-rose-100 via-purple-100 to-transparent mb-5" />

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Still have questions?
          </p>

          <button
            type="button"
            className="mt-2 font-semibold text-rose-600 hover:text-purple-600 transition-colors"
          >
            Contact our support team →
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FAQ;