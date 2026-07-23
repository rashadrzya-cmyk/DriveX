import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FeaturedCars.module.css";
import Loader from "../Loader/Loader";
type Car = {
  id: number;
  name: string;
  price: string;
  rentPrice: string;
  image: string;
  year: number;
  type: "buy" | "rent";
  transmission: string;
  fuel: string;
  engine: string;
  color: string;
  description: string;

};
type Props = {
  type?: "buy" | "rent";
  title?: string;
};
const FeaturedCars: React.FC<Props> = ({ type, title = "Featured Cars", }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const filteredCars = cars
    .filter((car) => !type || car.type === type)
    .filter((car) => {
      const matchesSearch =
        car.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesBrand =
        selectedBrand === "All" ||
        car.name.startsWith(selectedBrand);

      const matchesFuel =
        selectedFuel === "All" ||
        car.fuel === selectedFuel;

      return (
        matchesSearch &&
        matchesBrand &&
        matchesFuel
      );
    })
    .sort((a, b) => {
      const priceA = Number(
        a.price.replace(/[$,]/g, "")
      );

      const priceB = Number(
        b.price.replace(/[$,]/g, "")
      );

      if (sortOrder === "low-high") {
        return priceA - priceB;
      }

      if (sortOrder === "high-low") {
        return priceB - priceA;
      }

      return 0;
    });

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch cars");
        }
        return res.json();
      })
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);
  const brands = [
    "All",
    ...new Set(
      cars.map((car) => car.name.split(" ")[0])
    ),
  ];
  const fuels = [
    "All",
    ...new Set(
      cars.map((car) => car.fuel)
    ),
  ];


  return (
    <section className={styles.featured}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <div className={styles.filterContainer}>
          <select
            value={selectedBrand}
            onChange={(e) =>
              setSelectedBrand(e.target.value)
            }
            className={styles.filterSelect}
          >
            {brands.map((brand) => (
              <option
                key={brand}
                value={brand}
              >
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.filterContainer}>
          <select
            value={selectedFuel}
            onChange={(e) =>
              setSelectedFuel(e.target.value)
            }
            className={styles.filterSelect}
          >
            {fuels.map((fuel) => (
              <option
                key={fuel}
                value={fuel}
              >
                {fuel}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.filterContainer}>
          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value)
            }
            className={styles.filterSelect}
          >
            <option value="default">
              Sort By Price
            </option>

            <option value="low-high">
              Low → High
            </option>

            <option value="high-low">
              High → Low
            </option>
          </select>
        </div>
      </div>


      {loading ? (
        <Loader />
      ) : (
        <div className={styles.grid}>
          {filteredCars.map((car) => (
            <div key={car.id} className={styles.card}>
              <span
                className={
                  car.type === "rent"
                    ? styles.rentBadge
                    : styles.saleBadge
                }
              >
                {car.type === "rent"
                  ? "FOR RENT"
                  : "FOR SALE"}
              </span>
              <img
                src={car.image}
                alt={car.name}
                className={styles.image}
              />

              <div className={styles.content}>
                <h3>{car.name}</h3>

                <p className={styles.price}>
                  {car.type === "rent"
                    ? car.rentPrice
                    : car.price}
                </p>

                <div className={styles.specs}>
                  <span>📅 {car.year}</span>
                  <span>⚙️ {car.transmission}</span>
                  <span>⛽ {car.fuel}</span>
                </div>

                <Link
                  to={`/car/${car.id}`}
                  className={styles.btn}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedCars;