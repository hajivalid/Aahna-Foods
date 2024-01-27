import { getGeoLocation } from "../utils/helper";

// Function to get and return URLs based on geolocation
export const getUrlsBasedOnGeoLocation = async () => {
  try {
    const { latitude, longitude } = await getGeoLocation();
    console.log(latitude, longitude);

    const CARD_INFO = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
    const REST_INFO = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=`;
    const CURRENT_LOCATION = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    return {CARD_INFO, REST_INFO, CURRENT_LOCATION};
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
};
export const IMAGE_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
export const MENU_IMG = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/';