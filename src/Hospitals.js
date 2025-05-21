const Hospitals = () => {
  return (
    <div className="hospitals">
      <div className="c-up">
        <p className="c-up-text1">Leading Medical Centers</p>
      
      </div>
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage:
                "url(https://www.edhacare.com/storage/hospitals/1687771806mothertobe-fertility-in-hyderabad.jpg)",
            }}
          ></div>
          <ul className="details">
            <li className="author">
              <a href="#">Beds: N/A</a>
            </li>
            <li className="date">Single Specialty</li>
            <li className="tags">
              <ul>
                <li>
                  <a href="#">India</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>MotherToBe Fertility</h1>

          <p>
            Discover exceptional fertility care at MotherToBe, a premier IVF
            center located on Minister Road in Secunderabad. Established in
            2009, our world-class embryology lab operates in accordance with
            ICMR guidelines and boasts an impressive track record of over 7,500
            successful IVF procedures. We offer a comprehensive suite of
            fertility services..
          </p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>

      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage:
                "url(https://mediniz-images-2018-100.s3.ap-south-1.amazonaws.com/post-images/Virinchi%20Hospital%20hyderabad_1613029776.jpg)",
            }}
          ></div>
          <ul className="details">
            <li className="author">
              <a href="#">Beds: 500</a>
            </li>
            <li className="date">Super Specialty</li>
            <li className="tags">
              <ul>
                <li>
                  <a href="#">India</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Virinchi Hospital</h1>

          <p>
            Discover the uniqueness of Virinchi Hospital, a NABL and
            NABH-accredited super-specialty and tertiary healthcare facility.
            Specializing in cutting-edge treatments like gene therapy, organ
            regeneration, xeno-grafting, stem cell therapy, and genomics-based
            personalized preventive care, Virinchi Hospital stands out as a
            pioneer in advanced..
          </p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage:
                "url(https://www.myhospitalnow.com/hospitals/storage/hospital_profile/1287370-care-hospitals-2068865125_1719911045.jpg)",
            }}
          ></div>
          <ul className="details">
            <li className="author">
              <a href="#">Beds: 435</a>
            </li>
            <li className="date">Multi Specialty</li>
            <li className="tags">
              <ul>
                <li>
                  <a href="#">India</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Care Hospitals, Banjara Hills, Hyderabad</h1>
          <p>
            Discover Care Hospitals, a premier healthcare facility established
            in 2000 and part of the renowned CARE group. With NABH and NABL
            accreditation, our hospital boasts 435 beds and caters to over
            180,000 outpatients and 16,000 inpatients annually. Our
            state-of-the-art 24/7 Emergency Unit and Pharmacy ensure immediate
            care, while
          </p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
