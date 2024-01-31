import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import {MENU_IMG} from "../../utils/constants";
import { addItems } from "../../utils/redux/cartSlice";
import { Itemcard } from "./MenuItem.styled";

const MenuItem = (props) => {
    let itemInfo = (props.navFrom === 'cart')? props.menuList:props.menuList?.card?.info;
    let price = (itemInfo.price)?itemInfo.price : itemInfo.defaultPrice;
    const dispatch = useDispatch();
    const borderLine = (props.navFrom === 'cart')? 'border-t-[1px]': 'border-b-[1px]'

    const addItemHandler = (menuItem) => {
      console.log('Menu--',menuItem);
      dispatch(addItems(menuItem));
    }
  return (
    <Itemcard>
      <div data-testid='foodItems' className={`itemCard ${borderLine} border-[#233142]`}>
        <div className="itemInfo">
          <h3><FontAwesomeIcon className={(itemInfo.itemAttribute.vegClassifier === "VEG")? 'veg':'nonVeg'} icon={faCertificate} />{itemInfo.name}</h3>
          <p>&#8377; {price/100}</p>
          <div className="description">{itemInfo.description}</div>
        </div>
        <div className="itemImageInfo">
            <img src={MENU_IMG + itemInfo.imageId} alt='img' />
            {(props.navFrom != 'cart') && <button onClick={()=>addItemHandler(itemInfo)}>ADD+</button>}
        </div>
      </div>
    </Itemcard>
  );
};

export default MenuItem;
