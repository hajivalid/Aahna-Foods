import { useEffect, useState } from "react";
import { getUrlsBasedOnGeoLocation } from "./constants";

const useRestaurantInfo  = (restId) =>{
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchRestInfo();
      }, []);
    
      const fetchRestInfo = async () => {
        // if we are testing this component we need to uncomment the below line
        //let data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4917748&lng=78.3857469&restaurantId=' + restId.resid);
        const urls = await getUrlsBasedOnGeoLocation(); //comment this line for testing
        let data = await fetch(urls?.REST_INFO + restId.resid); //comment this line for testing
        const json = await data.json();
        setRestInfo(json?.data);
        //   setCardGroupItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      };

    return restInfo;
}
export default useRestaurantInfo;