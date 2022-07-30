import {useState} from 'react';
import './ItemCount.css';

function ItemCount(props){

    const valorCart = document.querySelector("#valorCart");
    const [dis, setDisable] = useState(false);
    const [di, setDis] = useState(false);
/*     const confirmar = document.querySelector("#confirmar");
    const menos = document.querySelector("#menos"); */
/*     const mas = document.getElementById("mas"); */

/*     window.onload(deshabilitar); */
    
    
    const [total, set] = useState(0);
    const [contador, setContador] = useState(props.initial);

    function sumar(){
        if(contador < props.stock){
            setContador(contador + 1);
            setDis(false)
        }else{
            setDisable(true)
        }
    }

/*     function deshabilitar(){
        if(props.stock === 0){
            confirmar.disabled = true;
            mas.disabled = true;
            menos.disabled = true
        }else{
            confirmar.disabled = false;
            mas.disabled = false;
            menos.disabled = false
        }
    } */

    function restar(){
        if(contador === 1){
            setDis(true)
        }
        else{
            setContador(contador - 1);
            setDisable(false)
        }
    }

    function agregar(){
        set(total + contador);
        if(contador !== 0){
            alert("Has agregado " + contador + " producto al carrito")
            valorCart.innerHTML = 1;
        }else{
            alert("Por favor selecciona una cantidad")
        }
        setContador(contador - contador);
        setDisable(false)
    }

    return(
        <div>
            <div className='cant'>
                <button type="submit" className='butmen' id="menos" disabled={di} onClick={restar}>-</button>
                <p className='cont' id="nro">{contador}</p>
                <button type="submit" className='butmas' disabled={dis} onClick={sumar}>+</button>
            </div>
            <button type='submit' className='button' id="confirmar" onClick={agregar}>Agregar al carrito</button>
            <h5>Stock: {props.stock}</h5>
        </div>
    );
}

export default ItemCount;