import React from "react";
import './ItemList.css';
import Item from "../Item/Index";

function ItemList(props){
    return(
        <div className='itemL'>
            {
            props.productos.map((via)=>{
                return(
                    <Item key={via.id} {...via}/>
                )
            })
            }
        </div>
    );
}
export default ItemList;