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
  subsections?: PolicySubsection[];
  note?: string; // Fixed: Added missing property
  items?: string[];
};

// --- Data Configuration ---
const PRIVACY_DATA: PolicyEntry[] = [
  {
    id: "information-we-collect",
    number: "1.",
    title: "Information we collect",
    content: "Pullova collects personal information necessary to operate the beauty services marketplace.",
    subsections: [
      {
        subtitle: "A. Client Account Information",
        items: ["Full name", "Email address", "Phone number", "Profile photo", "Login credentials"]
      },
      {
        subtitle: "B. Service Booking Information",
        items: ["Service type requested", "Appointment date and location", "Beautician selected", "Service history", "Ratings and feedback"]
      },
      {
        subtitle: "C. Beautician Verification Information",
        items: ["Cosmetology license", "Certifications", "Government ID", "Portfolio photos", "Professional profile details"]
      },
      {
        subtitle: "D. Payment Information",
        items: ["Transaction history", "Billing address", "Payment confirmations"],
        note: "Payments are processed through secure third-party providers. Pullova does not store full card details."
      },
      {
        subtitle: "E. Beauty Service Health Information",
        items: ["Allergies", "Skin sensitivities", "Hair conditions", "Product reactions"],
        note: "This information is used solely to provide safe services and is limited to the assigned beautician."
      }
    ]
  },
  {
    id: "sms-consent",
    number: "2.",
    title: "SMS & OTP Authentication Consent",
    content: "Pullova uses SMS messaging, including One-Time Password (OTP) authentication, to verify identity and secure accounts.",
    subsections: [
      {
        subtitle: "2.1 Opt-In Consent",
        items: "By providing your mobile phone number, you expressly consent to receive SMS communications for OTP verification, appointment confirmations, and service updates.",
        note: "Message frequency varies. Message & data rates may apply. Reply STOP to opt out."
      },
      {
        subtitle: "2.5 No Sharing of SMS Consent Data",
        items: "Pullova does not sell, rent, share, or disclose SMS opt-in data or phone numbers for marketing or promotional purposes."
      }
    ]
  },
  {
    id: "cookie-policy",
    number: "3.",
    title: "Cookie Policy",
    content: "Cookies are used to maintain sessions, improve functionality, analyze usage, and prevent fraud. Users may disable cookies via browser settings."
  },
  {
    id: "ai-matching",
    number: "4.",
    title: "AI Service Matching Transparency",
    content: "Pullova uses automated systems to match clients and beauticians based on location, service type, availability, and ratings."
  },
  {
    id: "biometric-data",
    number: "5.",
    title: "Biometric Data Disclosure",
    content: "Pullova may use biometric verification such as selfie verification and facial comparison.",
    note: "Pullova does not sell biometric data and retains it only as necessary."
  },
  {
    id: "health-data-act",
    number: "9.",
    title: "Washington My Health Data Act (MHMDA)",
    content: "Health-related beauty data (allergies, skin conditions) is protected under MHMDA. Users may request access, deletion, or restrict processing.",
    note: "Pullova does not sell health data."
  },
  {
    id: "user-rights",
    number: "11.",
    title: "User Privacy Rights",
    items: ["Access", "Correction", "Deletion", "Restriction", "Portability"],
    content: "To exercise these rights, please contact our Privacy Office."
  },
  {
    id: "contact",
    number: "13.",
    title: "Contact Information",
    content: "Pullova Technologies Inc. | Privacy Office",
    note: "Email: privacy@pullova.com"
  }
];

// --- Helper Component ---
const RenderPolicyContent = ({ entry }: { entry: PolicyEntry }) => {
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
const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const toc = PRIVACY_DATA.map(d => ({ id: d.id, label: d.title }));

  return (
    <LegalDocumentLayout
      title="Pullova Home Beauty Privacy Policy"
      description="How Pullova Technologies Inc. collects, uses, stores, and protects personal information within our beauty marketplace."
      meta={[
        { label: "Effective date", value: "March 15, 2026" },
        { label: "Last updated", value: "March 15, 2026" },
      ]}
      toc={toc}
      relatedLinks={[
        { to: "/terms", label: t("related.terms") },
        { to: "/faq", label: t("related.faq") },
      ]}
    >
      <div className="mb-8 p-4 bg-gray-900 rounded-xl text-white text-sm shadow-inner">
        <p className="opacity-80">
          The Pullova Home Beauty platform connects clients, licensed professionals, and corporate wellness programs. 
          This policy follows standards used by major marketplace platforms like StyleSeat and Glamsquad.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full bg-white rounded-xl border border-gray-200 px-6 shadow-sm overflow-hidden">
        {PRIVACY_DATA.map((section) => (
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
              <RenderPolicyContent entry={section} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </LegalDocumentLayout>
  );
};

export default PrivacyPolicy;