import { useRouteError } from "react-router-dom";

const Error = () =>{
    const routeError = useRouteError();
    return(
        <div>
            <h1>Oops!! Something went wrong!</h1>
            <h1>{routeError.status} {routeError.statusText}</h1>
        </div>
        
    );
};
export default Error;