import { useCart} from "../context/CartContext";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cartItem ,updateQuantity , removeFromCart } = useCart();
  // console.log(cartItem);

  if (!cartItem?.length) {
    return <p className="min-h-[60vh]">Cart is emptyyy.</p>;
  }

  const totalCost = cartItem.reduce((sum,item)=>sum+(item.quantity * item.price),0).toFixed(2)
  
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-4 mt-8 mb-4">
      <h1 className="text-2xl font-bold">My Cart</h1>
      {cartItem.map((item) => {
        return (
          <div
            key={item.id}
            className=" grid grid-cols-[2fr_1fr_auto] items-center  bg-gray-100 p-4 rounded-md"
          >
            <div className="flex items-center gap-4 ">
              <img
                src={item.images[0]}
                alt=""
                className="w-25 h-25 bg-white object-contain rounded-md p-2 "
              />
              <div className="flex flex-col">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-red-500 font-bold">${item.price} <label className="font-medium" >per unit</label></p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-red-500 text-white p-2 rounded-md font-semibold w-fit">
              <button onClick={()=>{
                updateQuantity(item.id , "minus") 
              }}>-</button>
              <span>{item.quantity}</span>
              <button onClick={()=>{
                updateQuantity(item.id , "plus")
              }}>+</button>
            </div>
            <Trash2 className="text-red-500 cursor-pointer"
            onClick={()=>{
              removeFromCart(item.id)
            }} />
          </div>
        );
      })}
      <h1 className="font-bold">Total Cost = ${totalCost}</h1>
    </div>
  );
};

export default Cart;
