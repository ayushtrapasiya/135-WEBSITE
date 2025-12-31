import React from 'react';
import './ChefSection.css';
import dishImage from '/src/assets/Images/newseaction.png'; 
import { Link } from 'react-router-dom';

const ChefSection  = () => {
  return (
    <div className="hero-container">
      <div className='child-hero-seaction'>
      <div className="hero-content">
        <h1>
          <span>Restore Your</span><br />
          <span>Vitality In</span><br />
          <span>30 Days</span>
        </h1>
        <Link to={'/ContactForm'}>
        <button className="contact-btn">Contact Now</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src={dishImage} alt="Food Dish" className='img-fluid' />
      </div>
      </div>
    </div>
  );
};

export default ChefSection;
