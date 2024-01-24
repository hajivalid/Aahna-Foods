import { RestInfoStyle } from "./RestaurantMenu.styled";

const MenuShimmerUI = () => {
  let cardCount = 4;
  return (
    <RestInfoStyle>
      {[...Array(cardCount)].map((_, index) => (
        <div className="shimmerMenu">
          <div className="leftInfo">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="rightInfo"></div>
        </div>
      ))}
    </RestInfoStyle>
  );
};
export default MenuShimmerUI;
