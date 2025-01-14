import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Van({ vans }) {
  const [vanDetails, setVanDetails] = useState({});
  const { id, name, price, description, imageUrl, type } = vanDetails || {};
  const params = useParams();

  useEffect(() => {
    const fetchVanDetails = async () => {
      try {
        if (Array.isArray(vans)) {
          const van = vans.find(van => String(van.id) === params.id);
          if (van) {
            setVanDetails(van);
          } else {
            console.error("Van not found.");
          }
        } else {
          console.error("Vans is not an array:", vans);
        }
      } catch (e) {
        console.error("Error finding van:", e);
      }
    };

    fetchVanDetails();
  }, [params.id, vans]);

  return (
    <main className="main van-page">
      <section className="content-wrapper">
        <Link to="/vans" className="back-link">
          ← Back to all Vans
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
