// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>My Online Store</h3>
            <p>Your trusted partner for quality products and excellent service.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#support">Customer Support</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 support@mystore.com</p>
            <p>📞 1-800-MYSTORE</p>
            <p>📍 123 Commerce St, City, State 12345</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 My Online Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
