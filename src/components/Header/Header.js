import logo from "../../utils/images/Aahna_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Header = () =>{
    return(
        <div className="header">
            <img alt="logo" src={logo}/>
            <div className="nav-list">
                <ul className="nav">
                    <li className="list-item"><Link to='/'>Home</Link></li>
                    <li className="list-item"><Link to='/about'>About US</Link></li>
                    <li className="list-item"> <Link to='/contact'>Contact US</Link></li>
                    <li className="list-item cartIcon"><FontAwesomeIcon icon={faShoppingCart}/></li>
                </ul>
            </div>  
        </div>
    )
}
export default Header;