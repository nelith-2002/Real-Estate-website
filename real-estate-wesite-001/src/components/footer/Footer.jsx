import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          {/* Logo and Contact Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <span className="logo-icon me-2"></span>
              <h3 className="fw-bold text-success">KeyNest</h3>
        
            </div>
            <p>Do You Need Help? Connect With Us</p>
            <ul className="social-icons list-unstyled d-flex">
              <li className="me-3">
                <a href="#facebook" className="text-light">
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="me-3">
                <a href="#instagram" className="text-light">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li className="me-3">
                <a href="#linkedin" className="text-light">
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li className="me-3">
                <a href="#email" className="text-light">
                  <FaEnvelope size={24} />
                </a>
              </li>
              <li>
                <a href="#youtube" className="text-light">
                  <FaYoutube size={24} />
                </a>
              </li>
            </ul>
          </div>

          {/* Layouts Section */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold">Layouts</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home Page</a></li>
              <li><a href="#about" className="text-light">About Page</a></li>
              <li><a href="#services" className="text-light">Service Page</a></li>
              <li><a href="#properties" className="text-light">Property Page</a></li>
              <li><a href="#contact" className="text-light">Contact Page</a></li>
              <li><a href="#blog" className="text-light">Single Blog</a></li>
            </ul>
          </div>

          {/* All Sections Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold">All Sections</h5>
            <ul className="list-unstyled">
              <li><a href="#headers" className="text-light">Headers</a></li>
              <li><a href="#features" className="text-light">Features</a></li>
              <li><a href="#testimonials" className="text-light">Testimonials</a></li>
              <li><a href="#videos" className="text-light">Videos</a></li>
              <li><a href="#footers" className="text-light">Footers</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-light">About</a></li>
              <li><a href="#blog" className="text-light">Blog</a></li>
              <li><a href="#pricing" className="text-light">Pricing</a></li>
              <li><a href="#affiliate" className="text-light">Affiliate</a></li>
              <li><a href="#login" className="text-light">Login</a></li>
              <li><a href="#changelog" className="text-light">Changelog</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center py-3">
        <p className="mb-0">&copy; 2024 KeyNest. Designed by Nelith Nethsanda</p>
      </div>
    </footer>
  );
}

export default Footer;
