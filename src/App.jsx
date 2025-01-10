import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { toggleStateProperty } from './utils';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import "./server"

import Van from "./components/Van";


function App() {


  /**
   * Challenge: Fetch and map over the data to display it on
   * the vans page. For an extra challenge, spend time styling
   * it to look like the Figma design.
   * 
   * Hints:
   * 1. Use `fetch("/api/vans")` to kick off the request to get the
   *    data from our fake Mirage JS server
   * 2. What React hook would you use to fetch data as soon as the
   *    Vans page loads, and only fetch it the one time?
   */

  const [vans, setVans] = useState([])
  
  useEffect(() => {
    const cleanup = async () => {
      try {
        const res = await fetch("/api/vans")
        const data = await res.json()
        setVans(data.vans)
      } catch (error) {
        console.log(error)
      }
    }

    return cleanup
  }, [])
  
  
  const [navElements, setNavElements] = useState([
    {
      name: "#VanLife",
      url: "/vanLife/",
      id: "home-link",
      component: (<Home />),
      class: "home-link",
    },
    {
      name: "About",
      id: "about-link",
      url: "/vanLife/about/",
      component: (<About />),
      class: "about-link",
      active: false,
    },
    {
      name: "Vans",
      id: "vans-link",
      url: "/vanLife/vans/",
      class: "vans-link",
      active: false,
    },
    {
      name: "Van",
      id: "van-link",
      url: "/vanLife/van/",
      component: (<Van />),
      class: "van-link",
      active: false,
    },
  ])


  
  
  
  // FUNCTIONS
  const handleNavLinkClick = (e) => {
    const id = e.target.id ? e.target.id : "No Id";
    toggleStateProperty(navElements, setNavElements, "active", id);
  }


  // ELEMENTS 
  const AllNavElements = navElements.map((element) => {
    return (
      <Link
        key={element.id}
        to={element.url}
        className={`nav-link ${element.class} ${element.active ? "active" : ""}`}
        onClick={(e) => handleNavLinkClick(e)}
      >
        <h2 id={element.id}>{element.name}</h2>
      </Link>
    )
  })

  const routCollections = navElements.map((tag, key) => {
    if(!tag.component) return;
    return (
      <Route
        path={tag.url}
        key={key}
        element={tag.component}
      />
    )
  })

navElements[2].url
  // RENDER 
  return (
    <BrowserRouter>
      <nav className="nav">
        {AllNavElements}
      </nav>
      <Routes>
        {routCollections}
        <Route
        path="/vanLife/vans/"
        element={
        <Vans
          vans={vans}
        />
        }
      />
      </Routes>
      <footer className="footer">Ⓒ 2025 #VANLIFE</footer>
    </BrowserRouter>
  )
}

export default App;
