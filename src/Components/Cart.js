import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearItems } from "../Redux/cartSlice";
import emptyCartimg from "../../imgs/emptyCart.webp";

const Cart = () => {
    
  const itemCart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleclearitems = ()=>{
    dispatch(clearItems());
  }
  return (
    <div className="p-28 w-8/12 m-auto">
      <div className=" fill-blue-500 ml-[690px] mt-6" onClick={handleclearitems}>
        <svg className="w-6 m-auto"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
        <div className="text-center text-sm text-blue-300" >Clear All</div>
      </div>
     {itemCart.length===0 && <div>
      <img src={emptyCartimg} alt=""/>
      <h1>Your cart is empty</h1>
      <p>You can go to home page to view more restaurants</p>
      </div>}
      <ItemsList items={itemCart} />
    </div>
  );
};

export default Cart;
