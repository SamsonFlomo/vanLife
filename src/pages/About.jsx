import { Link } from "react-router-dom";
import heroImg from "/images/about-hero.png";


function About() {
  return (
    <main className="main about-page">
      <section className="content-wrapper">
        <img
          src={heroImg}
          alt="A man sitting on top of a van"
          className="about-img"
        />
        <div className="about-content">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
          <div className="about-go">
            <h2>Your destination is waiting.
              Your van is ready.</h2>
            <button
              className="action-btn secondary-btn"
            >
              <Link to="../vans">
                Explore Our Vans
              </Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}


export default About;
