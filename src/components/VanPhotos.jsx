import { useParams, useOutletContext  } from "react-router-dom";
import { useEffect, useState } from "react";



function VanPhotos() {
 const { vanDetails } = useOutletContext();
  const [vanDetail, setVanDetail] = useState(vanDetails);
  const {
    imageUrl
  } = vanDetail || {};
  const params = useParams();


  return (
    <div className="first-level-nest van-photos-collection flex-column">
      <img src={imageUrl} alt={`The image of ${name}`} />
    </div>
  )
}


export default VanPhotos;
