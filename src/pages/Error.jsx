import { Link } from "react-router-dom";


function Error() {
  return (
    <main className="main error-page">
      <section className="content-wrapper flex-column">
        <h1>Sorry, the page you are looking for could not be found</h1>
          <Link to="/" className="secondary-btn error-btn">
            Return to Home
          </Link>
      </section>
    </main>
  )
}

export default Error;
