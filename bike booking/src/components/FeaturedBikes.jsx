import "./FeaturedBikes.css";
import BikeCard from "./BikeCard";

import bike1 from "../assets/bike1.jpg";
import bike2 from "../assets/bike2.jpg";
import bike3 from "../assets/bike3.jpg";

function FeaturedBikes() {
  return (
    <section className="featured" id="featured">
      <h2>Featured Bikes</h2>

      <div className="bike-grid">
        <BikeCard image={bike1} name="Royal Enfield Himalayan 450" price="999" />
        <BikeCard image={bike2} name="KTM Duke 390" price="1499" />
        <BikeCard image={bike3} name="Royal Enfield Hunter 350" price="1299" />
      </div>
    </section>
  );
}

export default FeaturedBikes;