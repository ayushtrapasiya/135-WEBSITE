 import React, { useState } from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import { IoCall, IoLocation } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

 const onSubmit = async (data) => {
  try {
    setLoading(true); // optional loading state
    const response = await axios.post(
      "https://node-517461825507.asia-south1.run.app/send-mail",
      data
    );

    console.log("Server response:", response.data);
    alert("Message sent successfully!");
    reset();
  } catch (error) {
    console.error("Error:", error);
    alert("There was an error sending the message.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="contact-container pt-5">
      <h2 className="text-center mb-4 fw-bold mt-5" style={{ color: "#291F51" }}>
        Contact Us
      </h2>

      {/* Map Section */}
      <div className="map-container-full mb-4">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3056652528257!2d72.52032377394345!3d23.01254651670479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85002740738d%3A0x3c2334246ba63b5e!2s135%20Degrees!5e0!3m2!1sen!2sin!4v1747210822406!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Two Boxes */}
      <div className="two-box-wrapper">
    <div className="box-style text-center">
  <h3 className="fw-bold mt-3">Contact Us</h3>
  <p>Start Your Journey With 135 Degrees Today.</p>

  <div className=" contact-info col-11 mx-auto">
    <div className="info-box p-4 rounded">
      <div className="contact-item d-flex align-items-start mb-4">
        <div className="icon-wrapper me-3">
          <IoLocation className="icon" />
        </div>
        <div className="contact-texts">
          D/45, Titanium City Center, 100 Feet Road, <br />
          Satellite, Ahmedabad - 380 015
        </div>
      </div>

      <div className="contact-item d-flex align-items-center mb-4">
        <div className="icon-wrapper me-3">
          <IoCall className="icon" />
        </div>
        <a
          href="tel:+917863870341"
          className="contact-texts text-decoration-none"
        >
          +91 78668 70341
        </a>
      </div>

      <div className="contact-item d-flex align-items-center mb-4">
        <div className="icon-wrapper me-3">
          <TbWorld className="icon" />
        </div>
        <a
          href="https://www.135degrees.in"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-texts text-decoration-none"
        >
          www.135degrees.in
        </a>
      </div>

      <div className="contact-item d-flex align-items-center mb-2">
        <div className="icon-wrapper me-3">
          <MdEmail className="icon" />
        </div>
        <a
          href="mailto:care@135degrees.in"
          className="contact-texts text-decoration-none"
        >
          care@135degrees.in
        </a>
      </div>
    </div>
  </div>
</div>

        <div className="box-style">
          <h3 className="fw-bold text-center mt-3">Areas We Cover</h3>
          <p>
            Our fast and reliable delivery service ensures you get healthy,
            high-quality meals right at your doorstep.
          </p>
          <div className="locations">
            <div>
              <p><FaLocationDot /> Satellite</p>
              <p><FaLocationDot /> SindhuBhavan</p>
              <p><FaLocationDot /> Paldi</p>
              <p><FaLocationDot /> Thaltej</p>
              <p><FaLocationDot /> Ashram Road</p>
              <p><FaLocationDot /> C.G Road</p>
              <p><FaLocationDot /> Vejalpur</p>
            </div>
            <div>
              <p><FaLocationDot /> Jivraj Park</p>
              <p><FaLocationDot /> Shela</p>
              <p><FaLocationDot /> Makarba</p>
              <p><FaLocationDot /> Navrangpura</p>
              <p><FaLocationDot /> Highcourt</p>
              <p><FaLocationDot /> Vasna</p>
              <p><FaLocationDot /> Vastrapur</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form mt-5">
        <div className="form-row two-cols col-11 m-auto">
          <div className="form-group">
            <label>Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
            />
            {errors.name && <p className="error-msg">{errors.name.message}</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              placeholder="Your Email Address"
            />
            {errors.email && <p className="error-msg">{errors.email.message}</p>}
          </div>
        </div>

        <div className="form-group col-11 m-auto">
          <label>Mobile</label>
          <input
            type="tel"
            {...register("mobile", {
              required: "Mobile number is required",
              minLength: {
                value: 10,
                message: "Mobile number must be 10 digits",
              },
            })}
            placeholder="Your Mobile Number"
          />
          {errors.mobile && <p className="error-msg">{errors.mobile.message}</p>}
        </div>

        <div className="form-group col-11 m-auto">
          <label>Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            rows="4"
          ></textarea>
          {errors.message && <p className="error-msg">{errors.message.message}</p>}
        </div>
          <br />
        <div className="col-11 m-auto">
        <button type="submit" className="submit-btn mb-3" disabled={loading}>
  {loading ? "Sending..." : "Send Message"}
</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
