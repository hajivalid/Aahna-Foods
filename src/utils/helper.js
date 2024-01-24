// export const fetchCardInfo = async() =>{
//     let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4860808&lng=78.3963095&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//     const json = await data.json();
//     return json;
// }

export const getGeoLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    });
  };