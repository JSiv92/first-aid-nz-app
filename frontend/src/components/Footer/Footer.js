import React from "react";
import "./Footer.css";

const Footer = () => {
  //get date for copyright
  const year = new Date().getFullYear();

  return (
    <div className="main-footer">
      <section className="section">
        <footer className="text-white text-center text-md-start">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="fw-bold fs-4">Contact Us:</h5>

                <p className="fw-lighter text-secondary">
                  <i className="fas fa-home me-3"></i>22 Ocean View Road,
                  Northcote, Auckland
                  <br />
                  <i className="fas fa-phone me-3"></i>09 480 0182
                  <br />
                  <i className="fas fa-envelope me-3"></i>info@firstaidnz.co.nz
                  <br />
                  <i className="fa-regular fa-clock me-3"></i>8:30am - 5pm
                  Weekdays
                  <br />
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="fw-bold fs-4">Our Services</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a
                      href="/products"
                      className="text-decoration-none text-secondary"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/courses"
                      className="text-decoration-none text-secondary"
                    >
                      First Aid Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="/medics"
                      className="text-decoration-none text-secondary"
                    >
                      Event Medics
                    </a>
                  </li>
                  <li>
                    <a
                      href="/screening"
                      className="text-decoration-none text-secondary"
                    >
                      Health & Drug Screening
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="fw-bold fs-4">Info</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="/" className="text-decoration-none text-secondary">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-decoration-none text-secondary"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-decoration-none text-secondary"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <section className="mb-4 text-center">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </section>
          <div className="text-center">
            <p>
              © {year} Copyright&nbsp;
              <a
                className="text-decoration-none text-secondary"
                href="https://firstaidnz.co.nz/"
              >
                First Aid NZ Ltd
              </a>
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
