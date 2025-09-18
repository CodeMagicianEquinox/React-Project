export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>About My Online Store</h1>
          <p>Learn about our mission, values, and commitment to providing exceptional products and service.</p>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, My Online Store began as a small family business with a simple mission: 
                to provide high-quality products at affordable prices while delivering exceptional customer service.
              </p>
              <p>
                What started as a garage operation has grown into a trusted online retailer serving customers 
                across the country. We carefully curate every product in our catalog, ensuring that each item 
                meets our strict standards for quality, durability, and value.
              </p>
              <p>
                Today, we're proud to offer thousands of products across multiple categories, from the latest 
                electronics to essential home goods, all backed by our commitment to customer satisfaction.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://picsum.photos/seed/about/600/400" 
                alt="Our team at work"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Quality First</h3>
              <p>We never compromise on quality. Every product is carefully selected and tested to ensure it meets our high standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Customer Focus</h3>
              <p>Our customers are at the heart of everything we do. Your satisfaction is our top priority.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We're committed to sustainable business practices and partnering with eco-conscious suppliers.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We continuously improve our processes and embrace new technologies to serve you better.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img 
                src="https://picsum.photos/seed/ceo/300/300" 
                alt="CEO"
                loading="lazy"
              />
              <h3>Sarah Johnson</h3>
              <p className="role">Chief Executive Officer</p>
              <p>With 15 years of retail experience, Sarah leads our company with a vision for exceptional customer service and sustainable growth.</p>
            </div>
            <div className="team-member">
              <img 
                src="https://picsum.photos/seed/cto/300/300" 
                alt="CTO"
                loading="lazy"
              />
              <h3>Michael Chen</h3>
              <p className="role">Chief Technology Officer</p>
              <p>Michael ensures our platform runs smoothly and securely, bringing cutting-edge technology to enhance your shopping experience.</p>
            </div>
            <div className="team-member">
              <img 
                src="https://picsum.photos/seed/manager/300/300" 
                alt="Operations Manager"
                loading="lazy"
              />
              <h3>Emily Rodriguez</h3>
              <p className="role">Operations Manager</p>
              <p>Emily oversees our supply chain and logistics, ensuring your orders are processed quickly and delivered on time.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Products Available</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.8%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}