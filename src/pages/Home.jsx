import { Link } from "react-router-dom";


function Home() {
  return (
    <main className="main home-page">
      <section className="content-wrapper">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement.
          Rent the perfect van to make your perfect road trip.
        </p>
        <button className="primary-btn">
          <Link to="/vanLife/vans">
            Find Your Van
          </Link>
        </button>
      </section>
    </main>
  )
}


export default Home;
