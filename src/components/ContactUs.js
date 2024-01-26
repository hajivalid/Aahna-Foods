import useOnlineStatus from "../utils/useOnlineStatus";
import CompanyInfo, { HigherOrderContactDetails } from "./CompanyInfo";

const ContactDetails = HigherOrderContactDetails(CompanyInfo);

const ContactUs = () =>{
    const onlineStatus = useOnlineStatus(); 
    return(
        <div>
            {onlineStatus ? <ContactDetails/> : <CompanyInfo/>}
        </div>
    );
};
export default ContactUs;