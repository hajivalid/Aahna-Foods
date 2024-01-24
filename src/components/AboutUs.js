import { Component } from "react";
import User from "./user";

class About extends Component {
    render(){
        return (
            <div className="aboutUs">
                <h1>About Us</h1>
                <User name={'name'} location={'Location'} contact={'email'}/>
            </div>
        );
    }
}
export default About;