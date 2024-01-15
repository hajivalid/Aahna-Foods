import logo from "../utils/images/Aahna_black.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{
    return(
        <div className="footerSection">
            <img alt="logo" src={logo}/>
            <div className="copyRight">© 0000 Aahna Pvt. Ltd</div>
            <div className="socialLinks">
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faYoutube}/>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faTwitter}/>
            </div>
        </div>
    )
}
export default Footer;