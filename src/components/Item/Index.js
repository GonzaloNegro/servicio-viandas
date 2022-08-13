import './Item.css';
import { useNavigate } from 'react-router-dom';

function Item(props){
    const navigateFn = useNavigate();

    const loadUserDetails = () =>{
        navigateFn(`/details/${props.id}`);
    }

    return(
        <div className='card'>
             <div className='img'>

                <img src={props.picture} alt={props.alt}></img>
            </div>
            <div className='card-body'>
                <div className='card-body-nom'>
                    <h4>{props.title}</h4>
                </div>
                <p className='car-body-price'>Precio: ${props.price}</p>
                <div className='card-body-des'>
                    <button type="submit" className='button-det' onClick={loadUserDetails}>Ver detalles</button>
                </div>
            </div>
        </div>
    );
}

export default Item;

