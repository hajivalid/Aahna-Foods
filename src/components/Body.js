import { useEffect, useState } from "react";
import RestaurantCard, {HigherOrderLabel} from "./RestaurantCard";
import Search from "./Search";
import RateFilter from "./rateFilter";
import CardShimmerUI from "./cardShimmerUI";
// import { fetchCardInfo } from "../utils/helper";
import { Link } from "react-router-dom";
import { getUrlsBasedOnGeoLocation } from "../utils/constants";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    const filteredDataHandler = (data) =>{
        setFilterData(data);
    }

    const PromotedRestaurantCard = HigherOrderLabel(RestaurantCard);

    useEffect(() =>{
        fetchCardInfo();
    }, []);

    const fetchCardInfo = async() =>{
        
        // if we are testing this component we need to uncomment the below line
        //let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4917748&lng=78.3857469&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const urls = await getUrlsBasedOnGeoLocation(); //comment this line for testing
        let data = await fetch(urls.CARD_INFO); //comment this line for testing
        const json = await data.json();

        setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurantData?.length === 0 ? (
      <CardShimmerUI />
    ) : (
      <div className="bodyLayout">
        <div className="mt-5 mb-[10px] mx-5 flex justify-between items-center">
          <h2 className="text-[17px] text-gray-400 text-bold">
            {!filterData || filterData === "No" ? '0' : filterData?.length} Accessible
            Restaurants
          </h2>
          <Search
            restData={restaurantData}
            filteredData={filteredDataHandler}
          />
          <RateFilter
            restData={restaurantData}
            filteredData={filteredDataHandler}
          />
        </div>
        {!restaurantData || filterData === "No" ? (
          <div className="text-[22px] font-extrabold text-gray-400 absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Sorry!! Restaurants closed.</div>
        ) : (
          <div className="allCards">
            {filterData?.map((item) => (
              <Link 
                className="cardLink"
                key={item.info.id}
                to={"/restaurant/" + item.info.id}
              >
                {item?.info?.aggregatedDiscountInfoV3?.header ? <PromotedRestaurantCard filterData={item} /> : <RestaurantCard filterData={item} />}
                
              </Link>
            ))}
          </div>
        )}
      </div>
    );
}
export default Body;