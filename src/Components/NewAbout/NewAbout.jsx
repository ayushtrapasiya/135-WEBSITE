import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewAbout.css'
import about from '/src/assets/Images/about-third-img.png'
import { Link } from 'react-router-dom';
export default function NewAbout() {
  return (
    <>
    <div className="">
      <div className="w-100 " style={{ backgroundColor: '#fef7ed' , paddingTop:"70px" }}>
        <div className="text-center p-4" style={{ backgroundColor: '#F8E9DC' }}>
          <h2 className="fw-bold text-primary-emphasis fs-3 fs-md-2 fs-lg-1">
            More Than A Shop,<br />
            135 Degrees Is A Lifestyle
          </h2>
        </div>
        <div className="pt-4 px-3 text-center mx-auto col-11 col-md-9 col-lg-7">
          <p className="text-primary-emphasis text-break fs-6 fs-md-5">
            At 135 Degrees, We Believe That Eating Healthy Should Be Easy, Delicious, And Hassle-Free.
            Our Journey Began With A Simple Vision—To Provide Fresh, Hygienic, And Professionally Crafted Food
            That Fits Seamlessly Into Your Busy Lifestyle. We Specialize In Nutritious Salads, Refreshing Juices,
            And Wholesome Shakes, All Made With High-Quality Ingredients And Strict Hygiene Standards.
          </p>
          <p className="text-primary-emphasis text-break fs-6 fs-md-5">
            What Sets Us Apart Is Our Commitment To Health, Convenience, And Professionalism. Unlike Traditional Options,
            We Ensure That Every Meal Is Prepared In A Sanitized Environment, Maintaining The Perfect Balance Of Taste
            And Nutrition. Whether You’re At Work, Home, Or On The Go, Our Goal Is To Offer A Refreshing,
            Guilt-Free Experience That Keeps You Energized Throughout The Day.
          </p>
        </div>
         <div className="grid-container">
      <div className="grid-item image1"></div>
      <div className="grid-item text1">
        <h2 className='fw-bold'>Give Your Health<br />A Kickstart!</h2>
        <p>
          From crisp salads to refreshing juices and creamy shakes, 135 Degrees brings you
          wholesome, hygienic options prepared with care. We make healthy living simple,
          delicious, and just a click away.
        </p>
      </div>

      <div className="grid-item text2">
        <h2 className='fw-bold'>In 30 days,<br />You'll be amazed!</h2>
        <p>
          In just 30 days, experience the transformation! Enjoy daily doses of fresh,
          hygienic salads, juices, and shakes that fuel your body and mind.
        </p>
      </div>

      <div className="grid-item image2"></div>
    </div>
     <div className=" py-5 ">
      <div className="text-center mb-4">
        <h2 className="fw-bold " style={{color:"#291F51"}}>
          Your One-Stop Healthy Store in Ahmedabad
        </h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12 text-center">
          <p className="fs-5 text-start p-2" style={{color:"#291F51"}}>
            135 Degrees isn't just another food outlet—it's your partner in wellness. We offer a wide range of
            wholesome food options, from protein-packed salads to immunity-boosting juices and refreshing smoothies.
            All our items are made-to-order with no preservatives or artificial flavors, ensuring every bite is as
            fresh as it is nutritious. Our kitchen maintains top-notch hygiene standards, and we deliver across
            Ahmedabad with care and speed.
          </p>
          <p className="fs-5 text-start p-2" style={{color:"#291F51"}}>
            Our subscription plans are designed for working professionals, fitness lovers, and anyone who wants to
            stay consistent with their diet. Choose from daily, weekly, or customized meal plans that include your
            choice of salads, shakes, and juices—delivered straight to your home or office. With 135 Degrees, clean
            eating becomes effortless and enjoyable.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <img
            src={about}
            alt="Juice Jars"
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
    </div>
      </div>
      <div className="about-last-container ">
    <h1 className='fw-bold text-center  pt-5' style={{color:"#291F51"}}>Want to Know More?</h1>
    <p className='text-center col-7 m-auto' style={{color:"#291F51"}}>Curious about our menu, subscription plans, or how we ensure freshness in every bite? We’d love to hear from you! </p>
    <Link to={"/ContactForm"}>
    <button className='about-content-btn '>Contact Now </button>
    </Link>
      </div>
    </div>
    </>
  );
}
