import { useCallback } from "react";
import { Link } from "react-router-dom";


function Header ({navLinks}) {
  const renderNavLinks = useCallback(
    () =>
      navLinks.map(({ name, url, className }) => (
        <Link key={url} to={url} className={`nav-link ${className}`}>
          <h2>{name}</h2>
        </Link>
      )),
    [navLinks]
  );


  return (
   <header className="header">
     <nav className="nav">{renderNavLinks()}</nav>
   </header>
  );
}


export default Header;
