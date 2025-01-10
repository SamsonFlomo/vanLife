import { Link } from "react-router-dom"


function Vans({ vans }) {
  console.log("Vans-in-Vans", vans)
  const types = [
    "simple",
    "luxury",
    "rugged"
  ]

  const vansElements = vans.map((van) => {
    return (
      <Link
        to={`/vanLife/vans/${van.id}`}
        className="van-card"
        key={van.id}
      >
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>{van.price}<span className="day">/day</span></p>
        </div>
        <div className={`van-type ${van.type}`}>
          <span>{van.type}</span>
        </div>
      </Link>
    )
  })

  const filterVansElements = types.map((type) => {
    return (
      <button
        className={`filter-btn`}
        key={type}
      >
        {type.toUpperCase()}
      </button>
    )
  })

  return (
    <main className="main vans-page">
      <section className="content-wrapper">
        <h1>Explore Our Vans Options</h1>
        <div className="van-filters">
          {filterVansElements}
          <button className="clear-filters">Clear Filters</button>
        </div>
        <div className="vans-wrapper">
          {vansElements}
        </div>
      </section>
    </main>
  )
}


export default Vans;
