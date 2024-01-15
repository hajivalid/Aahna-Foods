import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import { resData } from "../utils/mockData";
import RateFilter from "./rateFilter";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState(resData);
    const filteredDataHandler = (data) =>{
        setRestaurantData(data);
    }
    return(
        <div className="bodyLayout">
            <div className="filterSection">
                <h2>{restaurantData.length} Accessible Restaurants</h2>
                <Search/>
                <RateFilter restData={resData} filteredData={filteredDataHandler}/>
            </div>
            
            <div className="allCards">
                {restaurantData.map((item)=>(
                    <RestaurantCard key={item.info.id} restaurantData={item}/>
                ))}
            </div>
        </div>
    )
}
export default Body;