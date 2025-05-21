
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <>
      <header className="nav-wrapper">
        <nav className="navbar">
          <div
            className="logo"
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/C511BAQFbUeQHFbdakQ/company-background_10000/company-background_10000/0/1584323128978/caremedico_cover?e=1748430000&v=beta&t=oDC7kB4JkD3G9zbt27b-k7-bTNujGkpQWC80zp1MMlQ"
              alt="CareMedico"
            />
          </div>

          <div
            className="hamburger"
            onClick={toggle}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggle()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`nav-links ${open ? "open" : ""}`}>
            <a href="/home" className="nav-link">
              Home
            </a>
            <a href="/hospitals" className="nav-link">
              Hospitals
            </a>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
