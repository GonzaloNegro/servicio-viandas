import React, { useContext, useState } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const carro = document.querySelector('#valorCart');

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log("carro:", cart);

  let mapIdUsers = cart.map((registro) => registro.cantidad);
  console.log('valores:' + mapIdUsers);

  carro.innerHTML = mapIdUsers.reduce((prev,curr)=> prev + curr);

  const addProducto = (item, cantidad) => {
    if (agregadoAlCart(item.id)) {
      setCart(
        cart.map((producto) => {
          return producto.id === item.id
            ? { ...producto, cantidad: producto.cantidad + cantidad }
            : producto;
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const limpiarCart = () => setCart([]);

  const agregadoAlCart = (id) => {
    return cart.find((producto) => producto.id === id) ? true : false;
  };
 
  const quitarProducto = (id) =>
    setCart(cart.filter((producto) => producto.id !== id));

  return (
    <CartContext.Provider
      value={{
        limpiarCart,
        agregadoAlCart,
        quitarProducto,
        addProducto,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;