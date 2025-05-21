const Footer = () => {
  return (
    <div className="footer">
      <div className="f-top">
        <div className="f-left">
          <h1 className="f-heading">Join the Community </h1>
          <br />
          <p className="f-para">
            We are trusted by over 50000+ patients. Join us for full support.
          </p>
        </div>

        <div className="f-middle">
          <ul>
            <h3 className="f-heading2">Need Help?</h3>
            <li className="f-list">
              <a href="" className="f-links">
                Home
              </a>{" "}
            </li>
            <li className="f-list">
              <a href="" className="f-links">
                Contact Us
              </a>{" "}
            </li>
            <li className="f-list">
              <a href="" className="f-links">
                Terms and Conditions
              </a>
            </li>
            <li className="f-list">
              <a href="" className="f-links">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="f-right">
          <ul>
            <h3 className="f-heading2">Get in Touch </h3>
            <li className="f-list">
              <a href="" className="f-links">
                1st Floor, B7, Noida Sector 2, Uttar Pradesh - 20130
              </a>
            </li>

            <li className="f-list">
              <a href="mailto:admin@caremedico.com" className="f-links">
                admin@caremedico.com
              </a>
            </li>
            <li className="f-list">
              <a href="tel:+918130600627" className="f-links">
                +918130600627{" "}
              </a>
            </li>
            <li className="f-list">
              <a href="tel:+918130600628" className="f-links">
                +918130600628
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="f-bottom">
        <hr />
        <p>2023 CareMedico Medtech Pvt. Ltd. All rights reserved.</p>
        {/* <a href="https://www.instagram.com" target="_blank" className="f-icons">
          <i class="fab fa-instagram"></i>
        </a>

        <a href="https://www.facebook.com" target="_blank" className="f-icons">
          <i class="fab fa-facebook"></i>
        </a> */}
      </div>
    </div>
  );
};

export default Footer;
