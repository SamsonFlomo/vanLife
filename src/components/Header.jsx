import { useCallback } from "react";
import { NavLink } from "react-router-dom";


function Header({ pages }) {
  
  
  const renderNavLinks = useCallback(
    () => {
      const allNavLinks = pages.filter(({ isNav }) => isNav);
      
      return allNavLinks.map(({ name, url, forClass, end }) => (
        <NavLink 
          key={url} 
          to={url} 
          className={`nav-link ${forClass}`}
          {...(end && {end: end})}
        >
          <h2>{name}</h2>
        </NavLink>
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
