import { BsStarFill } from "react-icons/bs";
import graphImg from "/images/reviews-graph.png";


function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ]
  const reviewElements = reviewsData.map(({ name, rating, text, date, id }) => (
    <div className={`added-review ${id} flex-column`} key={id}>
      <div className="review-stars">
        {[...Array(rating)].map((_, i) => (
          <BsStarFill className="rating" key={i} />
        ))}
      </div>
      <p className="bold">{name} <span className="light-black-color">{date}</span></p>
      <p>{text}</p>
    </div>
  ));


  return (
    <section className="reviews first-level-nest flex-column">
      <div className="reviews-header">
        <h1>Reviews Page</h1>
        <p className="light-black-color">
          Last <span className="bold underline">30 days</span>
        </p>
      </div>

      <img src={graphImg} alt="Reviews rating graph" />

      <div className="all-reviews flex-column">
        <h3>Reviews ({reviewsData.length})</h3>
        {reviewElements}
      </div>
    </section>
  )
}



export default Reviews;
