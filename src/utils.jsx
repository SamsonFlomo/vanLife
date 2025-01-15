import { Route, NavLink } from "react-router-dom";


const toggleStateProperty = (state, setState, propertyStr, objectItemId) => {
  if (!state || (typeof state !== "object" && !Array.isArray(state))) {
    console.error("Invalid state: state should be an object or array");
    return;
  }

  if (!Array.isArray(state)) {
    setState((prevState) => ({
      ...prevState,
      [propertyStr]: !prevState[propertyStr],
    }));
  } else {
    setState((prevState) =>
      prevState.map((item) => {
        if (item.id === objectItemId) {
          return {
            ...item,
            [propertyStr]: !item[propertyStr],
          };
        }
        return {
            ...item,
            [propertyStr]: false,
          };;
      })
    );
  }
};


  function renderRoutes(routeArray) {
    return routeArray.map(({ url, component }, key) => {
      if(!component) return;
      return <Route 
        key={url || key} 
        {...(url === "" ? { index: true } : { path: url })}
        element={component} 
      />
    });
  };
  
  function renderListLinks(linkArray) {
    return linkArray.map(({ name, url, forClass, end }, key) => (
    <li key={url || key}>
      <NavLink 
        to={url} 
        {...(end && {end: end})}
        className={`nav-link ${forClass ? forClass : ""}`}
      >
        {name}
      </NavLink>
    </li>
  ));
  }
  
  

export { 
  toggleStateProperty,
  renderRoutes,
  renderListLinks,
};





