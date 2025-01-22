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

function highlightActiveFilterBtn(setState, type){
  setState((prevState) =>
      prevState.map((item) => {
        if (item.name === type) {
          return {
            ...item,
            active: true,
          };
        }
        return {
          ...item,
          [type]: false,
        };;
      })
    );
}

function resetStateProperty(state, setState, propertyStr) {
  if (!state || (typeof state !== "object" && !Array.isArray(state))) {
    console.error("Invalid state: statresetStatePropertye should be an object or array");
    return;
  }

  if (!Array.isArray(state)) {
    setState((prevState) => ({
      ...prevState,
      [propertyStr]: false,
    }));
  } else {
    setState((prevState) =>
      prevState.map((item) => {
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
    if (!component) return;
    return <Route
      key={url || key}
      {...(url === "" ? { index: true } : { path: url })}
      element={component}
    />
  });
};

function renderListLinks(linkArray) {
  return linkArray.map(({ name, url, forClass, end, isNav }, key) => {
    if (!isNav) return;
    return <li key={url || key}>
      <NavLink
        to={url}
        {...(end && { end: end })}
        className={`nav-link ${forClass ? forClass : ""}`}
      >
        {name}
      </NavLink>
    </li>
  });
}

async function getVans(setState, url) {
  if (typeof setState !== "function" || typeof url !== "string") {
    console.error("Invalid arguments passed to getVans");
    return;
  }

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    setState(data.vans || []);

  } catch (error) {
    console.error("Error fetching vans:", error.message || error);
  }
}


function handleChange(e, setState) {
  const { name, value } = e.target;
  setState((prevState) => ({
    ...prevState,
    [name]: value,
  }));

}





export {
  toggleStateProperty,
  resetStateProperty,
  renderRoutes,
  renderListLinks,
  getVans,
  handleChange,
  highlightActiveFilterBtn,
};





