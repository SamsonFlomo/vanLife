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
      className={`listed-van row-wrapper flex-row ${name}`}
    >
          <div className="van-info flex-row">
            <img src={imageUrl} alt={`The image of ${name}`} />
            <div className="info">
              <h3>{name}</h3>
              <p className="bold">${price}<span className="day">/day</span></p>
            </div>
     </div>
    </Link>
  ))


  return (
    <section className="host-vans first-level-nest flex-column">
    <div className="vans-list flex-column">
       <div className="vans-list-header row-wrapper flex-row">
          <h1>Your listed Vans</h1>
       </div>
        
          {hostVans.length > 0 ? (
          <>
            {hostVansElements}
          </>
        ) : (
          <h1>Vans loading...</h1>
        )}
      </div>
        
    </section>
  )
}



export default HostVans;


