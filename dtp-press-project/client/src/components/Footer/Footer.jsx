import navlogoimg from "../../asset/logo/Logo.jpg"
import "./Footer.css";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* COLUMN 1 */}

        <div className="footer-box">

          <div className="footer-logo">

            <img
              src={navlogoimg}
              alt="logo"
            />

            <div>
              <h2>Maa Santosi</h2>
              <p>Computer</p>
            </div>

          </div>

          <p className="footer-desc">

            Professional DTP & Printing services
            for banners, books, posters,
            visiting cards, and more.

          </p>

        </div>

        {/* COLUMN 2 */}

        <div className="footer-box  footer-navigation">

          <h3>Navigation</h3>

          <ul>

            <li><a href="/">Home</a></li>

            <li><a href="/about">About</a></li>

            <li><a href="/services">Services</a></li>

            <li><a href="/books">Publication</a></li>

            <li><a href="/contact">Contact Us</a></li>

          </ul>

        </div>

        {/* COLUMN 3 */}

        <div className="footer-box">

          <h3>Follow Us</h3>

          <div className="social-links">

            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="footer-bottom">

        <p>
          © 2026 Maa Santosi Computer.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

