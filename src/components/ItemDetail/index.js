import './ItemDetail.css';
/* import { useEffect, useState } from 'react'; */

export default function ItemDetail({picture, title, tipo, ingredientes, valorEnergetico, description, price, alt}){

/*     const[resultado, setResultado] = useState([]); */

/*     useEffect(() => {
        const cargarImg = require.context("../../../public/Imagenes/", true);
    }, []) */

    
/* const cargarImg = require.context("../../../public/Imagenes/", true); */

    return(
        <div className='itemD'>
            <div className='imgD'>
                {/* <img src={cargarImg(`${picture}`)} alt={alt}></img>  */}
                <img src={picture} alt={alt}></img> 
            </div>
            <div className='det'>
                <div className='titDet'><h1>{title}</h1></div>
                <div className='titDet'><h2><u>Tipo:</u> <font>{tipo}</font></h2></div>
                <div className='titDet'><h2><u>Descripion:</u> <font>{description}</font></h2></div>
                <div className='titDet'><h2><u>Ingredientes:</u> <font>{ingredientes}</font></h2></div>
                <div className='titDet'><h2><u>Valor Energetico:</u> <font>{valorEnergetico}</font></h2></div>
                <div className='titDet'><h2><u>Precio:</u> <font>${price}</font></h2></div>
            </div>
        </div>
    );
}