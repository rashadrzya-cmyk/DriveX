import FeaturedCars from "../components/FeaturedCars/FeaturedCars";
import "./Rent.css";

function Rent() {
  return (
    <div className="rent-page">
      <section className="rent-hero">
        <div className="rent-content">
          <h1>Rent Your Dream Car</h1>

          <p>
            Choose from our luxury rental fleet and enjoy a premium driving
            experience at affordable daily rates.
          </p>

          <button className="rent-btn">
            Rent Now
          </button>
        </div>
      </section>

      <FeaturedCars
        type="rent"
        title="Cars For Rent"
      />
    </div>
  );
}

export default Rent;