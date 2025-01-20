import graphImg from "/images/income-graph.png";


function Income() {
  return (
    <section className="income first-level-nest flex-column">
      <div className="welcome flex-column">
        <h1>Income</h1>
        <p className="light-black-color">
          Income last <span className="bold underline">30 days</span>
        </p>
        <p className="bold total-income">$2,260</p>
      </div>

      <img src={graphImg} alt="Reviews rating graph" />

      <div className="vans-list flex-column">
        <div className="vans-list-header row-wrapper flex-row">
          <h2>Your transaction (3)</h2>
        </div>
        <div className="transactions listed-van row-wrapper flex-row">
          <div className="van-info">
            <h3>$720</h3>
          </div>
          <p className="edit-btn">1/12/22</p>
        </div>
      </div>

    </section>
  )
}



export default Income;


