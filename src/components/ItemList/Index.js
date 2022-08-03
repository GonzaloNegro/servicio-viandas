import React from "react";
import './ItemList.css';
import Item from "../Item/Index";

function ItemList(props){
    return(
        <div className='itemL'>
            <Item id={props.id} title={props.title} description={props.description} price={props.price} picture={props.picture} stock={props.stock}/>
        </div>
    );
}
export default ItemList;