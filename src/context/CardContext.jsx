import { createContext, useState } from "react";
import { getProductData } from "../components/IbitengeImageStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  getProductSize: () => {},
  addOneToCart: () => {},
  removeOneToCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }
  function getProductSize(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return null;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in the cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product is in the cart
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      cartProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  function getTotalCost() {
    return cartProducts.reduce((totalCost, cartItem) => {
      const productData = getProductData(cartItem.id);
      return totalCost + productData.price * cartItem.quantity;
    }, 0);
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    getProductSize,
    addOneToCart,
    removeOneToCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
