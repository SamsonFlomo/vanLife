import { Route, Link } from "react-router-dom";


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
    return routeArray.map(({ url, component }) => (
      <Route key={url} path={url} element={component} />
    ));
  };
  
  function renderLinks(linkArray) {
    return linkArray.map(({ name, url, className }) => (
    <li key={url}>
      <Link to={url} className={`nav-links ${className}`}>
        {name}
      </Link>
    </li>
  ));
  }
  
  

export { 
  toggleStateProperty,
  renderRoutes,
  renderLinks,
};





