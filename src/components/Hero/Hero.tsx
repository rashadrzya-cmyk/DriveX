import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-tag">
          Premium Car Marketplace
        </span>

        <h1>
          Drive Your
          <span> Dream Car </span>
          Today
        </h1>

        <p>
          Discover luxury vehicles for rent and purchase.
          Experience comfort, performance, and style
          in one place.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Cars
          </button>

          <button className="secondary-btn">
            Rent Now
          </button>
        </div>

      </div>

      <div className="hero-image">
        <img src="/image/car.png" alt="Luxury Car" />
      </div>

    </section>
  );
}

export default Hero;