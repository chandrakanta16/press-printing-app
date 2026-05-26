import "./Home.css";
import Services from "../Service/Services";
import React, { useState } from "react";
import img2 from "../../asset/booksimg/2.jpg";
import img3 from "../../asset/booksimg/3.jpg";
import img4 from "../../asset/booksimg/4.jpg";
import img5 from "../../asset/booksimg/5.jpg";
import img6 from "../../asset/booksimg/6.jpg";
import img7 from "../../asset/booksimg/7.jpg";



const services = [
  {
    id: 1,
    title: "DTP Design",
    desc: "Professional DTP design services for all printing needs.",
    icon: "🖨️",
  },
  {
    id: 2,
    title: "Book Printing",
    desc: "Premium quality book printing with perfect binding.",
    icon: "📚",
  },
  {
    id: 3,
    title: "Visiting Cards",
    desc: "Creative visiting card printing and design.",
    icon: "💳",
  },
  {
    id: 4,
    title: "Flex & Banner",
    desc: "Banner and flex printing for business promotion.",
    icon: "🎨",
  },
  {
    id: 5,
    title: "Poster Printing",
    desc: "High-quality poster printing services.",
    icon: "📰",
  },
  {
    id: 6,
    title: "Resume Design",
    desc: "Professional resume design for jobs.",
    icon: "📄",
  },
];

const gallery = [
  img2, img3, img4, img5, img7
];

const testimonials = [
  {
    id: 1,
    name: "Advocate Arun Mishra",
    text: "Professional service, quality printing, and timely delivery. Highly recommended."  },
  {
    id: 2,
    name: "Advocate Jaminkanta Nayak",
    text: "Excellent printing quality with fast and reliable service. Very satisfied and affordable price.",
  },
  {
    id: 3,
    name: " Sarada Vidya Mandir",
    text: "Quality work for school diaries and question papers with timely delivery. Recommended..",
  },
  {
    id: 4,
    name: "Satya Sai School",
    text:"Excellent printing quality for our school materials with timely delivery and professional service. Highly recommended." 
   },
];

function Home() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll
    ? services
    : services.slice(0, 4);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Professional DTP & Printing Services</h1>

          <p>
            We provide high-quality printing solutions for all your
            personal and business needs.
          </p>


          <div className="hero-buttons">
            {/* CALL BUTTON */}
            <a href="tel:7682041399"><button className="secondary-btn">
              Call Us
            </button>
            </a>
            {/* WHATSAPP BUTTON */}
            <a href="https://wa.me/917682041399" target="_blank" >
              <button className="secondary-btn">Whatsapp</button>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}

      <section className="section">
        <h2 className="section-title">OUR SERVICES</h2>

        {/* SERVICE COMPONENT */}
        <Services limit={8} showTitle={false} />

        <div className="center-btn">
          <a href="/services" className="see-more-btn">
            <button
              className="primary-btn" >
              See More
            </button>
          </a>

        </div>
      </section>

      {/* BOOK PRINTING */}
      <section className="book-section">
        <div className="book-content">
          <h2>BOOK PRINTING SERVICES</h2>

          <ul>
            <li>School Books</li>
            <li>Catalogue Books</li>
            <li>Thesis Printing</li>
            <li>Spiral & Perfect Binding</li>
            <li>Hard Binding</li>
            <li>All Types of Paper Quality</li>
          </ul>

          <button className="primary-btn">Proof Your Book</button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
          alt="books"
        />
      </section>

      {/* GALLERY */}

      <section className="section">
        <h2 className="section-title">BOOK PUBLICATIONS</h2>

        <div className="gallery-grid books-gal-flex">
          {gallery.map((img, index) => (
            <img key={index} src={img} alt="gallery" />
          ))}
        </div>

        <div className="center-btn">
          <a href="/books">
            <button className="primary-btn">View All</button>
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-section">
        <h2 className="section-title">WHY CHOOSE US</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>High Quality</h3>
            <p>We use premium quality printing materials.</p>
          </div>

          <div className="why-card">
            <h3>Fast Delivery</h3>
            <p>Quick delivery with commitment.</p>
          </div>

          <div className="why-card">
            <h3>Affordable Price</h3>
            <p>Best quality at affordable prices.</p>
          </div>

          <div className="why-card">
            <h3>Customer Satisfaction</h3>
            <p>Trusted by hundreds of happy customers.</p>
          </div>
        </div>
        <div className="center-btn buttonSpace">
          <a href="/about">
            <button className="primary-btn">About us</button>
          </a>

          <a href="/contact">
            <button className="primary-btn">Contact us</button>
          </a>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <h4>⭐⭐⭐⭐⭐</h4>

              <p>{item.text}</p>

              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
