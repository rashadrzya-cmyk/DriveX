// import FeaturedCars from "../components/FeaturedCars/FeaturedCars";
// import "./Buy.css";

// function Buy() {
//   return (
//     <>
//       <section className="buy-hero">
//         <div className="buy-overlay">
//           <h1>Buy Your Dream Car</h1>

//           <p>
//             Explore our premium collection of luxury,
//             sports, and performance cars ready for
//             immediate purchase.
//           </p>

//           <button>Browse Collection</button>
//         </div>
//       </section>

//       <FeaturedCars />
//     </>
//   );
// }

// export default Buy;
import FeaturedCars from "../components/FeaturedCars/FeaturedCars";
import "./Buy.css";

function Buy() {
  return (
    <div className="buy-page">
      <section className="buy-hero">
        <div className="buy-content">
          <h1>Buy Your Dream Car</h1>

          <p>
            Explore our premium collection of luxury, sports, and performance
            cars. Find the perfect vehicle that matches your lifestyle.
          </p>

          <button className="buy-btn">
            Explore Collection
          </button>
        </div>
      </section>

      <FeaturedCars
        type="buy"
        title="Cars For Sale"
      />
    </div>
  );
}

export default Buy;