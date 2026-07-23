import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, } from "react-router-dom";
import "./CarDetails.css";
import { FaCarSide } from "react-icons/fa";
import CarViewer from "../components/CarViewer/CarViewer";


type Car = {
  id: number;
  name: string;
  price: string;
  image: string;
  year: number;
  mileage: string;
  transmission: string;
  fuel: string;
  engine: string;
  horsepower: string;
  topSpeed: string;
  color: string;
  description: string;
  features: string[];
  gallery: string[];
};

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState<Car | null>(null);
  const [favorite, setFavorite] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [relatedCars, setRelatedCars] = useState<Car[]>([]);
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });
  useEffect(() => {
    fetch(`http://localhost:5000/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        setMainImage(data.image);

        const favorites = JSON.parse(
          localStorage.getItem("favorites") || "[]"
        );

        const isFavorite = favorites.some(
          (item: Car) => item.id === data.id
        );

        setFavorite(isFavorite);
        fetch("http://localhost:5000/cars")
          .then((res) => res.json())
          .then((carsData) => {
            const filtered = carsData
              .filter(
                (item: Car) => item.id !== data.id
              )
              .slice(0, 3);

            setRelatedCars(filtered);
          });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const toggleFavorite = () => {
    if (!car) return;

    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const exists = favorites.some(
      (item: Car) => item.id === car.id
    );

    let updatedFavorites;

    if (exists) {
      updatedFavorites = favorites.filter(
        (item: Car) => item.id !== car.id
      );

      setFavorite(false);
    } else {
      updatedFavorites = [...favorites, car];

      setFavorite(true);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  if (!car) {
    return <h2>Loading...</h2>;
  }
  const handleBooking = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const bookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );

    const newBooking = {
      carId: car?.id,
      carName: car?.name,
      carImage: car?.image,

      name: booking.name,
      phone: booking.phone,
      email: booking.email,
      date: booking.date,
    };

    bookings.push(newBooking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );

    alert(
      `Test Drive Booked Successfully for ${car?.name}`
    );

    setBooking({
      name: "",
      phone: "",
      email: "",
      date: "",
    });

    setShowForm(false);
  };



  return (
    <section className="car-details">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaCarSide />
      </button>
      <div className="viewer-section">
        <CarViewer model="/models/car.glb" />
      </div>

      <div className="car-info">
        <div className="header">
          <h1>{car.name}</h1>

          <button
            className="favorite-btn"
            onClick={toggleFavorite}
          >
            {favorite ? "❤️" : "🤍"}
          </button>
        </div>

        <h2>{car.price}</h2>

        <div className="quick-info">
          <span>{car.year}</span>
          <span>{car.fuel}</span>
          <span>{car.transmission}</span>
        </div>

        <div className="specs">
          <div>
            <span>Year</span>
            <p>{car.year}</p>
          </div>

          <div>
            <span>Fuel</span>
            <p>{car.fuel}</p>
          </div>

          <div>
            <span>Transmission</span>
            <p>{car.transmission}</p>
          </div>

          <div>
            <span>Engine</span>
            <p>{car.engine}</p>
          </div>

          <div>
            <span>Mileage</span>
            <p>{car.mileage}</p>
          </div>

          <div>
            <span>Horsepower</span>
            <p>{car.horsepower}</p>
          </div>

          <div>
            <span>Top Speed</span>
            <p>{car.topSpeed}</p>
          </div>

          <div>
            <span>Color</span>
            <p>{car.color}</p>
          </div>
        </div>

        <p className="description">
          {car.description}
        </p>

        <h3>Features</h3>

        <div className="features">
          {car.features.map((feature, index) => (
            <span
              key={index}
              className="feature-tag"
            >
              ✓ {feature}
            </span>
          ))}
        </div>
        <div className="main-image">
          <img src={mainImage} alt={car.name} />
        </div>
        <h3>Gallery</h3>

        <div className="gallery">
          {car.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${car.name}-${index}`}
              className={
                mainImage === img ? "active" : ""
              }
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        <button
          className="book-btn"
          onClick={() => setShowForm(true)}
        >
          Book Test Drive
        </button>
        {showForm && (
          <form
            className="booking-form"
            onSubmit={handleBooking}
          >
            <h3>Book Test Drive</h3>

            <input
              type="text"
              placeholder="Full Name"
              required
              value={booking.name}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  name: e.target.value,
                })
              }
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={booking.phone}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  phone: e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={booking.email}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  email: e.target.value,
                })
              }
            />

            <input
              type="date"
              required
              value={booking.date}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  date: e.target.value,
                })
              }
            />

            <button
              type="submit"
              className="submit-btn"
            >
              Confirm Booking
            </button>
          </form>
        )}
        <h3>You May Also Like</h3>

        <div className="related-cars">
          {relatedCars.map((related) => (
            <Link
              key={related.id}
              to={`/car/${related.id}`}
              className="related-card"
            >
              <img
                src={related.image}
                alt={related.name}
              />

              <h4>{related.name}</h4>

              <p>{related.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarDetails;