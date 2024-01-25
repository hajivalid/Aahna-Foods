import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
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
        console.log('------',data);
        setFilterData(data);
    }

    useEffect(() =>{
        fetchCardInfo();
    }, []);

    const fetchCardInfo = async() =>{
        const urls = await getUrlsBasedOnGeoLocation();
        let data = await fetch(urls.CARD_INFO);
        const json = await data.json();

        setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurantData.length === 0 ? <CardShimmerUI/> :(
        <div className="bodyLayout">
            <div className="mt-5 mb-[10px] mx-5 flex justify-between items-center">
                <h2 className="text-[17px] text-gray-400 text-bold">{(filterData === 'No')?filterData : filterData.length} Accessible Restaurants</h2>
                <Search restData={restaurantData} filteredData={filteredDataHandler}/>
                <RateFilter restData={restaurantData} filteredData={filteredDataHandler}/>
            </div>
            {
                (filterData === 'No')?
                    <div>Sorry!! Restaurants closed</div>
                    :
                    <div className="allCards">
                        {filterData.map((item)=>(
                            <Link className="cardLink" key={item.info.id} to={"/restaurant/"+item.info.id}><RestaurantCard filterData={item}/></Link>
                        ))}
                    </div>
            }
        </div>
    )
}
export default Body;