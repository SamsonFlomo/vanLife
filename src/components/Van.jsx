import { Link } from "react-router-dom";


function Van() {
  // typical van object

  const van = { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged" };

  return (
    <main className="main van-page">
      <section className="content-wrapper">
        <Link to="/vanLife/vans" className="back-link">← Back to all Vans</Link>

        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />

        <div className="van-info">
          <div className={`van-type ${van.type}`}>
            <span>{van.type}</span>
          </div>
          <h1>{van.name}</h1>
          <p className="bold">${van.price}<span className="day">/day</span></p>
          <p>{van.description}</p>
        </div>

        <button className="primary-btn">
          <Link to="/vanLife/vans">
            Rent This Van
          </Link>
        </button>
      </section>
    </main>
  )
}


export default Van;
