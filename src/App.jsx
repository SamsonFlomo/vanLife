import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { toggleStateProperty } from './utils';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';


function App() {
  const [navElements, setnavElements] = useState([
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
      url: "vanLife/about",
      component: (<About />),
      class: "about-link",
      active: false,
    },
    {
      name: "Vans",
      id: "vans-link",
      url: "vanLife/vans",
      component: (<Vans />),
      class: "vans-link",
      active: false,
    },
  ])


  // FUNCTIONS
  const handleNavLinkClick = (e) => {
    const id = e.target.id ? e.target.id : "No Id";
    toggleStateProperty(navElements, setnavElements, "active", id);
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
    return (
      <Route
        path={tag.url}
        key={key}
        element={tag.component}
      />
    )
  })


  // RENDER 
  return (
    <BrowserRouter>
      <nav className="nav">
        {AllNavElements}
      </nav>
      <Routes>
        {routCollections}
      </Routes>
      <footer className="footer">Ⓒ 2025 #VANLIFE</footer>
    </BrowserRouter>
  )
}

export default App;
