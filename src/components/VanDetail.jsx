import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";


function VanDetail() {
  const { vanDetails } = useOutletContext();
  const [vanDetail, setVanDetail] = useState(vanDetails);
  const {
    name,
    description,
    type,
  } = vanDetail || {};
  const params = useParams();


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
