import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/Index';
import { useParams } from 'react-router-dom';
/* import { getProducts, getProductByIdCategory } from '../export'; */
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


function ItemListContainer(){

    const [error ,setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [resultado, setResultado] = useState([]);
    const { categoryId } = useParams ();
    
    useEffect(() => {
    const queryDatabase = getFirestore ();
    const queryCollection = collection(queryDatabase, 'productos')

    if(categoryId){
      const queryFilter = query(queryCollection, where('category', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setResultado(res.docs.map(producto => (
            {id: producto.id, ...producto.data()}
            ))))
        .catch(()=>{
          setError(true)
        })
        .finally(()=> {
          setLoading(false)
        })
    } else {
      getDocs(queryCollection)
        .then(res => setResultado(res.docs.map(producto => (
            {id: producto.id, ...producto.data()}
            ))))
        .catch(()=>{
          setError(true)
        })
        .finally(()=> {
          setLoading(false)
        })
    }
  
  
    }, [categoryId])
    
        return (
            <>
                <div className='titv' id="viandas">
                    <h1>NUESTRAS VIANDAS PRÁCTICAS Y SALUDABLES</h1>
                    
                </div>
                {
                  loading ? <h4 className='charge'>Cargando productos...</h4> :  <ItemList productos={resultado} />
                }
            </>
        )
    }


      export default ItemListContainer;