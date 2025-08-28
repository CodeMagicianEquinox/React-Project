// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import './App.css';

// Home content = your existing landing sections
function Home() {
  return (
    <main className="main-content">
      <div className="hero-section">
        <h1>Welcome to My Online Store</h1>
        <p className="hero-subtitle">
          Discover amazing products at incredible prices. Your satisfaction is our top priority!
        </p>
        <div className="hero-actions">
          <Link to="/catalog" className="btn btn-primary">Shop Now</Link>
          <a className="btn btn-secondary" href="#learn">Learn More</a>
        </div>
      </div>

      <div className="features-section" id="learn">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>Free shipping on orders over $50</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payment</h3>
            <p>Your payment information is safe with us</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">↩</div>
            <h3>Easy Returns</h3>
            <p>30-day return policy, no questions asked</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Quality Products</h3>
            <p>Carefully curated selection of premium items</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
