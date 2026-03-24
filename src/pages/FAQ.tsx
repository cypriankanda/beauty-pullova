import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqEntry = {
  q: string;
  answer: string | string[];
  note?: string;
  lead?: string;
};

type FaqSection = {
  title: string;
  items: FaqEntry[];
};

const BEAUTICIAN_FAQ: FaqSection[] = [
  {
    title: "1. Onboarding & Requirements",
    items: [
      {
        q: "How do I join the platform?",
        answer:
          "Sign up via the app or website and complete the onboarding process.",
      },
      {
        q: "What documents are required?",
        answer: [
          "Valid ID",
          "Certification/license (if required by region)",
          "Portfolio (optional but recommended)",
        ],
      },
      {
        q: "Do I need prior experience?",
        answer:
          "Yes. Experience level determines your category (Standard, Pro, Elite).",
      },
      {
        q: "Is there training provided?",
        answer:
          "Yes. Onboarding training and optional advanced certification programs are available.",
      },
    ],
  },
  {
    title: "2. Earnings & Payments",
    items: [
      {
        q: "How do I earn?",
        answer:
          "You earn per completed service based on pricing and your tier.",
      },
      {
        q: "What is the commission structure?",
        answer:
          "Platform takes a service fee; majority goes to the beautician (e.g., 80–90%).",
      },
      {
        q: "When do I get paid?",
        answer: "Weekly or instant payout depending on region.",
      },
      {
        q: "Can I set my own prices?",
        answer: [
          "Depends on model:",
          "Controlled pricing (standardized)",
          "Flexible pricing (for Elite providers)",
        ],
      },
    ],
  },
  {
    title: "3. Booking & Work Flow",
    items: [
      {
        q: "How do I receive bookings?",
        answer:
          "Bookings are assigned automatically or accepted manually via the app.",
      },
      {
        q: "Can I choose my working hours?",
        answer: "Yes. You control your availability schedule.",
      },
      {
        q: "Can I reject a booking?",
        answer:
          "Yes, but excessive rejection may affect your ranking.",
      },
    ],
  },
  {
    title: "4. Service Delivery",
    items: [
      {
        q: "Do I bring my own tools?",
        answer:
          "Yes. Beauticians must provide their own professional kits.",
      },
      {
        q: "Are travel costs covered?",
        answer: "Yes, depending on pricing structure.",
      },
      {
        q: "What if a client is not ready or absent?",
        answer:
          "Report via the app; cancellation policies apply.",
      },
    ],
  },
  {
    title: "5. Ratings & Performance",
    items: [
      {
        q: "How is my performance measured?",
        answer: [
          "Ratings",
          "Completion rate",
          "Punctuality",
          "Customer feedback",
        ],
      },
      {
        q: "Can I be suspended?",
        answer:
          "Yes, for policy violations or poor performance.",
      },
    ],
  },
  {
    title: "6. Safety & Protection",
    items: [
      {
        q: "Am I insured?",
        answer:
          "Coverage depends on region and platform policy (recommended to have personal liability insurance).",
      },
      {
        q: "What if I feel unsafe?",
        answer:
          "Use the in-app emergency feature and report immediately.",
      },
      {
        q: "Are clients verified?",
        answer:
          "Yes. Clients go through account verification processes.",
      },
    ],
  },
  {
    title: "7. Growth & Opportunities",
    items: [
      {
        q: "Can I upgrade my tier (Standard → Pro → Elite)?",
        answer:
          "Yes, based on performance and additional certification.",
      },
      {
        q: "Do you offer incentives or bonuses?",
        answer:
          "Yes. Peak-hour bonuses, referral rewards, and promotions.",
      },
      {
        q: "Can I build my personal brand?",
        answer:
          "Yes. Your profile includes portfolio, ratings, and reviews.",
      },
    ],
  },
  {
    title: "8. Platform Policies",
    items: [
      {
        q: "Can I take clients outside the platform?",
        answer:
          "No. This violates platform policy and may lead to suspension.",
      },
      {
        q: "What are the cancellation rules for beauticians?",
        answer:
          "Frequent cancellations may result in penalties.",
      },
      {
        q: "What happens in disputes?",
        answer:
          "The platform mediates and resolves disputes based on evidence.",
      },
    ],
  },
];

const LEGAL_FAQ: { region: string; disclaimer: string; sections: FaqSection[] }[] =
  [
    {
      region: "Washington State",
      disclaimer:
        "This is not a substitute for local counsel, but it is a strong operational FAQ base for your website, app, and support team.",
      sections: [
        {
          title: "Washington State legal FAQ",
          items: [
            {
              q: "Do beauticians need a license in Washington?",
              answer:
                "For many cosmetology-related services in Washington, individual practitioners must hold the appropriate professional license, and businesses operating a salon, personal service location, or mobile unit may need a separate business-side license as well. Washington also has a specific licensing pathway for a mobile unit offering cosmetology services.",
            },
            {
              q: "Can a home beauty platform use a mobile service model in Washington?",
              answer:
                "Yes. Washington recognizes mobile units for cosmetology services, and the operator must follow the state licensing process for that business model.",
            },
            {
              q: "Is insurance required for a mobile beauty unit in Washington?",
              answer:
                "Yes. Washington states that to get a salon shop, personal service, or mobile unit license, the business must certify that it is covered by public liability insurance of at least $100,000 combined bodily injury and property damage liability.",
            },
            {
              q: "Can clients sue over deceptive pricing or misleading advertising?",
              answer:
                "Potentially yes. Washington’s Consumer Protection Act declares unfair or deceptive acts or practices in trade or commerce unlawful, and the statute also allows a civil action with possible attorney’s fees and, in some cases, enhanced damages.",
            },
            {
              q: "Why does this matter for a home beauty app?",
              answer:
                "It means your app and website should present prices, fees, promotions, refund terms, provider qualifications, and availability in a clear and non-misleading way. That is a compliance inference based on Washington’s prohibition of unfair or deceptive practices.",
            },
            {
              q: "Is health-related beauty data sensitive in Washington?",
              answer:
                "Potentially yes. Washington’s My Health My Data Act applies to consumer health data and gives consumers rights relating to access, deletion, and withdrawal of consent in covered scenarios. A beauty platform may trigger this if it collects data tied to skin conditions, allergies, treatment suitability, pregnancy-related limitations, or other health-linked screening details. This is a compliance inference from the statute’s consumer health data framework.",
            },
            {
              q: "What should the app do if it collects allergy or skin-condition information?",
              answer:
                "Use a clear consent flow, restrict internal access, explain the purpose of collection, and align your privacy notices and deletion processes accordingly. This is a practical compliance step inferred from Washington’s health-data protections and general deceptive-practices risk.",
            },
            {
              q: "Is there a limitation period for some consumer protection claims in Washington?",
              answer:
                "Claims for damages under the Washington Consumer Protection Act are generally subject to a four-year limitations period.",
            },
            {
              q: "What is the safest website/app disclosure approach in Washington?",
              lead: "Use:",
              answer: [
                "clear service descriptions",
                "exact fee disclosures before checkout",
                "cancellation/no-show rules",
                "licensing disclosures where relevant",
                "privacy notice",
                "health-data consent where relevant",
                "complaint and refund procedure",
              ],
              note: "That recommendation is a risk-control inference drawn from Washington licensing and consumer protection law.",
            },
          ],
        },
      ],
    },
    {
      region: "Kenya",
      disclaimer:
        "This is not a substitute for local counsel, but it is a strong operational FAQ base for your website, app, and support team.",
      sections: [
        {
          title: "Kenya legal FAQ",
          items: [
            {
              q: "Is personal data regulated in Kenya?",
              answer:
                "Yes. Kenya’s Data Protection Act, 2019 regulates the processing of personal data and establishes the Office of the Data Protection Commissioner.",
            },
            {
              q: "What does that mean for a beauty app in Kenya?",
              answer:
                "If your platform collects names, phone numbers, location details, payment information, photos, or booking history, you need a lawful data-handling framework and a proper privacy notice. That is a practical compliance inference from the Act’s regulation of personal-data processing.",
            },
            {
              q: "Does Kenya regulate data breaches?",
              answer:
                "Yes. Kenya has 2021 data protection regulations that address personal data breaches and notification-related requirements.",
            },
            {
              q: "Should clients consent to marketing messages?",
              answer:
                "Yes. As a best compliance practice, obtain clear consent for promotional SMS, email, and push notifications and keep records of that consent. This is a practical recommendation consistent with regulated personal-data processing and breach-governance expectations.",
            },
            {
              q: "Can the app transfer data outside Kenya?",
              answer:
                "Kenya’s legal framework includes rules on transfers of personal data outside the country, including safeguards and other transfer bases.",
            },
            {
              q: "What should the platform disclose to Kenyan users?",
              lead: "At minimum, a strong Kenya-facing privacy FAQ should explain:",
              answer: [
                "what data is collected",
                "why it is collected",
                "how long it is retained",
                "whether it is shared with beauticians, payment processors, or partners",
                "whether data may be transferred outside Kenya",
                "how users can complain or request action on their data",
              ],
              note: "This is an implementation recommendation grounded in the Act’s regulation of personal-data processing and data-subject rights.",
            },
            {
              q: "Should beauticians in Kenya see client phone numbers before acceptance?",
              answer:
                "Only where operationally necessary, and ideally through controlled masking or limited disclosure until the booking reaches the proper stage. That is a privacy-by-design recommendation inferred from the data-protection framework.",
            },
            {
              q: "What legal FAQ should be shown to beauticians in Kenya?",
              lead: "Include:",
              answer: [
                "what client data they may access",
                "that they must only use it for the booking",
                "they must not retain or market to clients off-platform without authorization",
                "breach reporting expectations",
                "account penalties for misuse",
              ],
              note: "This is a compliance implementation inference from Kenya’s data-protection regime.",
            },
          ],
        },
      ],
    },
    {
      region: "Nigeria",
      disclaimer:
        "This is not a substitute for local counsel, but it is a strong operational FAQ base for your website, app, and support team.",
      sections: [
        {
          title: "Nigeria legal FAQ",
          items: [
            {
              q: "Is personal data regulated in Nigeria?",
              answer:
                "Yes. Nigeria enacted the Nigeria Data Protection Act, 2023, which established the Nigeria Data Protection Commission and provides the core legal framework for personal data protection.",
            },
            {
              q: "Does a beauty platform need a privacy policy in Nigeria?",
              answer:
                "Yes, as a practical matter. If the platform collects customer or beautician personal data, it should maintain a clear privacy notice and internal data-handling controls consistent with the Nigeria Data Protection Act framework.",
            },
            {
              q: "Are consumer rights protected in Nigeria?",
              answer:
                "Yes. The Federal Competition and Consumer Protection Act, 2018 is Nigeria’s main statute governing consumer protection and competition. The FCCPC is the lead regulator for consumer protection under that framework.",
            },
            {
              q: "Why does the FCCPA matter for a beauty app?",
              answer:
                "Because misleading prices, false promotions, poor complaint handling, unfair terms, or deceptive representations about providers or services can create consumer-protection risk. That is a practical compliance inference from Nigeria’s consumer-protection framework.",
            },
            {
              q: "Should pricing be shown clearly before checkout in Nigeria?",
              answer:
                "Yes. Clear upfront disclosure of service price, add-on fees, travel charges, cancellation consequences, and refund rules is the safer approach under consumer-protection principles. That is a compliance inference from the FCCPA regime.",
            },
            {
              q: "Are there current implementation materials for the Nigeria Data Protection Act?",
              answer:
                "Yes. The NDPC publishes resources and implementation materials, including a 2025 General Application and Implementation Directive (GAID) and additional guidance notices.",
            },
            {
              q: "Should beauticians be treated as employees or contractors in Nigeria?",
              answer:
                "That depends on the actual operating model, not just the label in the contract. If the platform exerts heavy control over hours, tools, pricing, exclusivity, supervision, and work methods, misclassification risk can increase. This is a legal-risk inference; it should be reviewed by Nigerian counsel before launch.",
            },
            {
              q: "What should the Nigeria FAQ say about client data?",
              answer:
                "It should state that beauticians may only use client data for service delivery, must not divert customers off-platform, and must comply with platform privacy rules and any applicable law. That is a practical implementation step inferred from the NDP Act structure.",
            },
            {
              q: "What are the minimum legal FAQ topics for Nigeria?",
              lead: "Include:",
              answer: [
                "privacy and data use",
                "marketing consent",
                "complaint process",
                "refunds and cancellations",
                "pricing transparency",
                "provider verification",
                "off-platform solicitation prohibition",
                "user conduct and account suspension",
              ],
              note: "This recommendation is based on the combined data-protection and consumer-protection framework.",
            },
          ],
        },
      ],
    },
  ];

function renderEntry(entry: FaqEntry) {
  const { answer, note, lead } = entry;
  const body =
    typeof answer === "string" ? (
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    ) : (
      <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
        {answer.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    );
  const main =
    lead && typeof answer !== "string" ? (
      <div className="space-y-2">
        <p className="font-medium text-gray-800">{lead}</p>
        {body}
      </div>
    ) : (
      body
    );
  if (!note) return main;
  return (
    <div className="space-y-3">
      {main}
      <p className="text-gray-600 leading-relaxed text-sm">{note}</p>
    </div>
  );
}

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Answers for service providers (beauticians) and region-specific legal
            overview for Washington State, Kenya, and Nigeria.
          </p>

          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-3">
              Beautician FAQ (service providers)
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Onboarding, earnings, bookings, delivery, performance, safety,
              growth, and platform policies.
            </p>
            <div className="space-y-8">
              {BEAUTICIAN_FAQ.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {section.title}
                  </h3>
                  <Accordion type="single" collapsible className="w-full bg-white rounded-xl border border-gray-200 px-4 shadow-sm">
                    {section.items.map((item, idx) => (
                      <AccordionItem
                        key={`${section.title}-${idx}`}
                        value={`${section.title}-${idx}`}
                      >
                        <AccordionTrigger className="text-left text-gray-900 hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent>
                          {renderEntry(item)}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-3">
              Region-specific legal FAQ
            </h2>
            <p className="text-sm text-amber-900/90 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-8">
              The legal sections below are operational FAQ guidance only and are
              not a substitute for advice from qualified counsel in your
              jurisdiction.
            </p>
            <div className="space-y-12">
              {LEGAL_FAQ.map((block) => (
                <div key={block.region}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {block.region}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{block.disclaimer}</p>
                  {block.sections.map((section) => (
                    <div key={section.title} className="mb-6">
                      <h4 className="text-base font-medium text-gray-800 mb-3">
                        {section.title}
                      </h4>
                      <Accordion type="single" collapsible className="w-full bg-white rounded-xl border border-gray-200 px-4 shadow-sm">
                        {section.items.map((item, idx) => (
                          <AccordionItem
                            key={`${block.region}-${idx}`}
                            value={`${block.region}-${idx}`}
                          >
                            <AccordionTrigger className="text-left text-gray-900 hover:no-underline">
                              {item.q}
                            </AccordionTrigger>
                            <AccordionContent>
                              {renderEntry(item)}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
