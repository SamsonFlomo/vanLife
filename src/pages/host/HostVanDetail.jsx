import { Link, useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVans, renderListLinks } from "../../utils";


function HostVanDetail({ hostVansDetailViews }) {
  const [vanDetails, setVanDetails] = useState({});
  const {
    id,
    name,
    price,
    description,
    imageUrl,
    type,
    visibility
  } = vanDetails || {};
  const params = useParams();

  useEffect(() => {
    const fetchVans = () => {
      getVans(setVanDetails, `/api/vans/${params.id}`);
    };

    fetchVans();
  }, []);

  return (
    <section className="host-van-detail first-level-nest flex-column">
      <Link 
          to=".." 
          className="back-link light-bold"
          relative="path"
        >
        ← Back to all Vans
      </Link>

      {id ? (
        <>
          <div className="flex-row van-detail-wrapper">

            <img src={imageUrl} alt={`Photo of ${name}`} />

            <div className="van-info flex-column">
              <div className={`van-type ${type}`}>
                <span>{type}</span>
              </div>
              <h1>{name}</h1>
              <p className="bold">${price}<span className="day">/day</span></p>
            </div>
          </div>

          <nav className="host-nav">
            <ul className="nav-list flex-row hosted-van-detail-nav">
              {renderListLinks(hostVansDetailViews)}
            </ul>
          </nav>

          {/* Outlet fot Van Details */}
          <Outlet context={{ vanDetails }}/>

        </>
      ) : (
        <h1>Vans loading...</h1>
      )}
    </section>
  );
}

export default HostVanDetail;
