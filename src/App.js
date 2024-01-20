import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Error from './components/Error';
import ContactUs from './components/ContactUs';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu';


const AppLayout = () =>{
    return(
        <div className="AppLayout">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        
    )
}
const appRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/restaurant/:resid", element: <RestaurantMenu/>}
    ],
    errorElement: <Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>);
