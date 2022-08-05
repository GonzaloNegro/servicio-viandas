import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
/* import {Data} from '../Data/Data'; */
import ItemList from '../ItemList/Index';
import Data from '../../Api/data.json'

function ItemListContainer(){
    const[loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const[resultado, setResultado] = useState([]);

    useEffect(() => {
        const productCarrito = new Promise ((res, rej)=>{
        setTimeout(() => {
                res(Data)
                rej("¡Error! No se pudieron cargar los productos")
        }, 2000);
        })
        
        productCarrito
            .then((result)=>{
                setResultado(result)
            })
            .catch(()=> {
                setError(error === true)
            })
            .finally(()=>{
                setLoading(false)
            });
        
    })
    return (
        <>
            {
              loading ? <h4 className='charge'>Cargando productos...</h4> : <ItemList productos={resultado} />
            }
        </>
    )
}

      export default ItemListContainer;