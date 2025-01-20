import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVans } from "../utils";


function VanDetail() {
  const [vanDetail, setVanDetail] = useState({});
  const {
    name,
    description,
    type,
  } = vanDetail || {};
  const params = useParams();
  
  console.log(vanDetail);

  useEffect(() => {
    const fetchVans = () => {
      getVans(setVanDetail, `/api/vans/${params.id}`);
    };

    fetchVans();
  }, []);



  return (
    <div className="first-level-nest van-detail-collection flex-column">
      <p><span className="bold">Name:</span> {name}</p>
      <p><span className="bold">Category:</span> {type}</p>
      <p><span className="bold">Description:</span> {description}</p>
      <p><span className="bold">Visibility:</span> Public</p>
    </div>
  )
}


export default VanDetail;
