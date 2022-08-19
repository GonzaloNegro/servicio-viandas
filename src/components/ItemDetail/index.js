import './ItemDetail.css';
import { useState } from 'react';
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import Counter from '../ItemCount';
import { Link } from "react-router-dom";
import swal from 'sweetalert';
/* import { useEffect, useState } from 'react'; */

/* export default function ItemDetail({picture, title, tipo, ingredientes, valorEnergetico, description, price, alt, initial, stock}){ */
export default function ItemDetail(props) {
/*     <p id="valorCart" className='cartcant'>0</p>
    const valorCart = document.querySelector('#valorCart'); */
    const [irAlCarrito, setearCarrito] = useState(false);
    const { addProducto } = useCartContext();
  
    function agregarProducto(cantidad) {
      setearCarrito(true);
      addProducto(props, cantidad);
      swal(`¡Agregaste ${cantidad} ${props.title} a tu carrito!`);
      /* const total = cart.cantidad.reduce((prev, curr) => prev + curr); */
      
  /*     valorCart.innerHTML = cantidad; */
    }

    return(
        <div className='itemD'>
            <div className='imgD'>
                {/* <img src={cargarImg(`${picture}`)} alt={alt}></img>  */}
                <img src={props.picture} alt={props.alt}></img> 
            </div>
            <div className='det'>
                <div className='titDet'><h1>{props.title}</h1></div>
                <div className='titDet'><h2><u>Tipo:</u> <font>{props.tipo}</font></h2></div>
                <div className='titDet'><h2><u>Descripción:</u> <font>{props.description}</font></h2></div>
                <div className='titDet'><h2><u>Ingredientes:</u> <font>{props.ingredientes}</font></h2></div>
                <div className='titDet'><h2><u>Valor Energético:</u> <font>{props.valorEnergetico}</font></h2></div>
                <div className='titDet'><h2><u>Precio:</u> <font>${props.price}</font></h2></div>
                {irAlCarrito ? (
              <div>
                <Link to="/cart">
                  {" "}
                  <Button className="btn btn-success">
                    Finalizar Compra
                  </Button>
                  {" "}
                </Link>
                <Link to="/">
                  {" "}
                  <Button className="btn btn-success next">
                    Seguir comprando
                  </Button>
                  {" "}
                </Link>
              </div>
            ) : (
              <Counter initial={props.initial} stock={props.stock} onAdd={agregarProducto} />
            )}
                {/* <div><ItemCount initial={props.initial} stock={props.stock} /></div> */}
            </div>
        </div>
    );
}