import {useState, useEffect} from 'react';
import './ItemCount.css';
/* import swal from 'sweetalert'; */

/* function ItemCount(props){     */ 

/*     const valorCart = document.querySelector("#valorCart");
    
    const [dis, setDisable] = useState(false);
    const [di, setDis] = useState(false);
    const [contador, setContador] = useState(props.initial);

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

        if(contador !== 0){
            valorCart.innerHTML = contador;
            swal("Has agregado " + contador + " producto al carrito");
            mover();
        }else{
            swal("Por favor selecciona una cantidad")
        }
        setContador(contador - (contador - 1));
        setDisable(false)
    }

    return(
        <div className='cant'>
            <div className='cant-nro'>
                <button type="submit" className='butmen' id="menos" disabled={di} onClick={restar}>-</button>
                <p className='cont' id="nro">{contador}</p>
                <button type="submit" className='butmas' disabled={dis} onClick={sumar}>+</button>
            </div>
            <div className='cant-conf'>
                <button type='submit' className='button' id="confirmar" onClick={agregar}>Agregar al carrito</button>
                <h5>Stock: {props.stock}</h5>    
            </div>
        </div>
    );
} */

function ItemCount({stock, initial, onAdd}){    

    const [Counter, setCounter] = useState(parseInt (initial));

    function addCounter() {
        if (Counter <= stock) {
            setCounter(Counter + 1);
        }

    }

    function reduceCounter() {
        if (Counter >= 1) {
            setCounter(Counter - 1)
        }
    }

    useEffect(()=>{
        setCounter(parseInt(initial))
    }, [initial])


    return (
        <div className='cant'>
            <div className='cant-nro'>
                <button type="submit" disabled={Counter <= 1} className='butmen' onClick={reduceCounter}>-</button>
                <p className='cont'> {Counter}</p>
                <button type="submit"  disabled={Counter >= stock} className='butmas' onClick={addCounter}>+</button>
            </div>
            <div className='cant-conf'>
                <button disabled={stock <= 0} onClick={() => onAdd(Counter)} className='button'>Agregar al carrito</button>
                <h5>Stock: {stock}</h5>
            </div>
        </div>
    )
}





export default ItemCount;