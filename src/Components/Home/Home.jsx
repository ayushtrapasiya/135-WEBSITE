import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Home.css";
import video1 from "/src/assets/Video/second-slide-video.mp4";
import video2 from "/src/assets/Video/firstvideo.mp4";
import video3 from "/src/assets/Video/third-slide-video2.mp4";
import AboutUs from "../AboutUS/AboutUs";
import ThirdSeaction from "../ThirdSeaction/ThirdSeaction";
// import OurMenu from "../OurMenu/OurMenu";
import WhyChoose from "../WhyChoose/WhyChoose";
import ChefSection from "../ChefSection/ChefSection ";
import CoverArea from "../CoverArea/CoverArea";
import TestimonialsCarousel from "../TestimonialsCarousel/TestimonialsCarousel";
import Locations from "../Location/Location";
import axios from 'axios';
import { Link } from "react-router-dom";

const slides = [
  {
    video: video1,
    heading: "Welcome To 135 Degrees",
    subheading: "Where Freshness Meets Professionalism!",
    text: "At 135 Degrees, We Specialize In Delivering Fresh Salads, Juices, And Shakes To Offices – Crafted For Health, Delivered With Speed, And Served With Hygiene.boost Your Team's Energy And Wellness With Our Professional, On-time Delivery Of Nutritious Choices.from Boardrooms To Breakrooms, We Bring Healthy Indulgence Right To Your Workplace.",
  },
  {
    video: video2,
    heading: "Experience the Best Quality",
    subheading: "Healthy & Delicious Choices",
    text: "Refresh Your Day With 135 Degrees – Delivering Fresh Salads, Juices, And Shakes Straight To Your Office With A Promise Of Hygiene And Health.choose From A Variety Of Nutritious Options Crafted To Fuel Your Workday – Tasty, Energizing, And Always On Time.experience Instant Delivery Of Wholesome Meals Designed For Corporate Wellness And Convenience.",
  },
  {
    video: video3,
    heading: "Experience the Best Quality",
    subheading: "Your Daily Dose of Freshness Starts Here",
    text: "From Crisp Salads To Refreshing Juices And Creamy Shakes, 135 Degrees Brings You Wholesome, Hygienic Options Prepared With Care. We Make Healthy Living Simple, Delicious, And Just A Click Away.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [saladData, setSaladData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="carousel-container animate__animated animate__fadeInDown p-5">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <video autoPlay muted loop className="background-video">
              <source src={slide.video} type="video/mp4" />
            </video>

            {/* Black Overlay for the Video */}
            <div className="video-overlay"></div>
            <div className="content">
              <h4 className="text-light">{slide.heading}</h4>
              <h2 className="fw-bold text-light">{slide.subheading}</h2>
              <p>{slide.text}</p>
              <Link
                to="/OurMenu"
                className="explore-menu-btn"
              >
                EXPLORE MENU
              </Link>
            </div>
          </div>
        ))}

        <div className="indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active-dot" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <section id="home"> </section>
      <AboutUs id="home" />
      <ThirdSeaction id="third-section" />
      <WhyChoose />
      <ChefSection />
      <CoverArea />
      <TestimonialsCarousel />
      {/* <section id="contact">
        <ContactForm />
      </section> */}
      <Locations />
    </>
  );
}