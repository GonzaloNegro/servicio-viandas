import React, { useState } from "react";
import CartItem from "./CartItem/";
import { useCartContext } from "../../context/CartContext";
import './Cart.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { addDoc, collection, increment, getFirestore,doc,updateDoc, serverTimestamp } from "firebase/firestore";
/* import swal from 'sweetalert'; */
import Swal from "sweetalert2";
import { Col, Row, Container } from "react-bootstrap";


const Cart = () => {
    const { cart, precioFinal, LimpiarCart  } = useCartContext();

    const[email, setEmail] = useState('');
    const[email2, setEmail2] = useState('');
    const[nombre, setNombre] = useState('');
    const[telefono, setTelefono] = useState('');

    const errorMessage = validate(email, email2, nombre, telefono);

    const order = {
        buyer: {
            name: nombre,
            email: email,
            phone: telefono
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
                title: `Tu compra se realizó correctamente ${nombre}!`,
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
                                    {/* <Form/> */}
                                </div>
                                <div className="datos">
                                <form
                                    onSubmit={ev =>{
                                        ev.preventDefault();

                                        login(email, email2, nombre, telefono)
                                    }}
                                >

                                    <input type="text" name="email" placeholder="Email" autoComplete="off" value={email}  onChange={ev => setEmail(ev.target.value)}></input>
                                    <input type="text" name="email2" placeholder="Repetir email" autoComplete="off" value={email2}  onChange={ev => setEmail2(ev.target.value)}></input>
                                    <input type="text" name="nombre" placeholder="Nombre" autoComplete="off" value={nombre} onChange={ev => setNombre(ev.target.value)}></input>
                                    <input type="number" name="telefono"  placeholder="Teléfono de contacto" value={telefono} onChange={ev => setTelefono(ev.target.value)}></input>
                                    <input type="submit" value="Enviar datos" id="btn" disabled={errorMessage}  onClick={emitirCompra} className="btn btn-success col-6"/>
                                </form>

                                </div>
                    </Container>
            }
            </>
        )
    }
    
const login = (email, nombre) => {
    if(email !== "" && nombre !== ""){
        
    }
}

const validate = (email, email2, nombre, telefono) =>{
    if(!email.includes('@')) return 'Email incorrecto';
    if(nombre.length < 4) return 'Contraseña incorrecta';
    if(email !== email2) return 'Correos diferentes';
    if(telefono === "") return 'Ingrese un telèfono';
}

    export default Cart;

