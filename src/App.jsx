import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/van/Vans";
import Van from "./pages/van/Van";
import HostLayout from "./pages/host/HostLayout";
import Income from "./pages/host/income";
import Reviews from "./pages/host/reviews";
import UserVans from "./pages/host/UserVans";
import Dashboard from "./pages/host/Dashboard";
import Layout from "./components/Layout.jsx";
import { renderRoutes } from "./utils";
import "./server";



function App() {
  const [vans, setVans] = useState([]);

  // Fetch vans data once on load
  useEffect(() => {
    const fetchVans = async () => {
      try {
        const res = await fetch("/api/vans");
        const data = await res.json();
        setVans(data.vans || []);
      } catch (error) {
        console.error("Error fetching vans:", error);
      }
    };

    fetchVans();
  }, []);

  // Navigation links
  const routes = useCallback(() => {
    return [
      {
        name: "#VanLife",
        url: "",
        component: <Home />,
        forClass: "home-link",
        isNav: true,
        end: true,
      },
      {
        name: "Host",
        url: "host",
        forClass: "host-link",
        isNav: true,
      },
      {
        name: "About",
        url: "about",
        component: <About />,
        forClass: "about-link",
        isNav: true,
      },
      {
        name: "Vans",
        url: "vans",
        component: <Vans vans={vans} />,
        forClass: "vans-link",
        isNav: true,
      },
      {
        name: "Van",
        url: "vans/:id",
        component: <Van vans={vans} />,
        forClass: "van-link",
        isNav: false,
      },
    ];
  }, [vans]);

  // Host-specific views
  const hostViews = useCallback(() => {
    return [
      {
        name: "Dashboard",
        url: "",
        component: <Dashboard />,
        forClass: "dashboard-link",
        end: true,
      },
      {
        name: "Income",
        url: "income",
        component: <Income />,
        forClass: "income-link",
      },
      {
        name: "Vans",
        url: "vans",
        component: <UserVans />,
        forClass: "userVans-link"
      },
      {
        name: "Reviews",
        url: "reviews",
        component: <Reviews />,
        forClass: "reviews-link"
      },
    ];
  }, []);

  return (
    <BrowserRouter basename="/vanLife/">
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout pages={routes()} />}>
          {/* Main Routes */}
          {renderRoutes(routes())}

          {/* Host Routes */}
          <Route
            path="host"
            element={<HostLayout hostViews={hostViews()} />}
          >
            {renderRoutes(hostViews())}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

