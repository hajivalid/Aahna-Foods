import logo from "../../utils/images/Aahna_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const signalIcon = onlineStatus ? "online" : "offline";
  return (
    <div className="flex justify-between items-center shadow-lg">
      <img className="w-[150px] h-20 object-cover" alt="logo" src={logo} />
      <div className="nav-list">
        <ul className="flex items-center mx-[10px] my-auto">
          <li className={`list-none onlineStatus ${signalIcon}`}>
            <FontAwesomeIcon icon={faGlobe} />
          </li>
          <li className="list-none text-[#233142] cursor-pointer ">
            <Link
              className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]"
              to="/">Home</Link>
          </li>
          <li className="list-none text-[#233142] cursor-pointer">
            <Link className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]" 
            to="/grocery">Grocery</Link>
          </li>
          <li className="list-none text-[#233142] cursor-pointer ">
            <Link className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]" 
            to="/about">About US</Link>
          </li>
          <li className="list-none text-[#233142] cursor-pointer">
            {" "}
            <Link className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]" 
            to="/contact">Contact US</Link>
          </li>
          <li className="list-none text-[#233142] cursor-pointer">
            <FontAwesomeIcon className="decoration-inherit text-[18px] p-5 hover:text-[#FA0112]" icon={faShoppingCart} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
