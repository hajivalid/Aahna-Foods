import { faStar, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getUrlsBasedOnGeoLocation } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { RestInfoStyle } from "./RestaurantMenu.styled";
import MenuItem from "../MenuItem/MenuItem";
import MenuAccordian from "../MenuAccordian/MenuAccordian";
import useRestaurantInfo from "../../utils/useRestaurantInfo";
import MenuShimmerUI from "./menuShimmerUI";

const RestaurantMenu = () => {
  const restId = useParams();
  const restInfo = useRestaurantInfo(restId);

  if (restInfo === null) {
    return <MenuShimmerUI/>;
  }

  const {
    name,
    cuisines,
    locality,
    city,
    feeDetails,
    avgRating,
    totalRatingsString,
    sla,
    costForTwoMessage,
  } = restInfo?.cards[0]?.card?.card?.info;

  const menulist = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

  return (
    <RestInfoStyle>
      <div className="restDetails">
        <div className="restInfo">
          <div className="restAdd">
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <p>
              {locality}, {city}
            </p>
            <p>
              <FontAwesomeIcon icon={faMotorcycle} />{" "}
              {feeDetails?.message}
            </p>
          </div>
          <div className="restRating">
            <div className="totalRating">
              <div className="rating">
                <FontAwesomeIcon icon={faStar} /> {avgRating}
              </div>
              <div>{totalRatingsString}</div>
            </div>
            <div className="timeAndCost">
              {sla.slaString} {costForTwoMessage}
            </div>
          </div>
        </div>
        <div className="menuList">
          {/* <MenuAccordian menuItems={cardGroupItems}/> */}
          {menulist.map((item)=>(
            <MenuItem key={item.card.info.id} menuList={item}/>
          ))}
          
        </div>
      </div>
    </RestInfoStyle>
  );
};
export default RestaurantMenu;
