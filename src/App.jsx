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
        url: "/",
        component: <Home />,
        isNav: true,
      },
      {
        name: "Host",
        url: "/host",
        component: <HostLayout />,
        isNav: true,
      },
      {
        name: "About",
        url: "/about",
        component: <About />,
        isNav: true,
      },
      {
        name: "Vans",
        url: "/vans",
        component: <Vans vans={vans} />,
        isNav: true,
      },
      {
        name: "Van",
        url: "/vans/:id",
        component: <Van vans={vans} />,
        isNav: false,
      },
    ];
  }, [vans]);

  // Host-specific views
  const hostViews = useCallback(() => {
    return [
      {
        name: "Dashboard",
        url: "/host",
        component: <Dashboard />,
      },
      {
        name: "Income",
        url: "/host/income",
        component: <Income />,
      },
      {
        name: "Reviews",
        url: "/host/reviews",
        component: <Reviews />,
      },
    ];
  }, []);

  return (
    <BrowserRouter basename="/vanLife">
      <Routes>
        {/* Main Layout */}
        <Route element={<Layout pages={routes()} />}>
          {/* Main Routes */}
          {renderRoutes(routes())}

          {/* Host Routes */}
          <Route
            path="/host"
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

