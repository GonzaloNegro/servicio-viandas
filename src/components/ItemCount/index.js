import './ItemCount.css';

/* const vale = 10;
const sumar = document.querySelector('#suma');
const restar = document.querySelector('#resta');
const valor = document.querySelector('#nro').value;

sumar.addEventListener("click", ()=>{
    valor.innerHTML = vale;
}
) */

function ItemCount(){
    return(
        <div>
            <div className='cant'>
                <button type="submit" id="resta" className='but'>-</button>
                <p className='cont' id="nro">0</p>
                <button type="submit" id="suma" className='but'>+</button>
            </div>
            <button type='submit' className='button'>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;