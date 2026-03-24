import LegalDocumentLayout, {
  Section,
  Subheading,
  BulletList,
} from "@/components/legal/LegalDocumentLayout";

const PrivacyPolicy = () => {
  const toc = [
    { id: "information-we-collect", label: "Information we collect" },
    { id: "otp-authentication", label: "OTP authentication" },
    { id: "cookies", label: "Cookies" },
    { id: "ai-matching", label: "AI service matching" },
    { id: "how-we-share", label: "How we share information" },
    { id: "your-rights", label: "Your privacy rights" },
    { id: "security-retention", label: "Security & retention" },
    { id: "international-transfers", label: "International transfers" },
    { id: "children", label: "Children’s privacy" },
    { id: "changes", label: "Changes to this policy" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <LegalDocumentLayout
      title="Pullova Home Beauty Privacy Policy"
      description="How Pullova Technologies Inc. collects, uses, stores, and protects personal information when you use the Pullova Home Beauty platform."
      meta={[
        { label: "Effective date", value: "March 15, 2026" },
        { label: "Last updated", value: "March 15, 2026" },
      ]}
      toc={toc}
      relatedLinks={[
        { to: "/terms", label: "Terms & Conditions" },
        { to: "/faq", label: "FAQ" },
      ]}
    >
      <p className="text-base text-gray-600 -mt-2">
        This Privacy Policy explains how Pullova Technologies Inc. (“Pullova,” “we,”
        “us,” or “our”) handles personal information when individuals use the
        Pullova Home Beauty platform, including our website and mobile
        applications.
      </p>

      <Section id="information-we-collect" number="1." title="Information we collect">
        <Subheading>Client account information</Subheading>
        <BulletList
          items={[
            "Full name",
            "Email address",
            "Phone number",
            "Profile photo",
            "Login credentials",
          ]}
        />

        <Subheading>Service booking information</Subheading>
        <BulletList
          items={[
            "Service requested",
            "Appointment date and location",
            "Beautician selected",
            "Service history",
            "Ratings and feedback",
          ]}
        />

        <Subheading>Service providers (beauticians)</Subheading>
        <p>
          If you register as a beautician or independent professional, we may
          collect onboarding information you provide (such as professional
          credentials, portfolio materials, availability, and verification
          documents) as permitted by law and as needed to operate the platform.
        </p>

        <Subheading>Payment information</Subheading>
        <p>
          Payments are processed by secure third-party payment providers.
          Pullova does not store full payment card numbers.
        </p>

        <Subheading>Device and usage information</Subheading>
        <p>
          We may collect limited technical information (such as device type, app
          version, and general log data) to secure accounts, debug issues, and
          improve reliability—consistent with this policy and applicable law.
        </p>
      </Section>

      <Section id="otp-authentication" number="2." title="OTP authentication">
        <p>
          Pullova uses one-time password (OTP) authentication for account login,
          registration, booking confirmation, and fraud prevention.
        </p>
        <p>
          By providing your phone number, you consent to receive verification
          messages from Pullova and its messaging providers as needed to operate
          the service.
        </p>
      </Section>

      <Section id="cookies" number="3." title="Cookies">
        <p>
          Pullova uses cookies and similar technologies to maintain login
          sessions, analyze website usage, improve functionality, and help detect
          suspicious activity. You can control cookies through your browser
          settings where supported.
        </p>
      </Section>

      <Section id="ai-matching" number="4." title="AI service matching">
        <p>
          Pullova may use automated systems to match clients with beauticians based
          on factors such as location, service type, availability, and ratings.
          These systems are designed to support convenience and quality; they do
          not replace your choices or override applicable consumer rights.
        </p>
      </Section>

      <Section id="how-we-share" number="5." title="How we share information">
        <p>
          Pullova may share information with beauticians (to fulfill bookings),
          payment processors, messaging providers, cloud infrastructure vendors, and
          professional advisors or authorities where required by law or necessary
          to protect users and the platform.
        </p>
        <p>
          <strong>Pullova does not sell personal information.</strong>
        </p>
      </Section>

      <Section id="your-rights" number="6." title="Your privacy rights">
        <p>
          Depending on your region, you may have rights to access, correct, delete,
          or restrict certain processing of your personal data, or to object to
          certain uses. You may also have the right to lodge a complaint with a
          supervisory authority.
        </p>
        <p>
          To exercise rights or ask questions, contact us using the details in the
          Contact section. We may need to verify your request before responding.
        </p>
      </Section>

      <Section id="security-retention" number="7." title="Security & retention">
        <p>
          We implement reasonable technical and organizational safeguards designed
          to protect personal information. No method of transmission or storage is
          completely secure, and we cannot guarantee absolute security.
        </p>
        <p>
          We retain personal information only as long as necessary to provide the
          platform, meet legal obligations, resolve disputes, and enforce our
          agreements. Retention periods may vary by data category and region.
        </p>
      </Section>

      <Section id="international-transfers" number="8." title="International transfers">
        <p>
          Pullova may process and store information in countries other than where
          you live. Where required, we use appropriate safeguards consistent with
          applicable law (such as contractual protections) to govern cross-border
          transfers.
        </p>
      </Section>

      <Section id="children" number="9." title="Children’s privacy">
        <p>
          The platform is not directed to children under the age where parental
          consent is required for collection of personal information in your
          jurisdiction. We do not knowingly collect personal information from
          children in violation of applicable law. If you believe we have
          collected information from a child inappropriately, please contact us.
        </p>
      </Section>

      <Section id="changes" number="10." title="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. When we make
          material changes, we will post the updated policy and revise the “Last
          updated” date above. Where required by law, we will provide additional
          notice or obtain consent.
        </p>
      </Section>

      <Section id="contact" number="11." title="Contact">
        <p>
          Pullova Technologies Inc.
          <br />
          Privacy Office
          <br />
          Email:{" "}
          <a
            href="mailto:privacy@pullova.com"
            className="text-pink-600 font-semibold hover:text-pink-700 underline-offset-2 hover:underline"
          >
            privacy@pullova.com
          </a>
        </p>
      </Section>
    </LegalDocumentLayout>
  );
};

export default PrivacyPolicy;
