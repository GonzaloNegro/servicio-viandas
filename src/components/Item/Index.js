import './Item.css';
import ItemCount from '../ItemCount';


function Item(props){
    return(
        <div className='card'>
             <div className='img'>
                <img src={props.picture} alt=""></img>
            </div>
            <div className='card-body'>
                <div className='card-body-nom'>
                    <h4>{props.title}</h4>
                </div>
                <div className='card-body-des'>
                    <p>Precio: ${props.price}</p>
                </div>
            </div>
            <ItemCount stock={props.stock}/>
        </div>
    );
}

export default Item;

