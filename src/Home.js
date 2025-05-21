const FeatureSection = () => {
  return (
    <div className="home">
    
      <div className="bgimage">
        <img
          src="https://images.prismic.io/wunderflatscontent/b2bffb77-fec5-465d-8ea5-face3a5637fd_Family-M.jpg?auto=compress,format&rect=0,0,2000,1400&w=2000&h=1400t="
          className="landingimg"
        />
        <div className="img-text">
          <p>Your Health , Our Priority</p>
          <p> Guiding You Every Step</p>
        </div>
      </div>
      <br />
      <div className="fe-bg">
        <div className="fe-container">
          <h1 className="fe-header">WHAT WE OFFER</h1>

          <p className="fe-description">
            Our unique process makes your Medical Journey Smooth
          </p>
          <div className="features">
            <div className="section-wrapper">
              <div className="section2"></div>
              <div className="fe-up">
                <div className="section">
                  <h2>Visa Support</h2>
                  <p>
                    Assistance with visa applications and documentation to
                    ensure a smooth travel process
                  </p>
                  {/* <img
                src="https://res.cloudinary.com/dowrygm9b/image/upload/v1573000192/icon-calculator_g9tsxn.svg"
                alt="calculator"
              /> */}
                  <div class="col">
                    <div class="icon-box">
                      <i class="fa fa-credit-card"></i>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <h2>Treatment</h2>
                  <p>
                    Coordination with top medical professionals and facilities
                    for personalized treatment plans
                  </p>
                  <div class="col">
                    <div class="icon-box">
                      <i class="fa fa-hospital"></i>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <h2>Language Support</h2>
                  <p>
                    Providing interpreters and language assistance to ensure
                    clear communication
                  </p>
                  <div class="col">
                    <div class="icon-box">
                      <i class="fa fa-language"></i>
                    </div>
                  </div>
                </div>
              </div>
              <br /><br />
              <div className="fe-down">
                <div className="section">
                  <h2>Local Accommodation</h2>
                  <p>
                    Arrangement of comfortable and convenient lodging near
                    medical facilities
                  </p>
                  <div class="col">
                    <div class="icon-box">
                      <i class="fa fa-bed"></i>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <h2>Travel Booking</h2>
                  <p>
                    Management of flight bookings and travel itineraries for a
                    hassle-free journey
                  </p>
                  <div class="col">
                    <div class="icon-box">
                      <i class="fa fa-plane"></i>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <h2>On Ground Support</h2>
                  <p>
                    Local assistance and support throughout your stay, from
                    transportation to daily needs
                  </p>
                  <div class="col">
                    <div class="icon-box">
                      <i class="fa fa-handshake"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="milestone">
        <ul className="milesto">
          <li className="milesto-numbers">
            Milestones <br />
            Achieved
          </li>
          <li className="milesto-numbers">
            1500+ <br />
            <p>Hospitals</p>
          </li>

          <li className="milesto-numbers">
            50000+
            <br />
            <p>Happy Patients</p>
          </li>

          <li className="milesto-numbers">
            20000+
            <br />
            <p>Doctors</p>
          </li>
        </ul>
      </div>
      <br />
      {/* <div className="partner">
        <div className="partner-main">
          <div className="slider">
            <div>
              <h3 className="logo">1</h3>
            </div>
            <div>
              <h3 className="logo">2</h3>
            </div>
            <div>
              <h3 className="logo">3</h3>
            </div>
            <div>
              <h3 className="logo">4</h3>
            </div>
            <div>
              <h3 className="logo">5</h3>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default FeatureSection;
