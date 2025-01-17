import { Outlet } from "react-router-dom";
import { renderListLinks } from "../../utils";

function HostLayout({ hostViews = [] }) {

  return (
    <main className="main host-page">
      <section className="content-wrapper">
        <nav className="host-nav">
          <ul className="nav-list flex-row">
            {renderListLinks(hostViews)}
          </ul>
        </nav>
        <Outlet />
      </section>
    </main>
  );
}

export default HostLayout;

