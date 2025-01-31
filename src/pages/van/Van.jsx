import { Link, useParams, useLocation, } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVans } from "../../utils";


function Van({ vans }) {
  const [vanDetails, setVanDetails] = useState({});
  const { id, name, price, description, imageUrl, type } = vanDetails || {};
  const params = useParams();
  const location = useLocation();
  const searchParams = location.state.search; 
  const filterType = location.state?.type || "all";

   useEffect(() => {
    const fetchVans = () => {
      getVans(setVanDetails, `/api/vans/${params.id}`);
    };

    fetchVans();
  }, []);
  
  
  return (
    <main className="main van-page">
      <section className="content-wrapper">
        <Link 
          to={`..?${searchParams}`} 
          className="back-link light-bold"
          relative="path"
        >
          ← Back to {filterType} Vans
        </Link>

        {id ? (
          <>
            <img src={imageUrl} alt={`Photo of ${name}`} />

            <div className="van-info">
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
    </main>
  );
}

export default Van;
