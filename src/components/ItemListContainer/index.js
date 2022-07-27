import './ItemListContainer.css'


function ItemListContainer(props){
    return(
    <div className='item'>
        <div className='img'>

        </div>
        <div className='nom'>
            <p>{props.nombre}</p>
        </div>
        <div className='des'>
            <p>{props.descripcion}</p>
        </div>
    </div>
    );
}

export default ItemListContainer;