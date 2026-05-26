
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import navlogoimg from "../../asset/logo/Logo.jpg"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef();

  // CLOSE WHEN CLICK OUTSIDE
  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  return (
    <>
      <nav className="navbar">

        {/* LOGO */}
        {/* 
        <div className="logo">

          <img
            src={navlogoimg}
            alt="Logo"
            className="nav-bar-logo"
          />

          <div>
            <h4>Maa Santosi</h4>
            <h6>Computer</h6>
          </div>

        </div> */}

        <Link to="/" className="logo">

          <img
            src={navlogoimg}
            alt="Logo"
            className="nav-bar-logo"
          />

          <div>
            <h4>Maa Santosi</h4>
            <h6>Computer</h6>
          </div>

        </Link>

        {/* MENU BUTTON */}

        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* OVERLAY */}

        {menuOpen && (
          <div
            className="overlay-bg"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* NAV LINKS */}

        <div
          ref={menuRef}
          className={`nav-links ${menuOpen ? "active" : ""}`}
        >

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link to="/books" onClick={() => setMenuOpen(false)}>
            Books
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>

          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>

        </div>

      </nav>
    </>
  );
}

