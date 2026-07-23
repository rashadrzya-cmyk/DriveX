import { useEffect, useState } from "react";
import "./MyBookings.css";

type Booking = {
  carId: number;
  carName: string;
  carImage: string;

  name: string;
  phone: string;
  email: string;
  date: string;
};

function MyBookings() {
  const [bookings, setBookings] = useState<
    Booking[]
  >([]);

  useEffect(() => {
    const storedBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );

    setBookings(storedBookings);
  }, []);

  return (
    <section className="bookings-page">
      <h1>My Bookings 🚗</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="bookings-grid">
          {bookings.map(
            (booking, index) => (
              <div
                key={index}
                className="booking-card"
              >
                <img
                  src={booking.carImage}
                  alt={booking.carName}
                />

                <h3>{booking.carName}</h3>

                <p>
                  <strong>Name:</strong>{" "}
                  {booking.name}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {booking.phone}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {booking.email}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {booking.date}
                </p>
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
}

export default MyBookings;