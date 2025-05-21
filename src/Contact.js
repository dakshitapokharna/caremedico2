import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="c-landing">
      <div className="c-up">
        <p className="c-up-text1">Get in Touch</p>
        <p className="c-up-text2">We are trusted by over 50000+ patients. Join us for full support.</p>
      </div>
      <div className="container">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title-1">Need Help? Let's Talk!</h3>
            <p className="text">
              Reach out to us for any healthcare related queries and we will get
              back to you shortly.
            </p>

            <div className="info">
              <div className="information">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                &nbsp;&nbsp;
                <p>
                  B7 1st Floor,Sector II, Gautam Buddha Nagar, Noida 201301,
                  India
                </p>
              </div>
              <div className="information">
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp;&nbsp;
                <p>admin@caremedico.com</p>
              </div>
              <div className="information">
                <FontAwesomeIcon icon={faPhone} />
                &nbsp;&nbsp;
                <p>+918130600627</p>
              </div>
              <div className="information">
                <FontAwesomeIcon icon={faPhone} />
                &nbsp;&nbsp;
                <p>+918130600628</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/CareMedicoin/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a href="https://www.instagram.com/care_medico/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html">
              <h3 className="title-2">
                Convinced yet? Let's make something great together.
              </h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="name"
                />

                <label htmlFor="name">Name</label>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor="phone">Phone</label>
                <span>Phone</span>
              </div>

              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label htmlFor="message">Medical Issue</label>
                {/* <span>Message</span> */}
              </div>
              <input
                type="submit"
                value="Consult Now for Free"
                className="btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
