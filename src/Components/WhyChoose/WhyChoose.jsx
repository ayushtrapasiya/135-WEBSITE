import React, { useEffect } from 'react';
import './WhyChoose.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const  WhyChoose = () => {
    useEffect(() => {
                Aos.init({
                  duration: 1000, // Animation duration
                });
              }, []);
  return (
    <div className="subscription-container">
      <h2 className="subscription-title mt-5">Join Our Subscription Model</h2>
      <p className="subscription-subtitle">Stay fit, focused, and energized throughout the day.</p>
      <div className="subscription-cards">
        <div className="card card-purple" data-aos="fade-right">
          <h4 className='fw-bolder'>Fully Customizable Plans</h4>
          <ul>
            <li>Create your own meal and beverage plan tailored to your team’s taste and schedule.</li>
            <li>Choose from a wide range of healthy options curated by expert chefs. Flexible subscription that grows with your office needs.</li>
            <li>Perfect for businesses seeking personalized food solutions.</li>
          </ul>
        </div>
        <div className="card card-green" data-aos="fade-up">
          <h4 className='fw-bolder'>Quick & Reliable Delivery</h4>
          <ul>
            <li>Enjoy hot meals and fresh beverages delivered on time, every time.</li>
            <li>Perfect for busy workdays and meetings without food worries.</li>
            <li>A hassle-free experience your team can rely on.</li>
          </ul>
        </div>
        <div className="card card-3" data-aos="fade-left">
          <h4 className='fw-bolder'>Nutritionist - Approved Meals</h4>
          <ul>
            <li>Every recipe is reviewed and approved by certified nutritionists.</li>
            <li>Balanced meals made with 100% fresh and organic ingredients.</li>
            <li>Ideal for health-conscious teams and corporate wellness.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default  WhyChoose;
