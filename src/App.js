import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
//import AboutUs from './components/AboutUs';
import Error from './components/Error';
import ContactUs from './components/ContactUs';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu';
//import Grocery from './components/Grocery';

const Grocery = lazy(()=> import('./components/Grocery'));
const AboutUs = lazy(()=> import('./components/AboutUs'));

const AppLayout = () =>{
    return(
        <div className="m-0 font-['Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif]" >
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
      { path: "/about", element: <Suspense fallback={<h3>Loading...</h3>}><AboutUs /></Suspense> },
      { path: "/contact", element: <ContactUs /> },
      {path: "/grocery", element: <Suspense fallback={<h2>Loading...</h2>}><Grocery/></Suspense>},
      { path: "/restaurant/:resid", element: <RestaurantMenu/>}
    ],
    errorElement: <Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>);
