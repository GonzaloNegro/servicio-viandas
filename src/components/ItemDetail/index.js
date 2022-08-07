import './ItemDetail.css';
import React from 'react';

export default function ItemDetail(props){
    return(
        <div className='itemD'>
           {/* <img className='imgD' src="" alt=""></img> */}
            <div className='det'>
                <div>Nombre prod: {props.title}</div>
                <div>Tipo:</div>
                <div>Descripion</div>
                <div>Ingredientes</div>
                <div>valor Energetico</div>
                <div>Ingredientes</div>
                <div>Precio</div>
            </div>
        </div>
    );
}