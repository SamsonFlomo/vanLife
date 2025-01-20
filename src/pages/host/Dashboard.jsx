import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs"

const detail = <Link>Details</Link>;


function Dashboard() {
  return (
    <section className="dashboard first-level-nest flex-column">
    <div className="wrapper">
      <div className="info-bar row-wrapper flex-row">
        <div className="welcome flex-column">
          <h1>Welcome</h1>
          <p className="light-black-color">
            Income last <span className="bold underline">30 days</span>
          </p>
          <p className="bold total-income">$2,260</p>
        </div>
        <Link to="">Details</Link>
      </div>
      <div className="dashboard-reviews row-wrapper flex-row">
        <div className="review-score flex-row">
          <h3>Review Score</h3>
          <span className="dashboard-rating"><span className="bold"><BsStarFill className="rating small" />5.0</span>/5</span>
        </div>
        <Link to="">Details</Link>
      </div>
      </div>
     
      <div className="vans-list flex-column">
       <div className="vans-list-header row-wrapper flex-row">
          <h3>Your listed Vans</h3>
        <Link to="">View all</Link>
       </div>
        <div className="listed-van row-wrapper flex-row">
          <div className="van-info flex-row">
            <img src="./images/about-hero.png" alt="image" />
            <div className="info">
              <h3>Van Name</h3>
              <p>$70/day</p>
            </div>
          </div>
          <button className="edit-btn">Edit</button>
        </div>
      </div>
    </section>
  )
}


export default Dashboard;
