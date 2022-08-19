import React from "react";
import CartItem from "./CartItem/";
import { useCartContext } from "../../context/CartContext";
import './Cart.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

const Cart = () => {
    const { cart, precioFinal, finalizarCompra } = useCartContext();

    return (
        <>
            {
                (cart.length === 0) ?
                <div className="cartProductContainer">
                    <div>
                        <p>No hay productos en tu carrito</p>
                        <Link to={'/'}>
                            <Button>Comprar</Button>
                        </Link>
                    </div>
                </div>

                    :
                    cart.map((producto) => {
                        return (
                            <CartItem key={producto.id} producto={producto} />
                        )
                    })
            }
            <div className="contTotal">
                <h4 className="cartTotal">Monto total: ${precioFinal()}</h4>
                <span> {finalizarCompra()} </span>
            </div>

        </>
    )
}

export default Cart;