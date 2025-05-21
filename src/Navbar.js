// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Nav">
      <div className="nav-options" id="nav-op">
        <div class="hamburger" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav">
          <li className="nav-home">
            <a className="home" id="options" aria-current="page" href="/home">
              Home
            </a>
          </li>
          <li className="nav-hospital">
            <a className="hospitals" id="options" href="/hospitals">
              Hospitals
            </a>
          </li>
          <li className="nav-contact">
            {/* <Link to="/contact" className="contact" id="options">
              Contact
            </Link> */}
            <a className="contact" id="options" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
