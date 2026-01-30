import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import nameLogo from "../../assets/name.svg";
import "./Navigation.scss";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img
              src={nameLogo}
              xmlns="http://www.w3.org/2000/svg"
              alt="Manuel Torres logo"
              className="nav-logo-img"
            />
          </Link>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {location.pathname === "/" ? (
            // On home page - use scroll to sections
            <>
              <button
                className="nav-link"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
              <button
                className="nav-link"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                className="nav-link"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
              <button
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </>
          ) : (
            // On other pages - use Link to home sections
            <>
              <Link to="/" className="nav-link" onClick={handleNavClick}>
                Home
              </Link>
              <Link to="/#about" className="nav-link" onClick={handleNavClick}>
                About
              </Link>
              <Link
                to="/#projects"
                className="nav-link"
                onClick={handleNavClick}
              >
                Projects
              </Link>
              <Link
                to="/#contact"
                className="nav-link"
                onClick={handleNavClick}
              >
                Contact
              </Link>
            </>
          )}

          {/* <Link to="/cool-css" className="nav-link" onClick={handleNavClick}>
            Cool CSS
          </Link> */}
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
