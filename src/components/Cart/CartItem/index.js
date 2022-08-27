import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/esm/Container";
import { useCartContext } from '../../../context/CartContext';
import '../Cart.css'

const CartItem = ({ producto }) => {
    const { eliminarProducto } = useCartContext();

    return (
        <Container className="cartProductContainer">
            <Row className="cartProductBody ">
                <Col >
                    <img src={producto.picture} alt={producto.title} className="imgProductoCart img-fluid" />
                </Col>
                <Col >
                    <h4>Vianda: {producto.title} </h4>
                    <p>Cantidad: {producto.cantidad} </p>
                    <p>Precio individual: ${producto.price}</p>
                    <p>Subtotal: ${producto.cantidad * producto.price}</p>
                    <Button variant="danger" onClick={() => eliminarProducto(producto.id)}>Quitar Producto</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default CartItem;