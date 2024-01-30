import logo from "../../utils/images/Aahna_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {
  faShoppingCart,
  faLocationDot,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useContext, useState } from "react";
import AddressContext from "../../utils/AddressContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const signalIcon = onlineStatus ? "online" : "offline";
  const { currentLocation } = useContext(AddressContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  console.log(cartItems);
  return (
    <div className="flex justify-between items-center shadow-lg">
      <div className="flex items-center">
        <img className="w-[150px] h-20 object-cover" alt="logo" src={logo} />
      </div>
      <div className="nav-list">
        <ul className="flex items-center mx-[10px] my-auto">
          <li className={`list-none onlineStatus text-[18px] ${signalIcon}`}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span className={`text-[14px] ${signalIcon} font-medium mr-4 ml-1`}>
              {currentLocation}
            </span>
          </li>
          <li className="list-none text-[#233142] cursor-pointer ">
            <NavLink
              className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="list-none text-[#233142] cursor-pointer">
            <NavLink
              className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]"
              to="/grocery"
            >
              Grocery
            </NavLink>
          </li>
          <li className="list-none text-[#233142] cursor-pointer ">
            <NavLink
              className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]"
              to="/about"
            >
              About US
            </NavLink>
          </li>
          <li className="list-none text-[#233142] cursor-pointer">
            {" "}
            <NavLink
              className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]"
              to="/contact"
            >
              Contact US
            </NavLink>
          </li>
          <li className="list-none text-[#233142] cursor-pointer relative">
            <NavLink to="/cart">
              <FontAwesomeIcon
                className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]"
                icon={faShoppingCart}
              />
              <span className="h-5 w-5 absolute right-3 top-0 text-white font-bold text-[13px] bg-[#FA0112] rounded-full flex justify-center items-center">
                {cartItems.length}
              </span>
            </NavLink>
          </li>
          <li className="list-none text-[#233142] cursor-pointer relative">
              {/* <FontAwesomeIcon
                className="decoration-inherit text-[20px] p-5 hover:text-[#FA0112]"
                icon={faUserCircle}
              /> */}
              <button className="text-[18px] p-5 hover:text-[#FA0112]" onClick={loginHandler}>{(isLoggedIn)? 'Logout':'Login'}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
