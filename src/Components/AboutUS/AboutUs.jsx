import React from 'react';
import './AboutUS.css';
import { FaLeaf, FaUtensils, FaUserTie, FaAppleAlt, FaCalendarAlt } from 'react-icons/fa';
import calendar from '/src/assets/Images/calendar.png'
import chef from '/src/assets/Images/chef.png'
import fresh from '/src/assets/Images/fresh.png'
import restaurant from '/src/assets/Images/restaurant.png'
import diet from '/src/assets/Images/diet.png'
// import 
const data = [
  { icon: fresh , label: '100% Fresh' },
  { icon:  restaurant, label: 'Hygiene' },
  { icon:  chef, label: 'Expert Chef' },
  { icon:  diet, label: 'Nutritionist-Approved Recipes' },
  { icon: calendar, label: 'Subscription Model' },
];

const AboutUs = () => {
  return (
    <section className="different-section">
      <h2>What Makes Us Different?</h2>
      <p className='col-9 m-auto mb-3 ' style={{fontSize:"15px", fontWeight:"600", color:"#291F51"}}>
      At 135 Degrees, We Offer A Thoughtfully Curated Menu Designed By Expert Chefs And Reviewed By Certified Nutritionists
        To Ensure Every Dish Is Both Delicious And Nutritionally Balanced. We Prioritize Hygiene And Quality By Using Only
        100% Fresh And Organic Ingredients. From Preparation To Delivery, Our Focus Is On Health, Taste, And Cleanliness—
        Making Us The Preferred Choice For Corporate Food And Beverage Needs.

      </p>
      <div className="icons-container">
        {data.map((item, index) => (
          <div className="icon-box" key={index}>
            <div className="icon-circle">
              <img src={item.icon} alt="" />
            </div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
