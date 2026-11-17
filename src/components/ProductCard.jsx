import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 rounded-md flex flex-col p-4 border-gray-100 border-2 items-center gap-1">
      <img
        src={product.images[0]}
        alt=""
        className="aspect-square object-contain bg-gray-100 rounded-md cursor-pointer w-full"
        onClick={() => {
          navigate(`/product/${product.id}`);
        }}
      />
      <h1
        className="font-medium line-clamp-1 cursor-pointer"
        onClick={() => {
          navigate(`/product/${product.id}`);
        }}
      >
        {product.title}
      </h1>
      <h2 className="text-lg font-semibold ">${product.price}</h2>

      <button
        className="bg-red-500 px-2 py-1 rounded-md flex gap-1 text-white cursor-pointer"
        onClick={() => {
          addToCart(product);
        }}
      >
        <IoCartOutline className="w-6 h-6" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
