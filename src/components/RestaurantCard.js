import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {IMAGE_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {filterData} = props;
    const { info: { cloudinaryImageId, name, avgRating, cuisines,  costForTwo, locality, areaName, sla} } = filterData;

    return(
        <div className="resCard">
            <img src={IMAGE_URL + cloudinaryImageId }/>
            <div className="cardInfo">
                <div className="resTitle">
                    <div className="title">{name}</div>
                    <div className="rating">{avgRating} <FontAwesomeIcon icon={faStar}/></div>
                </div>
                <div className="resCuisine">
                    <div className="cuisine">{cuisines.join(', ')}</div>
                </div>
                <div className="costTime">
                    <div className="costForOne">{costForTwo}</div>
                    <div className="costForOne">{sla?.slaString}</div>
                </div>
                <div className="resLocality">
                    <div className="locality">{locality}, {areaName}</div>
                </div>
            </div>
        </div>
    )
}
// Higher order component
export const HigherOrderLabel = (RestaurantCard) =>{
    return (props) => {
        return (
          <div className="relative h-[100%]">
            <label className="absolute left-[-5px] top-2 text-white bg-[#267e3e] px-[8px] py-0 text-[14px] font-bold  ">
              {props?.filterData?.info?.aggregatedDiscountInfoV3?.header}{" "}
              {props?.filterData?.info?.aggregatedDiscountInfoV3?.subHeader}
            </label>
            <RestaurantCard {...props} />
          </div>
        );
    }
}

export default RestaurantCard;