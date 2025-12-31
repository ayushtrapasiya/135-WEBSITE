import React from 'react';
import './CoverArea.css';
import { FaStar } from 'react-icons/fa';
import iconimg from '/src/assets/Images/user.png'
const TestimonialCard = ({v}) => {
  return (
    <div className="testimonial-card  ">
      <div className='d-flex'>
        <div className="testimonial-avatar ">
          <img src={iconimg} alt="" />
        </div>
      <p className="testimonial-text" style={{color:"#291F51"}}>
       {v.pera}
      </p>
      </div>
      <div className="testimonial-profile">
        <div className="testimonial-info">
          <p className="name">{v.name},</p>
          <p className="title fw-bold"><em>{v.company}</em></p>
        </div>
      <div className="testimonial-stars">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color="#FFD700" />
        ))}
      </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
