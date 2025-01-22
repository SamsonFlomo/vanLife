import { Link, useSearchParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { toggleStateProperty, highlightActiveFilterBtn } from "../../utils";

function Vans({ vans }) {
  const [localVans, setLocalVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const typeFilter = searchParams.get("type");

  const [types, setTypes] = useState([
    { name: "simple", active: false, id: 1, clear: false },
    { name: "luxury", active: false, id: 2, clear: false },
    { name: "rugged", active: false, id: 3, clear: false },
    { name: "clear-filters", active: false, id: 0, clear: true },
  ]);
  
  useEffect(() => {
    setLocalVans(vans); 
    highlightActiveFilterBtn(setTypes, typeFilter)
  }, [vans]);

  function filterVans(filterType, id) {
    switch (filterType) {
      case "simple":
        setSearchParams(prevVal => ({ ...prevVal, type:"simple", }));
        toggleStateProperty(types, setTypes, "active", id);
        break;

      case "luxury":
        setSearchParams(prevVal => ({ ...prevVal, type:"luxury", }));
        toggleStateProperty(types, setTypes, "active", id);
        break;

      case "rugged":
        setSearchParams(prevVal => ({ ...prevVal, type:"rugged", }));
        toggleStateProperty(types, setTypes, "active", id);
        break;

      case "clear-filters":
        setLocalVans(vans);
        setSearchParams(prevVal => ({ ...prevVal, type:"", }));
        setTypes((prevTypes) =>
          prevTypes.map((type) => ({ ...type, active: false }))
        );
        break;

      default:
        console.error("Invalid filter type:", filterType);
        setLocalVans(vans); // Default to all vans
    }
  }

  const filterVansElements = useCallback(
    () =>
      types.map(({ name, id, active, clear }) => (
        <button
          className={`${clear ? name : "filter-btn"} ${active ? name : ""}`}
          key={id}
          id={`btn-${id}`}
          onClick={() => filterVans(name, id)}
        >
          {name.toUpperCase()}
        </button>
      )),
    [types, filterVans, typeFilter]
  );

  const vansElements = (typeFilter 
    ? localVans
    .filter(({ type }) => type === typeFilter) :
    localVans )
    .map(({ id, name, price, type, imageUrl }) => (
    <Link
      to={`/vans/${id}`}
      className="van-card"
      aria-label={`View details for ${name} at price ${price} per day.`}
      key={id}
    >
      <img src={imageUrl} alt={`Photo of ${name}`} />
      <div className="van-info">
        <h3>{name}</h3>
        <p>
          ${price}
          <span className="day">/day</span>
        </p>
      </div>
      <div className={`van-type ${type}`}>
        <span>{type}</span>
      </div>
    </Link>
  ));

  return (
    <main className="main vans-page">
      <section className="content-wrapper">
        <h1>Explore Our Vans Options</h1>
        <div className="van-filters">{filterVansElements()}</div>
        <div className="vans-wrapper">{vansElements}</div>
      </section>
    </main>
  );
}

export default Vans;

