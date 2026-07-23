import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about">

      <div className="about-hero">
        <h1>About DriveX</h1>

        <p>
          DriveX is a modern car marketplace that helps customers
          buy and rent premium vehicles with confidence.
        </p>
      </div>

      <div className="about-story">

        <h2>Our Story</h2>

        <p>
          Founded in 2024, DriveX was created to simplify the
          process of buying and renting luxury cars.
          Our mission is to provide premium vehicles,
          transparent pricing, and an outstanding customer experience.
        </p>

      </div>

      <div className="about-features">

        <div className="feature-card">
          <h3>🚗 Premium Cars</h3>
          <p>Luxury vehicles from the world's top brands.</p>
        </div>

        <div className="feature-card">
          <h3>💰 Best Prices</h3>
          <p>Competitive prices for buying and renting.</p>
        </div>

        <div className="feature-card">
          <h3>🛡 Safe Booking</h3>
          <p>Secure booking process with trusted service.</p>
        </div>

        <div className="feature-card">
          <h3>⭐ 24/7 Support</h3>
          <p>Our team is always available to help you.</p>
        </div>

      </div>

      <div className="stats">

        <div>
          <h2>500+</h2>
          <p>Cars</p>
        </div>

        <div>
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Cities</p>
        </div>

        <div>
          <h2>4.9★</h2>
          <p>Rating</p>
        </div>

      </div>

      <div className="about-btn">

        <Link to="/cars">
          Browse Cars
        </Link>

      </div>

    </section>
  );
}

export default About;