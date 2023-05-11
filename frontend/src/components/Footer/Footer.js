import React from "react";
import "./Footer.css";

const Footer = () => {
  //get date for copyright
  const year = new Date().getFullYear();

  return (
    <div className="main-footer">
      <section class="section">
        <footer class="text-white text-center text-md-start">
          <div class="container p-4">
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 class="fw-bold fs-4">Contact Us:</h5>

                <p class="fw-lighter text-secondary">
                  <i class="fas fa-home me-3"></i>22 Ocean View Road, Northcote,
                  Auckland
                  <br />
                  <i class="fas fa-phone me-3"></i>09 480 0182
                  <br />
                  <i class="fas fa-envelope me-3"></i>info@firstaidnz.co.nz
                  <br />
                  <i class="fa-regular fa-clock me-3"></i>8:30am - 5pm Weekdays
                  <br />
                </p>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="fw-bold fs-4">Our Services</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a
                      href="/courses"
                      class="text-decoration-none text-secondary"
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="/medics"
                      class="text-decoration-none text-secondary"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="/screening"
                      class="text-decoration-none text-secondary"
                    >
                      Health & Drug Screening
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products"
                      class="text-decoration-none text-secondary"
                    >
                      Products
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="fw-bold fs-4">Info</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="/" class="text-decoration-none text-secondary">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      class="text-decoration-none text-secondary"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      class="text-decoration-none text-secondary"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <section class="mb-4 text-center">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </section>
          <div class="text-center">
            <p>
              © {year} Copyright&nbsp;
              <a
                class="text-decoration-none text-secondary"
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
