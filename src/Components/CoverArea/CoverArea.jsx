import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./CoverArea.css";

const Testimonials = () => {
  const detail = [
    {
      name: "Chinmay Nayak",
      pera: "Healthy eating made easy by 135 Degrees! Their cold-pressed juices and nutrient-rich salads are perfect for busy office days. The best part? Everything comes clean, chilled, and ready to eat. Ideal for professionals who care about what they consume.",
      company: "CEO, CN Photography",
    },
    {
      name: "Anup Parekh",
      pera: "135 Degrees offers an amazing salad variety with fresh, flavorful options at unbeatable prices! 🥗 Generous portions, great quality, and perfect for healthy, tasty meals. Highly recommend for salad lovers! A must-visit spot! 👍 #BestSalads #GreatValue #HealthyEats",
      company: "CEO, NEXORA TECH",
    },
    {
      name: "Vikas Soni",
      pera: "Finally found a service that delivers fresh salads and detox juices right to our office! 135 Degrees is professional, always on time, and perfect for anyone looking to eat clean during work hours. Highly recommend for corporates in Ahmedabad.",
      company: "Owner, Abhusan Jewels",
    },
    {
      name: "Manager, LoansMitra",
      pera: "135 Degrees is a lifesaver for our office team! Their green salads are crunchy and refreshing, and the smoothies are full of flavor without added sugar. A great way to promote wellness at the workplace. Delivery is always on time too!",
      company: "Ashwin Parmar",
    },
    {
      name: "Ami Gamit ",
      pera: "We’ve been ordering from 135 Degrees for a month now, and it’s been fantastic! Their fruit salads and protein shakes are our team’s favorite. It’s healthy, tasty, and super convenient. Great job on maintaining hygiene and quality!",
      company: "Manager, AMTech Design",
    },
    {
      name: "Ayush Patel",
      pera: "We've been hooked on 135 Degrees for a month now! Their fruit salads are refreshing, the protein shakes are spot-on, and the quality is always top-notch. Healthy, hassle-free, and delicious — just what our team needed!",
      company: "Developer",
    },
  ];
  return (
    <div className="testimonials-wrapper ">
      <div className="inside-wrapper">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {detail.map((v, i) => (
            <TestimonialCard key={i} v={v}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
