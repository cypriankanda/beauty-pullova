import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LegalDocumentLayout from "@/components/legal/LegalDocumentLayout";

// --- Types ---
type PolicySubsection = {
  subtitle: string;
  items: string | string[];
  note?: string;
};

type PolicyEntry = {
  id: string;
  number: string;
  title: string;
  content?: string | string[];
  items?: string[];
  subsections?: PolicySubsection[];
  note?: string;
};

// --- Data Configuration ---
const TERMS_DATA: PolicyEntry[] = [
  {
    id: "platform-services",
    number: "1.",
    title: "Platform services",
    content: "Pullova provides a marketplace connecting clients seeking beauty services and independent beauticians providing services.",
    note: "Pullova does not perform beauty services. Beauticians are independent professionals."
  },
  {
    id: "service-locations",
    number: "2.",
    title: "Service locations",
    content: "Beauty services may be performed at the client’s location, partner salons, or professional beauty studios.",
    note: "Pullova may refer clients to partner salons when services require specialized facilities. Partner salons operate as independent businesses."
  },
  {
    id: "appointment-bookings",
    number: "3.",
    title: "Appointment bookings",
    items: [
      "Hair styling",
      "Braiding",
      "Barbering",
      "Makeup",
      "Manicure and pedicure",
      "Skincare services"
    ],
    note: "Appointments must be scheduled through the platform."
  },
  {
    id: "sms-otp-consent",
    number: "4.",
    title: "SMS & OTP Authentication Consent",
    content: "Pullova uses SMS messaging, including One-Time Password (OTP) authentication, to support account security and service delivery.",
    subsections: [
      {
        subtitle: "4.1 Opt-In Consent",
        items: [
          "OTP verification codes",
          "Appointment confirmations",
          "Booking reminders",
          "Service updates",
          "Customer support messages"
        ],
        note: "By providing your phone number, you agree to receive appointment and account-related messages. Message frequency varies. Message & data rates may apply."
      },
      {
        subtitle: "4.2 Opt-Out & Help",
        items: "Users may opt out at any time by replying STOP. For assistance, reply HELP or contact support@pullova.com.",
        note: "Opting out may limit booking confirmations and reminders."
      },
      {
        subtitle: "4.5 No Sharing of SMS Consent Data",
        items: "Pullova does not sell, rent, or share SMS opt-in data or phone numbers for marketing or promotional purposes."
      }
    ]
  },
  {
    id: "health-safety",
    number: "5.",
    title: "Health and Safety Disclosures",
    content: "Clients must disclose relevant health information including allergies, skin sensitivities, and previous chemical treatments.",
    note: "Beauticians may decline services if risks are identified."
  },
  {
    id: "chemical-waiver",
    number: "6.",
    title: "Product and Chemical Treatment Waiver",
    content: "Certain services involve chemical products such as hair coloring, relaxers, adhesives, and skin treatments.",
    note: "Clients acknowledge that reactions may occur. Pullova is not liable for adverse reactions resulting from undisclosed allergies."
  },
  {
    id: "service-outcome",
    number: "9.",
    title: "Service Outcome Disclaimer",
    content: "Beauty results may vary depending on hair type, skin condition, and prior treatments. Pullova does not guarantee specific aesthetic outcomes."
  },
  {
    id: "client-responsibilities",
    number: "10.",
    title: "Client Responsibilities",
    items: [
      "A safe service environment",
      "Adequate lighting and workspace",
      "Respectful treatment of beauticians"
    ]
  },
  {
    id: "misconduct-policy",
    number: "12.",
    title: "Safety and Misconduct Policy",
    content: "Pullova maintains a zero-tolerance policy regarding harassment, sexual misconduct, and discrimination. Violations may result in account termination."
  },
  {
    id: "dispute-resolution",
    number: "13.",
    title: "Arbitration and Dispute Resolution",
    content: "Disputes may be resolved through arbitration where permitted by law."
  },
  {
    id: "governing-law",
    number: "15.",
    title: "Governing law",
    content: "These Terms shall be governed by the laws of the jurisdiction where services are provided."
  }
];

// --- Helper Component ---
const RenderTermsContent = ({ entry }: { entry: PolicyEntry }) => {
  const renderItems = (items: string | string[]) => {
    if (typeof items === "string") return <p className="text-gray-600 leading-relaxed">{items}</p>;
    return (
      <ul className="list-disc pl-5 space-y-1 text-gray-600 marker:text-pink-500">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    );
  };

  return (
    <div className="space-y-4">
      {entry.content && renderItems(entry.content)}
      {entry.items && renderItems(entry.items)}
      {entry.subsections?.map((sub, idx) => (
        <div key={idx} className="mt-4 bg-gray-50/50 p-4 rounded-lg border border-gray-100">
          <h4 className="text-sm font-bold text-gray-800 mb-2 uppercase tracking-tight">{sub.subtitle}</h4>
          {renderItems(sub.items)}
          {sub.note && <p className="mt-2 text-xs italic text-gray-500 font-medium">{sub.note}</p>}
        </div>
      ))}
      {entry.note && !entry.subsections && (
        <p className="text-sm font-medium text-pink-700 bg-pink-50 p-3 rounded-md">{entry.note}</p>
      )}
    </div>
  );
};

// --- Main Component ---
const TermsConditions = () => {
  const { t } = useTranslation();
  const toc = TERMS_DATA.map(d => ({ id: d.id, label: d.title }));

  return (
    <LegalDocumentLayout
      title="Pullova Home Beauty Terms & Conditions"
      description="These Terms govern the use of the Pullova Home Beauty platform, which connects clients with independent beauty professionals."
      meta={[
        { label: "Company", value: "Pullova Technologies Inc." },
        { label: "Service", value: "Pullova Home Beauty Platform" },
        { label: "Effective date", value: "March 15, 2026" },
        { label: "Last updated", value: "March 15, 2026" },
      ]}
      toc={toc}
      relatedLinks={[
        { to: "/privacy-policy", label: t("related.privacyPolicy") },
        { to: "/faq", label: t("related.faq") },
      ]}
    >
      <div className="mb-8 p-4 bg-pink-50 rounded-xl border border-pink-100 text-pink-900 text-sm">
        <strong>Important:</strong> By accessing or using the Pullova Home Beauty platform, you agree to these Terms & Conditions. If you do not agree, do not use the platform.
      </div>

      <Accordion type="single" collapsible className="w-full bg-white rounded-xl border border-gray-200 px-6 shadow-sm overflow-hidden">
        {TERMS_DATA.map((section) => (
          <AccordionItem key={section.id} value={section.id} id={section.id} className="scroll-mt-24 border-b last:border-0">
            <AccordionTrigger className="hover:no-underline py-5 group">
              <div className="flex items-center gap-4 text-left">
                <span className="text-pink-600 font-mono font-bold text-lg">{section.number}</span>
                <span className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                  {section.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-8">
              <RenderTermsContent entry={section} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </LegalDocumentLayout>
  );
};

export default TermsConditions;