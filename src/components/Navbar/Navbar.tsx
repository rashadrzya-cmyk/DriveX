import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [bookingsCount, setBookingsCount] = useState(0);
  useEffect(() => {
    const updateCounts = () => {
      const favorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

      const bookings = JSON.parse(
        localStorage.getItem("bookings") || "[]"
      );

      setFavoritesCount(favorites.length);
      setBookingsCount(bookings.length);
    };

    updateCounts();

    window.addEventListener(
      "storage",
      updateCounts
    );

    return () => {
      window.removeEventListener(
        "storage",
        updateCounts
      );
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        Drive<span>X</span>
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/cars">Cars</Link>
        </li>

        <li>
          <Link to="/rent">Rent</Link>
        </li>

        <li>
          <Link to="/buy">Buy</Link>
        </li>

        <li>
          <Link to="/favorites">
            Favorite ❤️ ({favoritesCount})
          </Link>
        </li>

        <li>
          <Link to="/bookings">
            Bookings ({bookingsCount})
          </Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>


      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>
    </nav>
  );
}

export default Navbar;




