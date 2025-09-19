import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container">
          <h1>Welcome to My Online Store</h1>
          <p>Discover amazing products at unbeatable prices. Quality guaranteed, satisfaction assured.</p>
          <div className="hero-cta">
            <Link to="/catalog" className="btn btn-primary">Shop Now</Link>
            <a href="#features" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Shipping</h3>
              <p>Free shipping on orders over $50. Get your items delivered within 2-3 business days.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Shopping</h3>
              <p>Your personal information and payment details are protected with industry-standard encryption.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Quality Products</h3>
              <p>We carefully curate our selection to ensure you receive only the highest quality items.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Our friendly customer service team is here to help you with any questions or concerns.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>Not satisfied? Return any item within 30 days for a full refund, no questions asked.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Best Prices</h3>
              <p>We offer competitive pricing and price-match guarantee on all our products.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}