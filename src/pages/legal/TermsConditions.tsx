import LegalDocumentLayout, {
  Section,
  Subheading,
  BulletList,
} from "@/components/legal/LegalDocumentLayout";

const TermsConditions = () => {
  const toc = [
    { id: "platform-services", label: "Platform services" },
    { id: "service-locations", label: "Service locations" },
    { id: "appointment-bookings", label: "Appointment bookings" },
    { id: "otp-authentication", label: "OTP authentication" },
    { id: "health-safety", label: "Health & safety" },
    { id: "service-disclaimer", label: "Service outcome disclaimer" },
    { id: "client-responsibilities", label: "Client responsibilities" },
    { id: "provider-status", label: "Independent providers" },
    { id: "payments-cancellations", label: "Payments & cancellations" },
    { id: "limitation-liability", label: "Limitation of liability" },
    { id: "governing-law", label: "Governing law" },
    { id: "changes", label: "Changes to these terms" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <LegalDocumentLayout
      title="Pullova Home Beauty Terms & Conditions"
      description="Terms that govern use of the Pullova Home Beauty marketplace connecting clients with independent beauty professionals."
      meta={[
        { label: "Company", value: "Pullova Technologies Inc." },
        { label: "Service", value: "Pullova Home Beauty Platform" },
        { label: "Effective date", value: "March 15, 2026" },
        { label: "Last updated", value: "March 15, 2026" },
      ]}
      toc={toc}
      relatedLinks={[
        { to: "/privacy-policy", label: "Privacy Policy" },
        { to: "/faq", label: "FAQ" },
      ]}
    >
      <p className="text-base text-gray-600 -mt-2">
        By accessing or using the Pullova Home Beauty platform, you agree to these
        Terms & Conditions. If you do not agree, do not use the platform.
      </p>

      <Section id="platform-services" number="1." title="Platform services">
        <p>
          Pullova provides an online marketplace and related technology that
          connects clients with independent beauty professionals.{" "}
          <strong>
            Pullova does not perform beauty services and is not the employer of
            providers on the platform.
          </strong>{" "}
          Services are delivered by independent professionals, subject to their
          licensing, qualifications, and compliance obligations in the applicable
          region.
        </p>
      </Section>

      <Section id="service-locations" number="2." title="Service locations">
        <p>
          Beauty services may be performed at the client’s location, at partner
          salons, or at professional studios, depending on the booking and local
          availability described in the app or website.
        </p>
      </Section>

      <Section id="appointment-bookings" number="3." title="Appointment bookings">
        <p>
          The platform may support scheduling for services that commonly
          include:
        </p>
        <BulletList
          items={[
            "Hair styling",
            "Braiding",
            "Barbering",
            "Makeup",
            "Manicure and pedicure",
            "Skincare services",
          ]}
        />
        <p>
          Specific offerings, pricing, and availability are displayed at the time
          of booking and may vary by region and provider.
        </p>
      </Section>

      <Section id="otp-authentication" number="4." title="OTP authentication">
        <p>
          Pullova uses OTP authentication for account registration, login, and
          booking confirmations. You agree to provide accurate contact information
          and to maintain the security of your account credentials.
        </p>
      </Section>

      <Section id="health-safety" number="5." title="Health & safety">
        <p>
          Clients must disclose allergies, skin sensitivities, and relevant prior
          treatments (including chemical services) before services begin, to the
          extent needed for the provider to perform safely. Providers are
          responsible for conducting services in line with professional standards
          and applicable regulations.
        </p>
      </Section>

      <Section id="service-disclaimer" number="6." title="Service outcome disclaimer">
        <p>
          Beauty results may vary based on hair type, skin condition, product
          compatibility, and prior treatments. Pullova does not guarantee specific
          aesthetic outcomes. Any concerns should be addressed with your service
          provider and, where applicable, platform support.
        </p>
      </Section>

      <Section id="client-responsibilities" number="7." title="Client responsibilities">
        <p>
          Clients must provide a safe, appropriate environment for services (where
          performed at the client location) and must treat providers respectfully.
          Abusive, harassing, or unsafe conduct may result in account suspension
          or removal from the platform.
        </p>
      </Section>

      <Section id="provider-status" number="8." title="Independent providers">
        <Subheading>Relationship to Pullova</Subheading>
        <p>
          Service providers operate as independent businesses or contractors—not
          as employees of Pullova—unless a separate written agreement expressly
          states otherwise for a specific program or jurisdiction.
        </p>
        <Subheading>Off-platform activity</Subheading>
        <p>
          Circumventing the platform to solicit or complete bookings outside of
          Pullova, where prohibited by platform policy, may result in enforcement
          action, including suspension. See also the Beautician FAQ on the website
          for operational expectations.
        </p>
      </Section>

      <Section id="payments-cancellations" number="9." title="Payments & cancellations">
        <p>
          Fees, taxes, travel charges, tips, and cancellation or no-show policies
          are presented in the app or checkout flow where applicable. By
          confirming a booking, you agree to pay amounts shown for that booking,
          subject to the rules disclosed at the time of purchase and regional
          consumer laws.
        </p>
        <p>
          Frequent cancellations or policy violations by clients or providers may
          affect ratings, fees, or account standing, as described in platform
          policies.
        </p>
      </Section>

      <Section id="limitation-liability" number="10." title="Limitation of liability">
        <p>
          To the fullest extent permitted by applicable law, Pullova is not liable
          for indirect, incidental, special, consequential, or punitive damages
          arising from your use of the platform.
        </p>
        <p>
          Pullova is not responsible for the acts or omissions of independent
          beauticians, nor for personal injury or property damage arising from
          services, except where liability cannot be excluded under mandatory
          consumer protection laws in your jurisdiction.
        </p>
      </Section>

      <Section id="governing-law" number="11." title="Governing law">
        <p>
          These terms are governed by the laws of the jurisdiction where services
          are provided or as otherwise required by mandatory local law, without
          regard to conflict-of-law rules that would produce a different result.
        </p>
      </Section>

      <Section id="changes" number="12." title="Changes to these terms">
        <p>
          We may update these Terms & Conditions to reflect changes to the platform,
          legal requirements, or business practices. We will post the revised
          terms and update the “Last updated” date. Continued use after changes
          take effect may constitute acceptance, where permitted by law. If you
          do not agree to the updated terms, you should stop using the platform.
        </p>
      </Section>

      <Section id="contact" number="13." title="Contact">
        <p>
          Questions about these terms:{" "}
          <a
            href="mailto:info@pullovabeauty.com"
            className="text-pink-600 font-semibold hover:text-pink-700 underline-offset-2 hover:underline"
          >
            info@pullovabeauty.com
          </a>
        </p>
        <p className="text-sm text-gray-600">
          Pullova Technologies Inc. — formal legal notices may also be directed to
          your regional support channel as shown in the app or website footer.
        </p>
      </Section>
    </LegalDocumentLayout>
  );
};

export default TermsConditions;
