import React from 'react';
import './Footer.css'; // Make sure to create and import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="logo-url" alt="Shopcart Logo" />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="footer-payments">
          <h3>Accepted Payments</h3>
          <div className="payment-icons">
            <img src="stripe-icon-url" alt="Stripe" />
            <img src="visa-icon-url" alt="Visa" />
            <img src="mastercard-icon-url" alt="MasterCard" />
            <img src="amazon-icon-url" alt="Amazon" />
            <img src="klarna-icon-url" alt="Klarna" />
            <img src="paypal-icon-url" alt="PayPal" />
            <img src="applepay-icon-url" alt="Apple Pay" />
            <img src="googlepay-icon-url" alt="Google Pay" />
          </div>
        </div>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Department</h4>
          <ul>
            <li>Fashion</li>
            <li>Education Product</li>
            <li>Frozen Food</li>
            <li>Beverages</li>
            <li>Organic Grocery</li>
            <li>Office Supplies</li>
            <li>Beauty Products</li>
            <li>Books</li>
            <li>Electronics & Gadget</li>
            <li>Travel Accessories</li>
            <li>Fitness</li>
            <li>Sneakers</li>
            <li>Toys</li>
            <li>Furniture</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li>About Shopcart</li>
            <li>Careers</li>
            <li>News & Blog</li>
            <li>Help</li>
            <li>Press Center</li>
            <li>Shop By Location</li>
            <li>Shopcart Brands</li>
            <li>Affiliate & Partners</li>
            <li>Ideas & Guides</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Gift Card</li>
            <li>Mobile App</li>
            <li>Shipping & Delivery</li>
            <li>Order Pickup</li>
            <li>Account Signup</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>Shopcart Help</li>
            <li>Returns</li>
            <li>Track Orders</li>
            <li>Contact Us</li>
            <li>Feedback</li>
            <li>Security & Fraud</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/become-seller">Become Seller</a>
          <a href="/gift-cards">Gift Cards</a>
          <a href="/help-center">Help Center</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/privacy-policy">Privacy & Policy</a>
        </div>
        <p>All Right reserved by Musemind ui/ux design agency | 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
