import "./Contact.css";

// start backed import
import axios from "axios";
import { useState } from "react";
import { useNavigate }
  from "react-router-dom";

// end backed import

export default function Contact() {


  // function part
  const navigate = useNavigate();
  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };
  const handleSubmit =
    async (e) => {
      e.preventDefault();
      try {
        // await axios.post(
        //   "http://localhost:5000/api/contact",
        //   // "http://192.168.1.7:5000/api/contact",

        //   formData
        // );


        
        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/contact`,
          formData
        );


        alert(
          "Message Sent Successfully"
        );
        navigate("/");
      } catch (error) {
        console.log(error);
        alert(
          "Something went wrong"
        );
      }
    };


  return (
    <section className="contact-page">

      {/* HERO SECTION */}

      <div className="contact-hero">

        <div className="contact-overlay"></div>

        <div className="contact-hero-content">
          <h1>Contact Us</h1>

          <p>
            We are always ready to help you with printing,
            designing, and digital services.
          </p>
        </div>

      </div>

      {/* CONTACT CONTAINER */}

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info-box">
            <span><i className="fa-solid fa-address-card"></i></span>

            <div>
              <h4>Address</h4>
              <p>Kacheri-Bazar, Bhadrak, Odisha</p>
            </div>
          </div>

          <div className="info-box">
            <span><i className="fa-solid fa-square-phone"></i></span>

            <div>
              <h4>Phone</h4>
              <p>+91 7682041399</p>
            </div>
          </div>

          <div className="info-box">
            <span><i className="fa-solid fa-envelope"></i></span>

            <div>
              <h4>Email</h4>
              <p>maasantosicomputer@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <span><i className="fa-solid fa-business-time"></i></span>

            <div>
              <h4>Working Hours</h4>
              <p> All Day: 7 AM - 9 PM</p>
            </div>
          </div>

          {/* MAP */}

          <div className="map-box">

            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.3733768187985!2d86.4993641!3d21.0577445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bf7cbd03dae7f%3A0xea378201c4ace244!2sMaa%20Santoshi%20computer%20design!5e0!3m2!1sen!2sin!4v1779112914321!5m2!1sen!2sin"

              loading="lazy"
            ></iframe>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-form">

          <h2>Send Us A Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">
              Send Message
            </button>
          </form>



        </div>

      </div>

    </section>
  )
}
