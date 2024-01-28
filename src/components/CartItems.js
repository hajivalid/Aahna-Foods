import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../components/MenuItem/MenuItem";
import { clearItems } from "../utils/redux/cartSlice";

const CartItems = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(clearItems());
  };

  return (
    <div className="w-[60%] pb-3 mx-auto mt-[10px] mb-0">
      <div className="flex justify-between items-center">
        <h1 className="my-4 font-extrabold text-2xl">Cart Items</h1>
        {cartItems.length != 0 && <button
          className="text-[#233142] border border-[#FA0112] hover:text-[#FA0112] px-2 rounded-md"
          onClick={clearHandler}
        >
          Clear
        </button>}
      </div>
      {cartItems.length === 0 ? (
        <div className="m-4 text-center">
          <h1 className="text-[20px] font-bold text-[#233142]">Your cart is empty</h1>
          <p className="text-gray-600">You can go to home page to view more restaurants</p>
        </div>
      ) : (
        cartItems.map((item) => (
          <MenuItem key={item.id} menuList={item} navFrom={"cart"} />
        ))
      )}
    </div>
  );
};
export default CartItems;
