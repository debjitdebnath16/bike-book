import "./Bikes.css";
import BikeCard from "../components/BikeCard";

import bike1 from "../assets/bike1.jpg";
import bike2 from "../assets/bike2.jpg";
import bike3 from "../assets/bike3.jpg";

function Bikes() {
  const bikes = [
    {
      id: 1,
      image: bike1,
      name: "Royal Enfield Himalayan 450",
      brand: "Royal Enfield",
      engine: "450cc",
      price: 999,
    },
    {
      id: 2,
      image: bike2,
      name: "KTM Duke 390",
      brand: "KTM",
      engine: "390cc",
      price: 1499,
    },
    {
      id: 3,
      image: bike3,
      name: "Royal Enfield Hunter 350",
      brand: "Royal Enfield",
      engine: "349cc",
      price: 1299,
    },
  ];

  return (
    <section className="bikes-page">
      <h1>All Bikes</h1>

      <div className="bike-grid">
        {bikes.map((bike) => (
          <BikeCard
            key={bike.id}
            image={bike.image}
            name={bike.name}
            brand={bike.brand}
            engine={bike.engine}
            price={bike.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Bikes;