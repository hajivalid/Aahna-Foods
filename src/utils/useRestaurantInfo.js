import { useEffect, useState } from "react";
import { getUrlsBasedOnGeoLocation } from "./constants";

const useRestaurantInfo  = (restId) =>{
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchRestInfo();
      }, []);
    
      const fetchRestInfo = async () => {
        const urls = await getUrlsBasedOnGeoLocation();
        let data = await fetch(urls?.REST_INFO + restId.resid);
        const json = await data.json();
        setRestInfo(json?.data);
        //   setCardGroupItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      };

    return restInfo;
}
export default useRestaurantInfo;