import { useState } from "react";
import {AccordianStyle} from "./MenuAccordian.styled";


const MenuAccordian = (props) => {
    const [isActive, setIsActive] = useState(false);
    const items = props.menuItems;
    console.log('888888', items);
  return (
    <AccordianStyle>
        {items.map(()=>(
            <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>title</div>
                <div>{isActive ? "-" : "+"}</div>
            </div>
            {isActive && <div className="accordion-content">Accordian Data</div>}
            </div>
        ))}
    </AccordianStyle>
  );
};
export default MenuAccordian;