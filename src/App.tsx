import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Favorites from "./pages/Favorites";
import MyBookings from "./pages/MyBookings";
import Cars from "./pages/Cars";
import Rent from "./pages/Rent";
import Buy from "./pages/Buy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cars" element={<Cars />} />

        <Route path="/rent" element={<Rent />} />

        <Route path="/buy" element={<Buy />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/car/:id" element={<CarDetails />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/bookings" element={<MyBookings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;