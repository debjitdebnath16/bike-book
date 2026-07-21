import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Booking.css";

function Booking() {
  const location = useLocation();
  const bike = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    returnDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      bikeName: bike.bikeName,
      price: bike.price,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      pickupDate: formData.pickupDate,
      returnDate: formData.returnDate,
    };

    try {
      const response = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Booking Successful!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          pickupDate: "",
          returnDate: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="booking">
      <div className="booking-container">

        <h1>Book Your Bike</h1>

        <div className="bike-details">
          <h2>{bike.bikeName}</h2>
          <p>₹{bike.price} / day</p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Pickup Date</label>

          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />

          <label>Return Date</label>

          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Confirm Booking
          </button>

        </form>

      </div>
    </div>
  );
}

export default Booking;