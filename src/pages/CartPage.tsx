import { useAppSelector } from "../App/store";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";

const CartPage = () => {
  const {cartItems} = useAppSelector((state) => state.cart)
  // Show the cart items from the Redux store
  // Pass the entire cartItems array to Cart component
  return (
    <>
      <Navbar />
      <Cart items={cartItems} />
    </>
  );
}

export default CartPage;
