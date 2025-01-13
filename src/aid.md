I'm getting this error.

"id" in van.jsx undefined. help me trace and solve it.
You can ask me clarifying questions if necessary.

here's my code:

Van.jsx:
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Van({ vans }) {
  const [ vanDetails, setVanDetails ] = useState({});
  const { id, name, price, description, imageUrl, type } = vanDetails;
    console.log("vanDetails: ", vanDetails)
  const params = useParams();
  
  useEffect(() => {
    const cleanFunction = async () => {
      const vanUrl = `/api/vans/${params.id}`
      try{
        const van = vans.find(van => van.id === params.id)
        setVanDetails(van);
      } catch(e) {
        console.log("Problem findinding match: ", e);
      }
    }
    
    return cleanFunction;
  }, [params.id])

  return (
    <main className="main van-page">
      <section className="content-wrapper">
        <Link 
          to="/vans" 
          className="back-link"
        >← Back to all Vans</Link>

       
        
        { vanDetails.id ?
          (
          <>
           <img src={imageUrl} alt={`Photo of ${name}`} />

        <div className="van-info">
          <div className={`van-type ${type}`}>
            <span>{type}</span>
          </div>
          <h1>{name}</h1>
          <p className="bold">${price}<span className="day">/day</span></p>
          <p>{description}</p>
        </div>

        <button className="primary-btn">
          <Link to="/vans">
            Rent This Van
          </Link>
        </button>
          </>
          )
          :
          <h1>Vans loading...</h1>
        }
      </section>
    </main>
  )
}


export default Van;


App.jsx:
import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Van from "./pages/Van";
import Layout from "./components/Layout.jsx";
import "./server";

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
          { vans !== {} && <Route path="/vans/:id" element={<Van vans={vans}/>} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;

