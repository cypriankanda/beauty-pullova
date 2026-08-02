import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SEO from "@/components/Seo"

/* ---------------- TYPES ---------------- */
type FaqEntry = {
  q: string;
  answer: string | string[];
};

type FaqSection = {
  title: string;
  items: FaqEntry[];
};

type LegalBlock = {
  region: string;
  sections: FaqSection[];
};

/* ---------------- LEGAL FAQ DATA (EXACT) ---------------- */
const LEGAL_FAQ: LegalBlock[] = [
  {
    region: "Washington State",
    sections: [
      {
        title: "A. WASHINGTON STATE LEGAL FAQ",
        items: [
          {
            q: "Q1. Do beauticians need a license in Washington?",
            answer:
              "For many cosmetology-related services in Washington, individual practitioners must hold the appropriate professional license, and businesses operating a salon, personal service location, or mobile unit may need a separate business-side license as well. Washington also has a specific licensing pathway for a mobile unit offering cosmetology services.",
          },
          {
            q: "Q2. Can a home beauty platform use a mobile service model in Washington?",
            answer:
              "Yes. Washington recognizes mobile units for cosmetology services, and the operator must follow the state licensing process for that business model.",
          },
          {
            q: "Q3. Is insurance required for a mobile beauty unit in Washington?",
            answer:
              "Yes. Washington states that to get a salon shop, personal service, or mobile unit license, the business must certify that it is covered by public liability insurance of at least $100,000 combined bodily injury and property damage liability.",
          },
          {
            q: "Q4. Can clients sue over deceptive pricing or misleading advertising?",
            answer:
              "Potentially yes. Washington’s Consumer Protection Act declares unfair or deceptive acts or practices in trade or commerce unlawful, and the statute also allows a civil action with possible attorney’s fees and, in some cases, enhanced damages.",
          },
          {
            q: "Q5. Why does this matter for a home beauty app?",
            answer:
              "It means your app and website should present prices, fees, promotions, refund terms, provider qualifications, and availability in a clear and non-misleading way.",
          },
          {
            q: "Q6. Is health-related beauty data sensitive in Washington?",
            answer:
              "Potentially yes. Washington’s My Health My Data Act applies to consumer health data and gives consumers rights relating to access, deletion, and withdrawal of consent.",
          },
          {
            q: "Q7. What should the app do if it collects allergy or skin-condition information?",
            answer:
              "Use a clear consent flow, restrict internal access, explain the purpose of collection, and align your privacy notices and deletion processes accordingly.",
          },
          {
            q: "Q8. Is there a limitation period for some consumer protection claims in Washington?",
            answer:
              "Claims for damages under the Washington Consumer Protection Act are generally subject to a four-year limitations period.",
          },
          {
            q: "Q9. What is the safest website/app disclosure approach in Washington?",
            answer: [
              "clear service descriptions",
              "exact fee disclosures before checkout",
              "cancellation/no-show rules",
              "licensing disclosures where relevant",
              "privacy notice",
              "health-data consent where relevant",
              "complaint and refund procedure",
            ],
          },
        ],
      },
    ],
  },

  {
    region: "Kenya",
    sections: [
      {
        title: "B. KENYA LEGAL FAQ",
        items: [
          {
            q: "Q1. Is personal data regulated in Kenya?",
            answer:
              "Yes. Kenya’s Data Protection Act, 2019 regulates the processing of personal data.",
          },
          {
            q: "Q2. What does that mean for a beauty app in Kenya?",
            answer:
              "If your platform collects names, phone numbers, location details, payment information, photos, or booking history, you need a lawful data-handling framework and a proper privacy notice.",
          },
          {
            q: "Q3. Does Kenya regulate data breaches?",
            answer:
              "Yes. Kenya has 2021 data protection regulations that address personal data breaches.",
          },
          {
            q: "Q4. Should clients consent to marketing messages?",
            answer:
              "Yes. Obtain clear consent for promotional SMS, email, and push notifications.",
          },
          {
            q: "Q5. Can the app transfer data outside Kenya?",
            answer:
              "Yes, but subject to safeguards under Kenyan data protection law.",
          },
          {
            q: "Q6. What should the platform disclose to Kenyan users?",
            answer: [
              "what data is collected",
              "why it is collected",
              "how long it is retained",
              "whether it is shared",
              "whether data is transferred",
              "how users can complain",
            ],
          },
          {
            q: "Q7. Should beauticians in Kenya see client phone numbers before acceptance?",
            answer:
              "Only where operationally necessary, ideally with masking.",
          },
          {
            q: "Q8. What legal FAQ should be shown to beauticians in Kenya?",
            answer: [
              "what client data they may access",
              "they must only use it for booking",
              "no off-platform marketing",
              "breach reporting",
              "penalties for misuse",
            ],
          },
        ],
      },
    ],
  },

  {
    region: "Nigeria",
    sections: [
      {
        title: "C. NIGERIA LEGAL FAQ",
        items: [
          {
            q: "Q1. Is personal data regulated in Nigeria?",
            answer:
              "Yes. Nigeria enacted the Nigeria Data Protection Act, 2023.",
          },
          {
            q: "Q2. Does a beauty platform need a privacy policy in Nigeria?",
            answer:
              "Yes, if it collects personal data.",
          },
          {
            q: "Q3. Are consumer rights protected in Nigeria?",
            answer:
              "Yes. The Federal Competition and Consumer Protection Act applies.",
          },
          {
            q: "Q4. Why does this matter?",
            answer:
              "Misleading pricing or unfair practices can create legal risk.",
          },
          {
            q: "Q5. Should pricing be clear?",
            answer:
              "Yes. Full transparency before checkout is required.",
          },
          {
            q: "Q6. Are there implementation materials?",
            answer:
              "Yes. NDPC provides guidance and directives.",
          },
          {
            q: "Q7. Employee vs contractor?",
            answer:
              "Depends on operational control. Legal advice recommended.",
          },
          {
            q: "Q8. Client data rules?",
            answer:
              "Use only for service delivery. No off-platform diversion.",
          },
          {
            q: "Q9. Minimum FAQ topics?",
            answer: [
              "privacy",
              "marketing consent",
              "complaints",
              "refunds",
              "pricing",
              "verification",
              "conduct rules",
            ],
          },
        ],
      },
    ],
  },
];

/* ---------------- RENDER ---------------- */
function renderEntry(entry: FaqEntry) {
  if (typeof entry.answer === "string") {
    return <p className="text-gray-600">{entry.answer}</p>;
  }

  return (
    <ul className="list-disc pl-5 text-gray-600">
      {entry.answer.map((line, i) => (
        <li key={i}>{line}</li>
      ))}
    </ul>
  );
}

/* ---------------- COMPONENT ---------------- */
const FAQ = () => {
  const [region, setRegion] = useState("US");

  useEffect(() => {
    fetch("/api/region")
      .then((res) => res.json())
      .then((data) => setRegion(data.country))
      .catch(() => setRegion("US"));
  }, []);

  const mapRegion = () => {
    if (region === "KE") return "Kenya";
    if (region === "NG") return "Nigeria";
    return "Washington State";
  };

  const selected = mapRegion();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SEO
        title="Frequently Asked Questions | Pullova Legal & Support"
        description="Find answers to frequently asked questions about Pullova, including bookings, privacy, data protection, consumer rights, beauty professionals, payments, and legal information."
        canonical="https://pullova.com/faq"
      />
      <Navigation />

      <main className="flex-1 pt-24 pb-16 container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">
          REGION-SPECIFIC LEGAL FAQ
        </h1>

        <div className="mb-6">
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="border px-3 py-1"
          >
            <option value="KE">Kenya</option>
            <option value="NG">Nigeria</option>
            <option value="US">USA</option>
          </select>
        </div>

        {LEGAL_FAQ.filter((b) => b.region === selected).map((block) => (
          <div key={block.region}>
            {block.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold mb-4">
                  {section.title}
                </h2>

                <Accordion type="single" collapsible>
                  {section.items.map((item, i) => (
                    <AccordionItem key={i} value={String(i)}>
                      <AccordionTrigger>{item.q}</AccordionTrigger>
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
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;