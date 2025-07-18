import React, { useState, useEffect } from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa';

import applePay from '../../assets/images/ApplePay.png';
import googlePay from '../../assets/images/GooglePay.png';
import visa from '../../assets/images/Visa.png';
import mastercard from '../../assets/images/Mastercard.png';
import paypal from '../../assets/images/paypal.svg';
import amazonPay from '../../assets/images/AmazonPay.png';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button only after scrolling 300px down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-column">
          <h4>Gemini Beauty</h4>
          <p>123 Bloom Avenue, Beauty City, CA 90001</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>
            ✉️ <a href="mailto:admin@geminiapp.com">admin@geminiapp.com</a>
          </p>
        </div>

        {/* Newsletter & Socials */}
        <div className="footer-column">
          <h4>Subscribe</h4>
          <p>Get the latest beauty tips and updates</p>
          <form className="newsletter-form">
            <label htmlFor="newsletter-email" className="visually-hidden">Email Address</label>
            <input
              type="email"
              id="newsletter-email"
              name="newsletterEmail"
              placeholder="Your email"
              required
            />
            <button type="submit" aria-label="Subscribe to newsletter">
              <FaEnvelope />
            </button>
          </form>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>

        {/* Quick Shop */}
        <div className="footer-column">
          <h4>Quick Shop</h4>
          <ul>
            <li><a href="#">Skincare</a></li>
            <li><a href="#">Body Care</a></li>
            <li><a href="#">Travel Size</a></li>
            <li><a href="#">Fabgirl</a></li>
            <li><a href="#">Serums</a></li>
            <li><a href="#">SPF</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">Find a Bliss Near You</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Accessibility Statement</a></li>
          </ul>
        </div>

        {/* For You */}
        <div className="footer-column">
          <h4>For You</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Shipping Information</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>
      </div>

      {/* Payments & Copyright */}
      <div className="footer-bottom-row">
        <div className="footer-payments">
          <h5>We Accept:</h5>
          <div className="payment-logos">
            <img src={applePay} alt="Apple Pay" />
            <img src={googlePay} alt="Google Pay" />
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="Mastercard" />
            <img src={paypal} alt="Paypal" />
            <img src={amazonPay} alt="Amazon Pay" />
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gemini Beauty. All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
