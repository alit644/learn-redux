import Button from "./UI/Button";
import type { IProduct } from "../interfaces";
import { useDispatch } from "react-redux";
import { addToCart } from "../App/Slices/CartSlice";
interface IProductCard {
  product: IProduct;
}
const ProductCard = ({ product } : IProductCard) => {
  const { id,image, title, price, description } = product;
  const dispatch = useDispatch()
  return ( 
    <div id={`${id}`} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col w-72">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="h-40 w-full object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
      <p className="text-gray-500 text-sm mb-2 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-blue-700 font-bold text-lg">${price}</span>
        <Button
        onClick={() => dispatch(addToCart(product))}
          content="Add to Cart"
          type="button"
          className="bg-blue-700 hover:bg-blue-400 text-white"
        />
      </div>
    </div>
  );
};

export default ProductCard;
