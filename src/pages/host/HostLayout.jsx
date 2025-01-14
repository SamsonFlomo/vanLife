import { Outlet } from "react-router-dom";
import { renderLinks } from "../../utils";

function HostLayout({ hostViews = [] }) {

  return (
    <main className="main host-layout-page">
      <section className="content-wrapper">
        <nav className="nav">
          <ul className="nav-list">
            {renderLinks(hostViews)}
          </ul>
        </nav>
        <Outlet />
      </section>
    </main>
  );
}

export default HostLayout;

