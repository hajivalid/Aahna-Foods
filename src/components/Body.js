import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import RateFilter from "./rateFilter";
import CardShimmerUI from "./cardShimmerUI";
// import { fetchCardInfo } from "../utils/helper";
import { Link } from "react-router-dom";

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
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4860808&lng=78.3963095&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurantData.length === 0 ? <CardShimmerUI/> :(
        <div className="bodyLayout">
            <div className="filterSection">
                <h2>{(filterData === 'No')?filterData : filterData.length} Accessible Restaurants</h2>
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