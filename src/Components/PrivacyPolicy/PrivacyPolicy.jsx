import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container pt-5">
      <h1 className="privacy-policy-title mt-5">Privacy Policy</h1>
      <p className="privacy-policy-effective-date"><strong>Effective Date:</strong> 31/12/2024</p>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">1. Information We Collect</h2>
        <div className="privacy-policy-section-content">
          <h3 className="privacy-policy-subsection-title">a. Personal Information</h3>
          <ul className="privacy-policy-list">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Delivery address</li>
            <li>Payment details (e.g., UPI ID, Net Banking, credit/debit card information)</li>
            <li>Profile photo (if uploaded)</li>
            <li>Account login credentials</li>
          </ul>

          <h3 className="privacy-policy-subsection-title">b. Non-Personal Information</h3>
          <ul className="privacy-policy-list">
            <li>Device information (e.g., device type, operating system, and app version)</li>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Usage data (e.g., features used, time spent on the App)</li>
            <li>App performance metrics</li>
          </ul>

          <h3 className="privacy-policy-subsection-title">c. Location Information</h3>
          <p className="privacy-policy-content">If you grant permission, we may collect and use your location data to provide location-based services.</p>

          <h3 className="privacy-policy-subsection-title">d. Cookies and Tracking Technologies</h3>
          <p className="privacy-policy-content">We may use cookies, beacons, tags, and similar technologies to track your activities in the App.</p>
        </div>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">2. How We Use Your Information</h2>
        <div className="privacy-policy-section-content">
          <h3 className="privacy-policy-subsection-title">a. To Provide Services</h3>
          <ul className="privacy-policy-list">
            <li>Process your orders and payments</li>
            <li>Deliver food and beverages to your location</li>
            <li>Manage your account and preferences</li>
          </ul>

          <h3 className="privacy-policy-subsection-title">b. To Improve Our Services</h3>
          <ul className="privacy-policy-list">
            <li>Understand how users interact with the App</li>
            <li>Enhance functionality and user experience</li>
            <li>Diagnose technical issues and develop new features</li>
          </ul>

          <h3 className="privacy-policy-subsection-title">c. To Communicate With You</h3>
          <ul className="privacy-policy-list">
            <li>Send order updates and delivery notifications</li>
            <li>Respond to customer inquiries and feedback</li>
            <li>Provide promotional offers, discounts, and marketing communications</li>
          </ul>

          <h3 className="privacy-policy-subsection-title">d. To Ensure Legal Compliance</h3>
          <ul className="privacy-policy-list">
            <li>Comply with applicable laws and regulations</li>
            <li>Enforce our Terms of Service</li>
            <li>Prevent fraudulent transactions and unauthorized access</li>
          </ul>
        </div>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">3. How We Share Your Information</h2>
        <div className="privacy-policy-section-content">
          <h3 className="privacy-policy-subsection-title">a. Service Providers</h3>
          <p className="privacy-policy-content">We may share your information with third-party vendors and partners who perform services on our behalf.</p>

          <h3 className="privacy-policy-subsection-title">b. Legal Compliance and Protection</h3>
          <p className="privacy-policy-content">We may disclose your information if required by law.</p>

          <h3 className="privacy-policy-subsection-title">c. Business Transfers</h3>
          <p className="privacy-policy-content">In the event of a merger or acquisition, your information may be transferred as part of the transaction.</p>
        </div>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">4. Data Retention</h2>
        <p className="privacy-policy-content">We retain your information as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">5. Your Privacy Rights</h2>
        <div className="privacy-policy-section-content">
          <h3 className="privacy-policy-subsection-title">a. Access and Updates</h3>
          <p className="privacy-policy-content">You can access and update your personal information via your account settings.</p>

          <h3 className="privacy-policy-subsection-title">b. Opt-Out of Communications</h3>
          <p className="privacy-policy-content">You can unsubscribe from promotional emails or adjust your notification preferences.</p>

          <h3 className="privacy-policy-subsection-title">c. Withdraw Consent</h3>
          <p className="privacy-policy-content">You can disable location tracking or revoke permissions.</p>

          <h3 className="privacy-policy-subsection-title">d. Delete Your Account</h3>
          <p className="privacy-policy-content">Contact us to request deletion of your account.</p>
        </div>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">6. Security of Your Information</h2>
        <p className="privacy-policy-content">We implement industry-standard security measures to protect your information.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">7. Third-Party Links</h2>
        <p className="privacy-policy-content">Our App may contain links to third-party websites, for which we are not responsible.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">8. Children's Privacy</h2>
        <p className="privacy-policy-content">Our App is not intended for children under 13 years of age.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">9. International Data Transfers</h2>
        <p className="privacy-policy-content">Your data may be transferred and processed in India or other countries.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">10. Changes to This Privacy Policy</h2>
        <p className="privacy-policy-content">We may update this Privacy Policy and notify you through the App.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">11. Additional Details on Data Security</h2>
        <p className="privacy-policy-content">We implement additional measures to safeguard your data, including encrypted servers and secure storage.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">12. Compliance with Data Regulations</h2>
        <p className="privacy-policy-content">We comply with major data protection regulations such as GDPR and CCPA.</p>
      </section>
      
      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">13. Contact Us</h2>
        <p className="privacy-policy-content">If you have any questions, contact us at:</p>
        <p className="privacy-policy-contact-details"><strong>Email:</strong> care@135degrees.in</p>
        <p className="privacy-policy-contact-details"><strong>Phone:</strong> +91 78668 70341</p>
        <p className="privacy-policy-contact-details"><strong>Address:</strong> E/807, Titanium City Center, Satellite, Ahmedabad - 380015</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;