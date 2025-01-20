import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVans } from "../utils";



function VanPrice() {
  const [vanDetail, setVanDetail] = useState({});
  const { price } = vanDetail || {};
  const params = useParams();

  useEffect(() => {
    const fetchVans = () => {
      getVans(setVanDetail, `/api/vans/${params.id}`);
    };

    fetchVans();
  }, []);



  return (

    <div className="first-level-nest van-price-collection">
      <span>
        <span className="title">${price}.00</span><span className="light-black-color bold">/day</span>
      </span>
    </div>
  )
}


export default VanPrice;


