import {useState} from 'react';
import './ItemCount.css';

function ItemCount(props){

    const valorCart = document.querySelector("#valorCart");
    const [dis, setDisable] = useState(false);
    const [di, setDis] = useState(false);

    
    const [total, set] = useState(0);
    const [contador, setContador] = useState(1);

    function sumar(){
        if(contador < props.stock){
            setContador(contador + 1);
            setDis(false)
        }else{
            setDisable(true)
        }
    }

    function restar(){
        if(contador === 1){
            setDis(true)
        }
        else{
            setContador(contador - 1);
            setDisable(false)
        }
    }

    function mover(){
        window.scrollTo({
            top: 0
          });
    }

    function agregar(){
        set(total + contador);
        if(contador !== 0){
            valorCart.innerHTML = 1;
            alert("Has agregado " + contador + " producto al carrito");
            mover();
        }else{
            alert("Por favor selecciona una cantidad")
        }
        setContador(contador - (contador - 1));
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