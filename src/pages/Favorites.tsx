import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";

type Car = {
  id: number;
  name: string;
  price: string;
  image: string;
};

function Favorites() {
  const [favorites, setFavorites] = useState<Car[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setFavorites(storedFavorites);
  }, []);

  return (
    <section className="favorites-page">
      <h1>My Favorite Cars ❤️</h1>

      {favorites.length === 0 ? (
        <p>No favorite cars yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((car) => (
            <div className="favorite-card" key={car.id}>
              <img
                src={car.image}
                alt={car.name}
              />

              <h3>{car.name}</h3>

              <p>{car.price}</p>

              <Link
                to={`/car/${car.id}`}
                className="details-btn"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;