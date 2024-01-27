import logo from "../../utils/images/Aahna_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useContext } from "react";
import AddressContext from "../../utils/AddressContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const signalIcon = onlineStatus ? "online" : "offline";
  const {currentLocation} = useContext(AddressContext);
  return (
    <div className="flex justify-between items-center shadow-lg">
      <div className="flex items-center">
        <img className="w-[150px] h-20 object-cover" alt="logo" src={logo} />
      </div>
      <div className="nav-list">
        <ul className="flex items-center mx-[10px] my-auto">
          <li className={`list-none onlineStatus text-[22px] ${signalIcon}`}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span className={`text-[14px] ${signalIcon} font-medium mr-4 ml-1`}>{currentLocation}</span>
          </li>
          <li className="list-none text-[#233142] cursor-pointer ">
            <Link
              className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="list-none text-[#233142] cursor-pointer">
            <Link
              className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]"
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <li className="list-none text-[#233142] cursor-pointer ">
            <Link
              className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]"
              to="/about"
            >
              About US
            </Link>
          </li>
          <li className="list-none text-[#233142] cursor-pointer">
            {" "}
            <Link
              className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]"
              to="/contact"
            >
              Contact US
            </Link>
          </li>
          <li className="list-none text-[#233142] cursor-pointer">
            <FontAwesomeIcon
              className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]"
              icon={faShoppingCart}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
