import  { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
 

  const addToCart = (product , quantityNo = 1) => {
    if(quantityNo <= 0){
      return
    }
    const existing = cartItem.find((item) => {
      return item.id === product.id;
    });
    if (existing) {
      setCartItem(
        cartItem.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + quantityNo }
            : item;
        }),
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: quantityNo }]);
    }
  };

  const updateQuantity = (id, action)=>{
    setCartItem(
      cartItem.map((item)=>{
        if (item.id === id) {
          if (action == "plus") {
            return {...item , quantity:item.quantity+1 }
          }
          if (action == "minus" && item.quantity>1) {
            return {...item , quantity:item.quantity-1}
          }

          return item
        } 
        return item
      })
    )
  }

  const removeFromCart = (id)=>{
    setCartItem(
      cartItem.filter((item)=> item.id !== id)
    )
  }


  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addToCart ,updateQuantity,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
