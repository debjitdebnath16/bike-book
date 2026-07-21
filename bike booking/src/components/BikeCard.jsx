import { useNavigate } from "react-router-dom";
import "./BikeCard.css";

function BikeCard({ image, name, price }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking", {
      state: {
        bikeName: name,
        price: price,
      },
    });
  };

  return (
    <div className="bike-card">
      <img src={image} alt={name} />

      <div className="bike-info">
        <h3>{name}</h3>

        <p className="price">₹{price} / day</p>

        <button className="book-btn" onClick={handleBooking}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default BikeCard;