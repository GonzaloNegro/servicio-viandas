import React from "react";
import './ItemList.css';
import Item from "../Item/Index";

function ItemList(props){
    return(
        <div className='itemL'>
            {
            props.productos.map((via)=>{
                return(
                    <Item key={via.id} id={via.id} title={via.title} description={via.description} price={via.price} picture={via.picture} initial={via.initial} alt={via.alt} stock={via.stock} ingredientes={via.ingredientes} valorEnergetico={via.valorEnergetico} tipo={via.tipo}/>
                )
            })
            }
        </div>
    );
}
export default ItemList;