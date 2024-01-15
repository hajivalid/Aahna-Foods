import logo from "../../utils/images/Aahna_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Header = () =>{
    return(
        <div className="header">
            <img alt="logo" src={logo}/>
            <div className="nav-list">
                <ul className="nav">
                    <li className="list-item">Home</li>
                    <li className="list-item">About US</li>
                    <li className="list-item">Contact US</li>
                    <li className="list-item cartIcon"><FontAwesomeIcon icon={faShoppingCart}/></li>
                </ul>
            </div>  
        </div>
    )
}
export default Header;