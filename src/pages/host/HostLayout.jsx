import { Outlet } from "react-router-dom";
import { renderListLinks } from "../../utils";

function HostLayout({ hostViews = [] }) {

  return (
    <main className="main host-layout-page">
      <section className="content-wrapper">
        <nav className="nav">
          <ul className="nav-list">
            {renderListLinks(hostViews)}
          </ul>
        </nav>
        <Outlet />
      </section>
    </main>
  );
}

export default HostLayout;

