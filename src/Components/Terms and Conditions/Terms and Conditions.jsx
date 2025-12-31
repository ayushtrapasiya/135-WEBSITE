import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-conditions-container pt-5">
      <h1 className="terms-conditions-title mt-5">Terms and Conditions</h1>
      <p className="terms-conditions-effective-date"><strong>Effective Date:</strong> 31/12/2024</p>
      <p className="terms-conditions-intro">
        Welcome to 135 Degrees ("we," "our," or "us"). By downloading, accessing, or using
        our mobile application ("App") and services, you agree to abide by these Terms and Conditions.
        Please read them carefully. If you do not agree, you may not use our App or services.
      </p>
      
      <h2 className="terms-conditions-section-title">1. Acceptance of Terms</h2>
      <p className="terms-conditions-content">
        By accessing or using the App, you confirm that you are at least 18 years old or have the
        consent of a parent or guardian. Your continued use constitutes your acceptance of these Terms.
      </p>
      
      <h2 className="terms-conditions-section-title">2. Use of the App</h2>
      <h3 className="terms-conditions-subsection-title">A. Eligibility</h3>
      <ul className="terms-conditions-list">
        <li className="terms-conditions-list-item">Be at least 18 years old or meet the minimum age requirements in your jurisdiction.</li>
        <li className="terms-conditions-list-item">Provide accurate and complete registration details.</li>
        <li className="terms-conditions-list-item">Use the App in compliance with all applicable laws and regulations.</li>
      </ul>
      
      <h3 className="terms-conditions-subsection-title">B. Account Responsibility</h3>
      <ul className="terms-conditions-list">
        <li className="terms-conditions-list-item">You are responsible for maintaining the confidentiality of your account credentials.</li>
        <li className="terms-conditions-list-item">You agree to notify us immediately of any unauthorized use of your account.</li>
      </ul>
      
      <h3 className="terms-conditions-subsection-title">C. Prohibited Activities</h3>
      <ul className="terms-conditions-list">
        <li className="terms-conditions-list-item">Use the App for illegal purposes.</li>
        <li className="terms-conditions-list-item">Disrupt the App's functionality or servers.</li>
        <li className="terms-conditions-list-item">Access or attempt to access other users' accounts.</li>
      </ul>
      
      <h2 className="terms-conditions-section-title">3. Orders and Payments</h2>
      <h3 className="terms-conditions-subsection-title">A. Placing Orders</h3>
      <ul className="terms-conditions-list">
        <li className="terms-conditions-list-item">Orders can be placed via the App by registered users.</li>
        <li className="terms-conditions-list-item">You are responsible for ensuring the accuracy of all order details.</li>
      </ul>
      
      <h3 className="terms-conditions-subsection-title">B. Payment</h3>
      <ul className="terms-conditions-list">
        <li className="terms-conditions-list-item">Payments must be made through the methods provided in the App.</li>
        <li className="terms-conditions-list-item">Prices are listed in local currency and may include applicable taxes.</li>
      </ul>
      
      <h3 className="terms-conditions-subsection-title">C. Order Cancellation and Refunds</h3>
      <ul className="terms-conditions-list">
        <li className="terms-conditions-list-item">Orders can be canceled only within the timeframe specified in the App.</li>
        <li className="terms-conditions-list-item">Refunds will be issued as per our cancellation and refund policy.</li>
      </ul>
      
      <h2 className="terms-conditions-section-title">4. Delivery of Services</h2>
      <h3 className="terms-conditions-subsection-title">A. Delivery Scope</h3>
      <ul className="terms-conditions-list">
        <li className="terms-conditions-list-item">We deliver food, beverages, and related products to eligible locations as defined in the App.</li>
        <li className="terms-conditions-list-item">Delivery times are estimates and may vary due to unforeseen circumstances.</li>
      </ul>
      
      <h3 className="terms-conditions-subsection-title">B. Customer Responsibilities</h3>
      <ul className="terms-conditions-list">
        <li className="terms-conditions-list-item">Ensure accurate delivery address and contact details.</li>
        <li className="terms-conditions-list-item">Be available to receive the order at the designated location.</li>
      </ul>
      
      <h2 className="terms-conditions-section-title">5. Intellectual Property</h2>
      <p className="terms-conditions-content">
        All content, logos, trademarks, and materials in the App are the exclusive property of 135 Degrees or its licensors.
        Unauthorized use is strictly prohibited.
      </p>
      
      <h2 className="terms-conditions-section-title">6. Limitation of Liability</h2>
      <p className="terms-conditions-content">
        To the fullest extent permitted by law, 135 Degrees shall not be liable for indirect, incidental, or
        consequential damages arising from the use of the App.
      </p>
      
      <h2 className="terms-conditions-section-title">7. Privacy</h2>
      <p className="terms-conditions-content">
        Your use of the App is governed by our Privacy Policy, which details how we collect, use, and protect your personal information.
      </p>
      
      <h2 className="terms-conditions-section-title">8. Contact Us</h2>
      <p className="terms-conditions-content">
        If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
      </p>
      <p className="terms-conditions-contact-details"><strong>Email:</strong> care@135degrees.in</p>
      <p className="terms-conditions-contact-details"><strong>Phone:</strong> +91 78668 70341</p>
      <p className="terms-conditions-contact-details"><strong>Address:</strong> E/807, Titanium City Center, Satellite, Ahmedabad - 380015.</p>
    </div>
  );
};

export default TermsAndConditions;
