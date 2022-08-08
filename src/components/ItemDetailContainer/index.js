import ItemDetail from '../ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
/* import Data from '../../Api/data.json'; */
import { getProductById } from '../export';

function ItemDetailContainer(){

    const [product, setProduct] = useState();
    const {id} = useParams();

   useEffect(() => {
        getProductById(id)
        .then(product =>{
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
    }, [id])

    return(
        <div className='detcont'>
            <ItemDetail {...product}/>
        </div>
    );
}

export default ItemDetailContainer;