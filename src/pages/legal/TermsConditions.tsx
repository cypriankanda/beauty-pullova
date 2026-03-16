import React from "react";

const TermsConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">
        Pullova Home Beauty Terms & Conditions
      </h1>

      <p><strong>Company:</strong> Pullova Technologies Inc.</p>
      <p><strong>Service:</strong> Pullova Home Beauty Platform</p>
      <p><strong>Effective Date:</strong> March 15, 2026</p>

      <h2 className="text-xl font-semibold mt-8">1. Platform Services</h2>
      <p>
        Pullova provides a marketplace connecting clients with independent
        beauty professionals. Pullova does not perform beauty services.
      </p>

      <h2 className="text-xl font-semibold mt-8">2. Service Locations</h2>
      <p>
        Beauty services may be performed at the client location, partner salons,
        or professional beauty studios.
      </p>

      <h2 className="text-xl font-semibold mt-8">3. Appointment Bookings</h2>
      <p>Services may include:</p>

      <ul className="list-disc ml-6">
        <li>Hair styling</li>
        <li>Braiding</li>
        <li>Barbering</li>
        <li>Makeup</li>
        <li>Manicure and pedicure</li>
        <li>Skincare services</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8">4. OTP Authentication</h2>
      <p>
        Pullova uses OTP authentication for account registration, login,
        and booking confirmations.
      </p>

      <h2 className="text-xl font-semibold mt-8">5. Health and Safety</h2>
      <p>
        Clients must disclose allergies, skin sensitivities, and previous
        chemical treatments before services.
      </p>

      <h2 className="text-xl font-semibold mt-8">6. Service Outcome Disclaimer</h2>
      <p>
        Beauty results may vary depending on hair type, skin condition,
        and previous treatments.
      </p>

      <h2 className="text-xl font-semibold mt-8">7. Client Responsibilities</h2>
      <p>
        Clients must provide a safe working environment and treat beauticians
        respectfully.
      </p>

      <h2 className="text-xl font-semibold mt-8">8. Limitation of Liability</h2>
      <p>
        Pullova is not responsible for service outcomes or actions of
        independent beauticians.
      </p>

      <h2 className="text-xl font-semibold mt-8">9. Governing Law</h2>
      <p>
        These terms are governed by the laws of the jurisdiction where services
        are provided.
      </p>

    </div>
  );
};

export default TermsConditions;