import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Itemcard } from "./MenuItem.styled";
import {MENU_IMG} from "../../utils/constants"

const MenuItem = (props) => {
    console.log('______', props.menuList);
    let itemInfo = props.menuList?.card?.info;
    let price = (itemInfo.price)?itemInfo.price : itemInfo.defaultPrice;
  return (
    <Itemcard>
      <div className="itemCard">
        <div className="itemInfo">
          <h3><FontAwesomeIcon className={(itemInfo.itemAttribute.vegClassifier === "VEG")? 'veg':'nonVeg'} icon={faCertificate} />{itemInfo.name}</h3>
          <p>&#8377; {price/100}</p>
          <div className="description">{itemInfo.description}</div>
        </div>
        <div className="itemImageInfo">
            <img src={MENU_IMG + itemInfo.imageId} alt='img' />
            <button>ADD+</button>
        </div>
      </div>
    </Itemcard>
  );
};

export default MenuItem;
