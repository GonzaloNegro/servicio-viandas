import {useState, useEffect} from 'react';
import './ItemCount.css';


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