import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/van/Vans";
import Van from "./pages/van/Van";
import Error from "./pages/Error";
import Login from "./pages/Login";
import HostLayout from "./pages/host/HostLayout";
import Income from "./pages/host/income";
import Reviews from "./pages/host/reviews";
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
import Dashboard from "./pages/host/Dashboard";
import Layout from "./components/Layout";
import VanDetail from "./components/VanDetail";
import VanPrice from "./components/VanPrice";
import VanPhotos from "./components/VanPhotos";
import { renderRoutes, getVans } from "./utils";
import "./server";



function App() {
  const [vans, setVans] = useState([]);

  // Fetch vans data once on load
  useEffect(() => {
    const fetchVans = async () => {
      getVans(setVans, "/api/vans");
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
      {
        name: "Error",
        url: "*",
        component: <Error />,
        forClass: "error-link",
        isNav: false,
      },
      {
        name: "Sign In",
        url: "login",
        component: <Login />,
        forClass: "sign-in-link",
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
        isNav: true,
      },
      {
        name: "Income",
        url: "income",
        component: <Income />,
        forClass: "income-link",
        isNav: true,
      },
      {
        name: "Vans",
        url: "vans",
        component: <HostVans />,
        forClass: "userVans-link",
        isNav: true,
      },
      {
        name: "VanDetail",
        url: "vans/:id",
        forClass: "van-detail-link",
        isNav: false,
      },
      {
        name: "Reviews",
        url: "reviews",
        component: <Reviews />,
        forClass: "reviews-link",
        isNav: true,
      },
    ];
  }, [vans]);


  // Host-Van-Details-Specific views
  const hostVansDetailViews = useCallback(() => {
    return [
      {
        name: "Detail",
        url: "",
        component: <VanDetail />,
        forClass: "detail-link",
        end: true,
        isNav: true,
      },
      {
        name: "Price",
        url: "price",
        component: <VanPrice />,
        forClass: "price-link",
        isNav: true,
      },
      {
        name: "Photos",
        url: "photos",
        component: <VanPhotos />,
        forClass: "photos-link",
        isNav: true,
      },
    ];
  }, [vans]);



  return (
    <BrowserRouter basename="/vanLife/">
      <Routes>
        {/* Main Layout */}
        <Route element={<Layout pages={routes()} />}>
          {/* Main Routes */}
          {renderRoutes(routes())}


          {/* Host Routes */}
          <Route
            path="host"
            element={<HostLayout hostViews={hostViews()} />}
          >
            {renderRoutes(hostViews())}
            <Route
              path="vans/:id"
              element={<HostVanDetail hostVansDetailViews={hostVansDetailViews()} />}
            >
              {renderRoutes(hostVansDetailViews())}
            </Route>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

