import { createContext, useContext, useState, useEffect } from "react";
import { addToCart, getCart, removeFromCart } from "../firebase/cartService";

const CartContext = createContext();

export const CartProvider = ({ children, userId }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (userId) {
      getCart(userId).then(setCart);
    }
  }, [userId]);

  const addProduct = async (product) => {
    await addToCart(userId, product);
    setCart(await getCart(userId));
  };

  const removeProduct = async (cartItemId) => {
    await removeFromCart(cartItemId);
    setCart(await getCart(userId));
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
