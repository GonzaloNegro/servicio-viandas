import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/Index';
import { useParams } from 'react-router-dom';
import { getProducts, getProductByIdCategory } from '../export';



function ItemListContainer(){

        const[loading, setLoading] = useState(true);
        const [products, setProducts] = useState([]);
        const {categoryId} = useParams()
    
        useEffect(()=>{
            if(!categoryId){
                getProducts().then(products=>{
                    setProducts(products)
                    setLoading(false)
                })
            }
            else{
                getProductByIdCategory(categoryId).then(products=>{
                    setProducts(products)
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
                  loading ? <h4 className='charge'>Cargando productos...</h4> :  <ItemList productos={products} />
                }
            </>
        )
    }


      export default ItemListContainer;