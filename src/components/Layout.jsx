import { Outlet } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";



function Layout ({pages}) {
  return (
    <>
      <Header pages={pages} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout;
