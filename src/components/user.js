import { Component } from "react";
import AddressContext from "../utils/AddressContext";


class User extends Component {
    constructor(props){
        console.log('constructor');
        super(props);
        this.state = {
            name: this.props.name,
            location: this.props.location,
            login: this.props.contact
        }
    }
    componentDidMount(){
        console.log('componentDidMount');
        fetch("https://api.github.com/users/hajivalid")
          .then((response) => response.json())
          .then((data) => {
            this.setState(data);
        });
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    render(){
        console.log('render');
        const {name, location, login} = this.state;
        return (
            <div className="aboutCard">
                <h3>Name: {name}</h3>
                <AddressContext.Consumer>
                    {({currentLocation})=> <div>Current Location: {currentLocation}</div>}
                </AddressContext.Consumer>
                <div>Location: {location}</div>
                <div>Contact: {login}@gmail.com</div>
            </div>
        );
    }
}

export default User;