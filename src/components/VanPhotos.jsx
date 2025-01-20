import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVans } from "../utils";



function VanPhotos() {
  const [vanDetail, setVanDetail] = useState({});
  const { imageUrl, name } = vanDetail || {};
  const params = useParams();

  useEffect(() => {
    const fetchVans = () => {
      getVans(setVanDetail, `/api/vans/${params.id}`);
    };

    fetchVans();
  }, []);


  return (
    <div className="first-level-nest van-photos-collection flex-column">
      <img src={imageUrl} alt={`The image of ${name}`} />
    </div>
  )
}


export default VanPhotos;
