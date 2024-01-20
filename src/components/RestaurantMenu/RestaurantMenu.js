import { faStar, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { REST_Info } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { RestInfoStyle } from "./RestaurantMenu.styled";
import MenuItem from "../MenuItem/MenuItem";
import MenuAccordian from "../MenuAccordian/MenuAccordian";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const [cardGroupItems, setCardGroupItems] = useState(null);
  const [menulist, setMenulist] = useState(null);
  const restId = useParams();
  console.log(restId);

  useEffect(() => {
    fetchRestInfo();
  }, []);

  const fetchRestInfo = async () => {
    let data = await fetch(REST_Info + restId.resid);
    const json = await data.json();
    console.log(json);
    setRestInfo(json?.data?.cards[0]?.card?.card?.info);
    setCardGroupItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setMenulist(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
  };

  if (restInfo === null) {
    return "";
  }

  return (
    <RestInfoStyle>
      <div className="restDetails">
        <div className="restInfo">
          <div className="restAdd">
            <h2>{restInfo.name}</h2>
            <p>{restInfo.cuisines.join(", ")}</p>
            <p>
              {restInfo.locality}, {restInfo.city}
            </p>
            <p>
              <FontAwesomeIcon icon={faMotorcycle} />{" "}
              {restInfo?.feeDetails?.message}
            </p>
          </div>
          <div className="restRating">
            <div className="totalRating">
              <div className="rating">
                <FontAwesomeIcon icon={faStar} /> {restInfo.avgRating}
              </div>
              <div>{restInfo.totalRatingsString}</div>
            </div>
            <div className="timeAndCost">
              {restInfo.sla.slaString} {restInfo.costForTwoMessage}
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
