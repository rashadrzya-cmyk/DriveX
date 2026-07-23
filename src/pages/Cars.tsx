import FeaturedCars from "../components/FeaturedCars/FeaturedCars";

function Cars() {
  return (
    <>
      <section
        style={{
          padding: "140px 8% 60px",
          background: "#0f172a",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Premium Car Collection
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          Browse our complete collection of luxury and performance
          cars. Find the perfect vehicle that matches your lifestyle.
        </p>
      </section>

      <FeaturedCars />
    </>
  );
}

export default Cars;