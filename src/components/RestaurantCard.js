import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import resImg from "../utils/images/Ahna_white.png";
import {IMAGE_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurantData} = props;
    const { info: { cloudinaryImageId, name, avgRating, cuisines,  costForTwo, locality, areaName, sla} } = restaurantData;
    console.log(restaurantData);

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
export default RestaurantCard;