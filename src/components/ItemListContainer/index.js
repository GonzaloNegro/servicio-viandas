import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import getFetch from '../Data/Data';
import ItemList from '../ItemList/Index';

function ItemListContainer(){
    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(() =>{
        getFetch
        .then((resp)=>setData(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])

    return(
            <div className='itemCon'>
            {
                loading ? <h4>Cargando...</h4> : 
                data.map(via=><ItemList key={via.id} id={via.id} title={via.title} description={via.description} price={via.price} picture={via.picture} stock={via.stock}/>)
            }
            </div>
    );
}

export default ItemListContainer;