import { useParams, useOutletContext  } from "react-router-dom";
import { useEffect, useState } from "react";



function VanPrice() {
  const { vanDetails } = useOutletContext();
  const [vanDetail, setVanDetail] = useState(vanDetails);
  const {
    price
  } = vanDetail || {};
  const params = useParams();



  return (

    <div className="first-level-nest van-price-collection">
      <span>
        <span className="title">${price}.00</span><span className="light-black-color bold">/day</span>
      </span>
    </div>
  )
}


export default VanPrice;


