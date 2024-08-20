import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Store/Slice/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="text-center rounded-lg bg-yellow-400 pb-[10%] pt-[25%] md:pt-[10%]">
        {cartItem.length == 0 ? (
          <>
           <span className="font-bold text-2xl p-2 bg-gray-100 rounded-xl text-gray-500">
            Your Cart is Empty -
            <Link to="/browse" className="p-2 font-extrabold border-b-2 m-2 text-yellow-400 hover:text-orange-500">ORDER NOW !!</Link>
            </span>
          </>
          ) : (
          <>
            <div className="flex justify-center">
              {/* <span className="font-bold text-xl px-2 flex items-center bg-orange-500  text-orange-200">
                Cart
              </span> */}
              <button
                onClick={handleClearCart}
                className="py-1 px-2 m-2 text-md font-bold bg-orange-500 hover:bg-orange-600 rounded-sm text-white uppercase"
              >
                Clear Cart
              </button>
            </div>
            <div className="">
              <ItemList items={cartItem} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Cart;
