import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVans } from "../../utils";


function Van({ vans }) {
  const [vanDetails, setVanDetails] = useState({});
  const { id, name, price, description, imageUrl, type } = vanDetails || {};
  const params = useParams();

  useEffect(() => {
    const fetchVans = () => {
      getVans(setVanDetails, `/api/vans/${params.id}`);
    };

    fetchVans();
  }, []);

  return (
    <section className="host-van-detail first-level-nest flex-column">
        <Link to="/host/vans/" className="back-link underline">
          ← Back to all Vans
        </Link>

        {id ? (
          <>
            <img src={imageUrl} alt={`Photo of ${name}`} />

            <div className="van-info flex-column">
              <div className={`van-type ${type}`}>
                <span>{type}</span>
              </div>
              <h1>{name}</h1>
              <p className="bold">${price}<span className="day">/day</span></p>
              <p>{description}</p>
            </div>

            <button className="primary-btn">
              <Link to="/vans">Rent This Van</Link>
            </button>
          </>
        ) : (
          <h1>Vans loading...</h1>
        )}
      </section>
  );
}

export default Van;
