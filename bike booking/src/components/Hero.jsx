import "./Hero.css";
import bike from "../assets/bike.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Find Your Perfect Ride</h1>

        <p>
          Explore premium bikes and book your favorite one in just a few clicks.
        </p>

        <button onClick={() =>
              document.getElementById("featured").scrollIntoView({
               behavior: "smooth", })
         }>Explore Bikes</button>
      </div>

      <div className="hero-image">
        <img src={bike} alt="Bike" />
      </div>
    </section>
  );
}

export default Hero;