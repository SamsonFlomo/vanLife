import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Van from "./pages/Van";
import Layout from "./components/Layout.jsx";
import "./server";

function Host () {
  return (
    <h1>Host Page</h1>	
  )
}

function App() {
  const [vans, setVans] = useState([]);

  // Fetch vans data once on load
  useEffect(() => {
    const fetchVans = async () => {
      try {
        const res = await fetch("/api/vans");
        const data = await res.json();
        console.log("DATA:   :", data)
        setVans(data.vans);
      } catch (error) {
        console.error("Error fetching vans:", error);
      }
    };

    fetchVans();
  }, []);

  // Navigation links
  const navLinks = [
    { name: "#VanLife", url: "/", component: <Home />, className: "home-link" },
    { name: "Host", url: "/host", component: <Host />, className: "host-link" },
    { name: "About", url: "/about", component: <About />, className: "about-link" },
    { name: "Vans", url: "/vans", component: <Vans vans={vans} />, className: "vans-link" },
  ];


  // Render routes dynamically
  const renderRoutes = useCallback(
    () =>
      navLinks.map(({ url, component }) => (
        <Route key={url} path={url} element={component} />
      )),
    [navLinks]
  );

  console.log(vans);
  return (
    <BrowserRouter basename="/vanLife">
      <Routes>
        <Route element={<Layout navLinks={navLinks} />} >
          {renderRoutes()}
          <Route path="/vans/:id" element={vans.length ? <Van vans={vans} /> : <h1>Loading...</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
