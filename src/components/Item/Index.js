import './Item.css';
import ItemCount from '../ItemCount';


function Item(props){
    const cargarImagen = require.context("../../../public/Imagenes/", true);

    return(
        <div className='card'>
             <div className='img'>
                <img /* src={props.picture} */ src={cargarImagen(`${props.picture}`)} alt={props.alt}></img>
            </div>
            <div className='card-body'>
                <div className='card-body-nom'>
                    <h4>{props.title}</h4>
                </div>
                <div className='card-body-des'>
                    <p>Precio: ${props.price}</p>
                </div>
            </div>
            <ItemCount initial={props.initial} stock={props.stock}/>
        </div>
    );
}

export default Item;

