import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Bike<span>Book</span></h2>
          <p>Your trusted bike booking platform.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#featured">Featured Bikes</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 support@bikebook.com</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 BikeBook. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;