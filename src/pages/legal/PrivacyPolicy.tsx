import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Pullova Home Beauty Privacy Policy</h1>

      <p><strong>Effective Date:</strong> March 15, 2026</p>
      <p><strong>Last Updated:</strong> March 15, 2026</p>

      <p className="mt-6">
        This Privacy Policy explains how Pullova Technologies Inc. (“Pullova”, “we”, “us”, or “our”)
        collects, uses, stores, and protects personal information when individuals use the
        Pullova Home Beauty platform.
      </p>

      <h2 className="text-xl font-semibold mt-8">1. Information We Collect</h2>

      <h3 className="font-semibold mt-4">Client Account Information</h3>
      <ul className="list-disc ml-6">
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Profile photo</li>
        <li>Login credentials</li>
      </ul>

      <h3 className="font-semibold mt-4">Service Booking Information</h3>
      <ul className="list-disc ml-6">
        <li>Service requested</li>
        <li>Appointment date and location</li>
        <li>Beautician selected</li>
        <li>Service history</li>
        <li>Ratings and feedback</li>
      </ul>

      <h3 className="font-semibold mt-4">Payment Information</h3>
      <p>
        Payments are processed by secure third-party payment providers.
        Pullova does not store full payment card numbers.
      </p>

      <h2 className="text-xl font-semibold mt-8">2. OTP Authentication</h2>
      <p>
        Pullova uses One-Time Password (OTP) authentication for account login,
        registration, booking confirmation, and fraud prevention.
      </p>

      <p>
        By providing your phone number you consent to receive verification
        messages from Pullova.
      </p>

      <h2 className="text-xl font-semibold mt-8">3. Cookies</h2>
      <p>
        Pullova uses cookies to maintain login sessions, analyze website usage,
        improve functionality, and detect suspicious activity.
      </p>

      <h2 className="text-xl font-semibold mt-8">4. AI Service Matching</h2>
      <p>
        Pullova may use automated systems to match clients with beauticians
        based on location, service type, availability, and ratings.
      </p>

      <h2 className="text-xl font-semibold mt-8">5. How We Share Information</h2>
      <p>
        Pullova may share information with beauticians, payment providers,
        messaging providers, and cloud infrastructure services.
      </p>

      <p className="mt-4">
        Pullova does not sell personal information.
      </p>

      <h2 className="text-xl font-semibold mt-8">6. User Privacy Rights</h2>
      <p>
        Users may request access, correction, or deletion of their personal data.
      </p>

      <p className="mt-4">
        Requests can be submitted to: <strong>privacy@pullova.com</strong>
      </p>

      <h2 className="text-xl font-semibold mt-8">7. Contact</h2>
      <p>
        Pullova Technologies Inc.<br />
        Privacy Office<br />
        Email: privacy@pullova.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;