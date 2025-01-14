import { useCallback } from "react";
import { Link } from "react-router-dom";


function Header({ pages }) {
  
  
  const renderNavLinks = useCallback(
    () => {
      const allNavLinks = pages.filter(({ isNav }) => isNav);
      
      return allNavLinks.map(({ name, url, className }) => (
        <Link key={url} to={url} className={`nav-link ${className}`}>
          <h2>{name}</h2>
        </Link>
      ))
      },
    [pages]
  );


  return (
    <header className="header">
      <nav className="nav">{renderNavLinks()}</nav>
    </header>
  );
}


export default Header;
