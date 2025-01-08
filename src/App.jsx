import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'


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
          Find your van
        </button>
      </section>
    </main>
  )
}

function About() {
  return (
    <main className="main about-page">
      <section className="content-wrapper">
        <img
          src="/vanlife.png"
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
            <button className="secondary-btn">Explore our vans</button>
          </div>
        </div>
      </section>
    </main>
  )
}

function Vans() {
  return (
    <main className="main vans-page">
      <section className="content-wrapper">
        <h1>Vans Page</h1>
      </section>
    </main>
  )
}


function App() {
  const [links, setLinks] = useState([
    {
      name: "#VanLife",
      url: "/vanLife",
      component: (<Home />),
      class: "home-link",
    },
    {
      name: "About",
      url: "/about",
      component: (<About />),
      class: "about-link",
      active: false,
    },
    {
      name: "Vans",
      url: "/vans",
      component: (<Vans />),
      class: "vans-link",
      active: false,
    },
  ])

  const navElements = links.map((element, key) => {
    return (
      <Link
        key={key}
        to={element.url}
        className={`nav-link ${element.class} ${element.active ? "active" : ""}`}
      >
        <h2>{element.name}</h2>
      </Link>
    )
  })

  const routCollections = links.map((tag, key) => {
    return (
      <Route
        path={tag.url}
        key={key}
        element={tag.component}
      />
    )
  })


  return (
    <BrowserRouter>
      <nav className="nav">
        {navElements}
      </nav>
      <Routes>
        {routCollections}
      </Routes>
      <footer className="footer">Ⓒ 2025 #VANLIFE</footer>
    </BrowserRouter>
  )
}

export default App;
