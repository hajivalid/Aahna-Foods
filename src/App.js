import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import AboutUs from './components/AboutUs';
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import AddressContext from "./utils/AddressContext";
import { getGeoLocation } from "./utils/helper";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import CartItems from "./components/CartItems";
//import Grocery from './components/Grocery';

const Grocery = lazy(() => import("./components/Grocery"));
const AboutUs = lazy(() => import("./components/AboutUs"));

const AppLayout = () => {
  const [currentAdd, setCurrentAdd] = useState();

  useEffect(() => {
    fetchCurrentLocation().then((data) => {
      const { neighbourhood, county, city, postcode } = data?.address;
      setCurrentAdd(`${neighbourhood}, ${county}, ${city}, ${postcode}`);
    });
  }, []);

  const fetchCurrentLocation = async () => {
    const { latitude, longitude } = await getGeoLocation();
    let data = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    const json = await data.json();
    return json;
  };

  return (
    <Provider store={appStore}>
      <div className="m-0 relative font-['Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif] flex flex-col min-h-[100vh]">
        <AddressContext.Provider value={{ currentLocation: currentAdd }}>
          <Header />
          <Outlet />
          <Footer />
        </AddressContext.Provider>
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <AboutUs />
          </Suspense>
        ),
      },
      { path: "/contact", element: <ContactUs /> },
      { path: "/cart", element: <CartItems /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resid", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
