import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Header Section */}
        <section className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </section>

        <div className="contact-content">
          {/* Contact Form */}
          <section className="contact-form-section">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section className="contact-info-section">
            <h2>Get in Touch</h2>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>support@mystore.com</p>
                  <span>We typically respond within 24 hours</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>1-800-MYSTORE (1-800-697-8673)</p>
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>123 Commerce Street<br />City, State 12345</p>
                  <span>Visit our headquarters</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">💬</div>
                <div className="contact-details">
                  <h3>Live Chat</h3>
                  <p>Available on our website</p>
                  <span>Mon-Sun: 8AM-10PM EST</span>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-list">
                <div className="faq-item">
                  <strong>How long does shipping take?</strong>
                  <p>Standard shipping takes 2-3 business days. Express shipping is available for next-day delivery.</p>
                </div>
                <div className="faq-item">
                  <strong>What is your return policy?</strong>
                  <p>We offer 30-day returns on all items. Items must be in original condition with tags attached.</p>
                </div>
                <div className="faq-item">
                  <strong>Do you offer international shipping?</strong>
                  <p>Currently, we ship within the United States only. International shipping is coming soon!</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Business Hours */}
        <section className="business-hours">
          <h2>Business Hours</h2>
          <div className="hours-grid">
            <div className="hours-item">
              <span className="day">Monday - Friday</span>
              <span className="time">9:00 AM - 6:00 PM EST</span>
            </div>
            <div className="hours-item">
              <span className="day">Saturday</span>
              <span className="time">10:00 AM - 4:00 PM EST</span>
            </div>
            <div className="hours-item">
              <span className="day">Sunday</span>
              <span className="time">12:00 PM - 4:00 PM EST</span>
            </div>
            <div className="hours-item">
              <span className="day">Holidays</span>
              <span className="time">Closed</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}