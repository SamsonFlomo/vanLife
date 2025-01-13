import { Outlet } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";



function Layout ({navLinks}) {
  return (
    <>
      <Header navLinks={navLinks} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout;
