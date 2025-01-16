import { useEffect, useState } from "react";
import { getVans } from "../../utils";
import { Link } from "react-router-dom";


function HostVans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    const fetchVans = () => {
      getVans(setHostVans, "/api/host/vans");
    };

    fetchVans();
  }, []);

  const hostVansElements = hostVans?.map(({ id, name, price, description, type, imageUrl }) => (
    <Link 
      to={`/host/vans/${id}`}
      key={id} 
      className={`host-van-link ${name}`}
    >
    <img src={imageUrl} alt={`The image of ${name}`} />
    <div className="van-info">
      <h3>{name}</h3>
      <p className="bold">${price}<span className="day">/day</span></p>
    </div>
    </Link>
  ))


  return (
    <main className="main van-page">
      <section className="content-wrapper">

        {hostVans.length > 0 ? (
          <>
            {hostVansElements}
          </>
        ) : (
          <h1>Vans loading...</h1>
        )}
      </section>
    </main>
  )
}



export default HostVans;


