import './ItemListContainer.css';
/* import ItemCount from '../ItemCount'; */


function ItemListContainer(props){
    return(
    <div className='card'>
        <div className='img'>

        </div>
        <div className='card-body'>
            <div className='card-body-nom'>
                <p>{props.nombre}</p>
            </div>
            <div className='card-body-des'>
                <p>{props.descripcion}</p>
            </div>
            {props.children}
        </div>

    </div>
    );
}

export default ItemListContainer;