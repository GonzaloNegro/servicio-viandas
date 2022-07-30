import './ItemListContainer.css';



function ItemListContainer(props){
    return(
    <div className='card'>
        <div className='img'>
            <img src={props.img} alt="Imagen"></img>
        </div>
        <div className='card-body'>
            <div className='card-body-nom'>
                <h4>{props.nombre}</h4>
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