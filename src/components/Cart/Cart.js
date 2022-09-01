import React from "react";
import CartItem from "./CartItem/";
import { useCartContext } from "../../context/CartContext";
import './Cart.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { addDoc, collection, increment, getFirestore,doc,updateDoc, serverTimestamp } from "firebase/firestore";
/* import swal from 'sweetalert'; */
import Swal from "sweetalert2";
import { Col, Row, Container } from "react-bootstrap";
import Form from "../Form";


const Cart = () => {
    const { cart, precioFinal, LimpiarCart  } = useCartContext();

    const order = {
        buyer: {
            name: 'Julian Alvarez',
            email: 'Julialvarez@gmail.com',
            phone: '3512525047'
        },
        items: cart.map(producto => ({ id: producto.id, nombre: producto.title, precioUnitario: producto.price, cantidad: producto.cantidad, subtotal: producto.price * producto.cantidad })),
        date: serverTimestamp(),
        total: precioFinal(),
    }

    const emitirCompra = () => {
        const dataBase = getFirestore();
        const ordersCollection = collection(dataBase, 'orders');
        addDoc(ordersCollection, order)
        .then(result =>{
            LimpiarCart()
            Swal.fire({
                icon: 'success',
                title: 'Tu compra se realizó correctamente!',
                html: `Tu número de comprobante es: ${result.id}`})})
        cart.forEach((item)=> {
            const itemRef = doc(dataBase, 'productos', item.id)
            updateDoc(itemRef, {
                stock: increment(-item.cantidad)
            })
        })
    } 
    return (
        <>
            {
                (cart.length === 0) ?
                <div className="cartProductContainer">
                    <div>
                        <p>No hay productos en tu carrito</p>
                        <Link to={'/'}>
                            <Button>Ir a comprar</Button>
                        </Link>
                    </div>
                </div>
                    :
                    <Container>
                        <Row>
                            <Col>
                            {
                                cart.map((producto) => {
                                    return (
                                        <CartItem key={producto.id} producto={producto} />
                                    )
                                })
                            }
                            </Col>
                        </Row>
                                <div className="contTotal">
                                    <h4 className="cartTotal">Monto total: ${precioFinal()}</h4>
                                    <Form/>
                                </div>
                                <Button disabled={cart.length === 0} onClick={emitirCompra} className="btn btn-success col-6">Finalizar compra</Button>
                    </Container>
            }
            </>
        )
    }
    
    export default Cart;

