import './Item.css';
import ItemCount from '../ItemCount';
import { /* Link, */ useNavigate } from 'react-router-dom';

function Item(props){
   /*  const cargarImagen = require.context("../../../public/Imagenes/", true); */
    const navigateFn = useNavigate();

    const loadUserDetails = () =>{
        navigateFn(`/details/${props.id}`);
    }

    return(
        <div className='card'>
             <div className='img'>
                {/* <img src={cargarImagen(`${props.picture}`)} alt={props.alt}></img> */}
                <img src={props.picture} alt={props.alt}></img>
            </div>
            <div className='card-body'>
                <div className='card-body-nom'>
                    <h4>{props.title}</h4>
                </div>
                <div className='card-body-des'>
                    {/* <Link to={`/details/${props.id}`}> */}
                        <button type="submit" className='button-det' onClick={loadUserDetails}>Ver detalles</button>
                   {/*  </Link> */}
                </div>
                    <p>Precio: ${props.price}</p>
            </div>
            <ItemCount initial={props.initial} stock={props.stock}/>
        </div>
    );
}

export default Item;

