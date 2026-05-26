import React from "react";
import "./Service.css";

// import service images

import service1 from "../../asset/services-card/dtp-design.jpeg";
import service2 from "../../asset/services-card/odia-english-typing.png";
import service3 from "../../asset/services-card/book-magazine.png";
import service4 from "../../asset/services-card/scl_question.png";
import service5 from "../../asset/services-card/book-cover.png";
import service6 from "../../asset/services-card/visiting-card.png";
import service7 from "../../asset/services-card/photo-editing-lamination.png";
import service8 from "../../asset/services-card/Xerox-photocopy.png";
import service9 from "../../asset/services-card/colour-blkwhite.png";
import service10 from "../../asset/services-card/spiral-binding.png";
import service11 from "../../asset/services-card/online_form.png";
import service12 from "../../asset/services-card/resume-cv.png";
import service13 from "../../asset/services-card/project-document-printing.png";
import service14 from "../../asset/services-card/scan-email.png";
import service15 from "../../asset/services-card/passport-size.png";
import service16 from "../../asset/services-card/flex-banner.png";
import service17 from "../../asset/services-card/govtandprivate-job.png";
import service18 from "../../asset/services-card/id-card-design.png";
import service19 from "../../asset/services-card/poster-design.png";
import service20 from "../../asset/services-card/leaflet-design.png";
import service21 from "../../asset/services-card/wedding-card.png";
import service22 from "../../asset/services-card/invitation-card.png";
import service23 from "../../asset/services-card/recipt-booking.jpg";

export default function Services({ limit, showTitle = true }) {

  const services = [

    {
      id: 1,
      title: "DTP Design",
      image: service1,
      description:
        "Professional desktop publishing designs for books, notices, forms, certificates, and office documents.",
    },

    {
      id: 2,
      title: "Odia, English & Hindi Typing",
      image: service2,
      description:
        "Fast and accurate typing services available in Odia, English, and Hindi languages.",
    },

    {
      id: 3,
      title: "Book & Magazine Printing",
      image: service3,
      description:
        "High-quality printing services for books, magazines, journals, and educational materials.",
    },

    {
      id: 4,
      title: "School & College Question Printing",
      image: service4,
      description:
        "Quality question paper printing for schools, colleges, and coaching centers.",
    },

    {
      id: 5,
      title: "Book Cover Design",
      image: service5,
      description:
        "Creative and attractive book cover designs for educational, story, business, and custom books.",
    },

    {
      id: 6,
      title: "Visiting Card Design & Print",
      image: service6,
      description:
        "Stylish business visiting cards designed and printed for personal and professional branding.",
    },

    {
      id: 7,
      title: "Photo Editing & Lamination",
      image: service7,
      description:
        "Photo editing, background removal, resizing, and durable lamination services available.",
    },

    {
      id: 8,
      title: "Xerox / Photocopy",
      image: service8,
      description:
        "Fast and clear black-and-white or color photocopy services at affordable prices.",
    },

    {
      id: 9,
      title: "Color & Black-and-White Printing",
      image: service9,
      description:
        "Quality printouts for documents, projects, photos, and office files in color or black & white.",
    },

    {
      id: 10,
      title: "Spiral Binding",
      image: service10,
      description:
        "Strong and neat spiral binding for projects, reports, assignments, and office documents.",
    },

    {
      id: 11,
      title: "Online Form Fill-up",
      image: service11,
      description:
        "Quick and accurate online application form filling for jobs, exams, and government services.",
    },

    {
      id: 12,
      title: "Resume / CV Design",
      image: service12,
      description:
        "Professional resume and CV designing to create a strong first impression.",
    },

    {
      id: 13,
      title: "Project & Document Printing",
      image: service13,
      description:
        "Complete printing solutions for school, college, and office project documents.",
    },

    {
      id: 14,
      title: "Scanning & Email Services",
      image: service14,
      description:
        "Document scanning, PDF creation, and email sending services for official and personal use.",
    },

    {
      id: 15,
      title: "Passport Size Photo Print",
      image: service15,
      description:
        "Instant passport-size photo printing with proper sizing and quality finish.",
    },

    {
      id: 16,
      title: "Flex & Banner Design",
      image: service16,
      description:
        "Creative flex, banner, poster, and advertisement designs for shops, events, and promotions.",
    },

    {
      id: 17,
      title: "Government & Private Job Form Services",
      image: service17,
      description:
        "Support for filling government and private job application forms with proper guidance.",
    },

    {
      id: 18,
      title: "ID Card Design & Print",
      image: service18,
      description:
        "Custom ID card design and printing for schools, offices, shops, and organizations.",
    },

    {
      id: 19,
      title: "Poster Design",
      image: service19,
      description:
        "Professional poster designs for events, promotions, advertisements, and awareness campaigns.",
    },

    {
      id: 20,
      title: "Leaflet Design & Printing",
      image: service20,
      description:
        "Eye-catching leaflet and flyer designs with quality printing for marketing and business promotion.",
    },

    {
      id: 21,
      title: "Wedding Card Printing",
      image: service21,
      description:
        "High-quality wedding card printing with elegant designs and premium finishing.",
    },

    {
      id: 22,
      title: "Receipt (Rasid) Book Printing",
      image: service23,
      description:
        "Custom receipt and bill book printing for shops, businesses, and office use.",
    },

    {
      id: 23,
      title: "Invitation Card Design",
      image: service22,
      description:
        "Beautiful custom invitation card designs for weddings, birthdays, parties, and special occasions.",
    },

  ];

  const displayedServices = limit
    ? services.slice(0, limit)
    : services;

  return (
    <section className="services">

      {showTitle && (
        <div className="services-title">

          <h1>What I Do</h1>

          <p>
            We provide professional digital services with modern technologies.
          </p>

        </div>
      )}

      <div className="services-grid-comp">

        {displayedServices.map((service) => (

          <div className="service-card" key={service.id}>

            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            )}

            <h2>{service.title}</h2>

            <div className="line"></div>

            <p>{service.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}