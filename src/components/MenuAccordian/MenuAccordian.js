import { useState } from "react";
import { AccordianStyle } from "./MenuAccordian.styled";
import MenuItem from "../MenuItem/MenuItem";

const MenuAccordian = (props) => {
  const [showContentIndex, setShowContentIndex] = useState(0);
  const items = (props?.menuItems).filter(
    (cat) =>
      cat.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const toggleAccordion = (index) => {
    setShowContentIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <AccordianStyle>
      {items.map((item, index) => (
        <div className="accordion-item" key={item?.card?.card?.title}>
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            <div>
              {item?.card?.card?.title} ({item?.card?.card?.itemCards.length})
            </div>
            <div>{showContentIndex === index ? "-" : "+"}</div>
          </div>
          {showContentIndex === index &&
            item?.card?.card?.itemCards.map((item) => (
              <MenuItem key={item.card.info.id} menuList={item} navFrom={'accordian'}/>
            ))}
        </div>
      ))}
    </AccordianStyle>
  );
};
export default MenuAccordian;
