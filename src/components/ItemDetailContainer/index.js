import ItemDetail from '../ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Data from '../../Api/data.json'

function ItemDetailContainer(){

    const [product, setProduct] = useState({});
    const {id} = useParams();

   useEffect(() => {
        const getProductById = (id) => {return new Promise ((res, rej)=>{
        setTimeout(() => {
            res(Data.find(product => product.id === id))
            rej(console.log('No hay datos'));
        }, 2000);
        })
    }

console.log(id);
        getProductById(id)
        .then(product =>{
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
    }, [id])

    console.log(id);
    return(
        <div className='detcont'>
            <ItemDetail product={product}/>
        </div>
    );
}

export default ItemDetailContainer;