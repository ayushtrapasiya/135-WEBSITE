import React from "react";
import "./CancellationPolicy.css";

const CancellationPolicy = () => {
  return (
    <div className="cancellation-policy-container pt-5">
      <h1 className="cancellation-policy-title mt-5">Cancellation Policy</h1>
      <p className="cancellation-policy-effective-date">
        <strong>Effective Date:</strong> 31/12/2024
      </p>
      <p className="cancellation-policy-intro">
        At 135 Degrees, we prioritize providing prompt and efficient service to our customers. To
        maintain our commitment to quality and timely delivery, we have implemented the following
        cancellation policy.
      </p>

      <h2 className="cancellation-policy-section-title">1. General Cancellation Policy</h2>
      <ul className="cancellation-policy-list">
        <li>Orders placed through our application are considered final once confirmed.</li>
        <li>
          We do not provide refunds for any cancellations, regardless of the circumstances.
        </li>
        <li>
          We encourage customers to review their order details, including delivery address and item
          selection, carefully before confirming their purchase.
        </li>
      </ul>

      <h2 className="cancellation-policy-section-title">2. Modification of Orders</h2>
      <ul className="cancellation-policy-list">
        <li>
          If you need to modify your order, please contact us immediately via the App or customer
          support.
        </li>
        <li>
          While we will do our best to accommodate changes, we cannot guarantee modifications after
          the order is processed.
        </li>
      </ul>

      <h2 className="cancellation-policy-section-title">3. Exceptional Cases</h2>
      <ul className="cancellation-policy-list">
        <li>
          Customers may reach out to our support team to discuss their concerns.
        </li>
        <li>
          Resolutions, if any, will be at the sole discretion of 135 Degrees and may include order
          replacement or other appropriate measures.
        </li>
      </ul>

      <h2 className="cancellation-policy-section-title">4. Responsibility of the Customer</h2>
      <ul className="cancellation-policy-list">
        <li>
          It is the customer’s responsibility to ensure the accuracy of their order, including item
          selection, special instructions, and delivery information.
        </li>
        <li>
          Orders that fail due to incorrect information provided by the customer will not qualify for
          refunds or cancellations.
        </li>
      </ul>

      <h2 className="cancellation-policy-section-title">5. Force Majeure</h2>
      <ul className="cancellation-policy-list">
        <li>
          In the event of unforeseen circumstances (e.g., natural disasters, emergencies, or technical
          failures), we reserve the right to cancel orders without liability.
        </li>
        <li>
          No refunds will be issued in such cases, but we will strive to provide alternative solutions
          where possible.
        </li>
      </ul>

      <h2 className="cancellation-policy-section-title">6. Contact Us</h2>
      <p className="cancellation-policy-contact">
        If you have any questions or concerns about our cancellation policy, please contact us:
      </p>
      <p className="cancellation-policy-contact-details">
        <strong>Email:</strong> care@135degrees.in
      </p>
      <p className="cancellation-policy-contact-details">
        <strong>Phone:</strong> +91 78668 70341
      </p>
      <p className="cancellation-policy-contact-details">
        <strong>Address:</strong> E/807, Titanium City Center, Satellite, Ahmedabad - 380015.
      </p>

      <p className="cancellation-policy-acknowledgement">
        By using our services, you acknowledge and agree to the terms outlined in this Cancellation Policy.
      </p>
    </div>
  );
};

export default CancellationPolicy;
